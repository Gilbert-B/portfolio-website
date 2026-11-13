// Content collections: each project case study and note is a Markdown file.
// The schema checks front matter at build time, so a missing field fails the build.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['in-progress', 'complete']),
    tools: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    date: z.coerce.date(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Unpacked by GilB episodes. One Markdown file per story; the body holds the case study.
// Only episodes with `approved: true` are built, so drafts can live here safely.
const unpacked = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/unpacked' }),
  schema: z
    .object({
      storyId: z.string().regex(/^GILB-\d{3}$/),
      title: z.string(),
      domain: z.string(),
      summary: z.string(),
      order: z.number(),
      approved: z.boolean(),
      status: z.enum(['production-complete', 'published']),
      publishedUrl: z.string().url().optional(),
      video: z.object({
        src: z.string(),
        poster: z.string(),
        duration: z.string(),
      }),
      keyFigures: z.array(z.object({ value: z.string(), label: z.string() })).max(4),
      compare: z
        .object({
          title: z.string(),
          note: z.string().optional(),
          items: z.array(z.object({ label: z.string(), value: z.number(), display: z.string() })),
        })
        .optional(),
      methods: z.array(z.string()),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })),
    })
    // A "published" episode must point at its real post.
    .refine((e) => e.status !== 'published' || e.publishedUrl, {
      message: 'Published episodes need a publishedUrl',
    }),
});

export const collections = { projects, notes, unpacked };
