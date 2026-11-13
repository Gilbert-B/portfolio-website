import { getCollection } from 'astro:content';

// Approved Unpacked episodes in display order. Anything not approved is never built.
export async function getEpisodes() {
  const all = await getCollection('unpacked', (e) => e.data.approved);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const UNPACKED = {
  name: 'Unpacked by GilB',
  tagline: "There's more to the story.",
  pitch:
    'Exploring the overlooked patterns behind familiar headlines through research, data analysis, verification and visual storytelling.',
  handle: '@Ghyl_B',
};
