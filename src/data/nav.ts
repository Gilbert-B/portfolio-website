import { NAV } from '../site';

// Menu links. "Notes" is hidden until at least one published note exists
// (the page itself still exists). Read the files directly so an empty notes
// folder does not trigger a content warning on every page.
const notes = Object.values(
  import.meta.glob<string>('../content/notes/**/*.md', { query: '?raw', import: 'default', eager: true }),
).filter((src) => !/^draft:\s*true\s*$/m.test(src));

export const MENU = NAV.filter((n) => n.href !== '/' && (n.href !== '/notes/' || notes.length > 0));
