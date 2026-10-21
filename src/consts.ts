export const SITE_TITLE = 'Augusto Castillo Vergara — Software Engineer';
export const SITE_DESCRIPTION =
  'Software engineer with experience in banking, specializing in Java, Spring Boot, and modern web development. Explore my experience, technical skills, and approach to building reliable software.';

// Keep this in sync with `site` in astro.config.mjs.
export const SITE_URL = 'https://blurry20.vercel.app';

export const SOCIAL_LINKS = {
  github: 'https://github.com/blurry20',
  linkedin: 'https://www.linkedin.com/in/augusto-castillo-v/',
};

// Replace these with your real projects. `featured: true` highlights a card
// (same accent treatment as the primary skill card). `repo` / `demo` are
// optional — omit a key to hide that link.
export const projects = [
  {
    title: 'Personal portfolio',
    description:
      'This site. A fast, accessible, single-page portfolio built with Astro and hand-written CSS — no UI framework, dark theme, and a perfect Lighthouse-style pass as the goal.',
    tags: ['Astro', 'TypeScript', 'CSS'],
    repo: 'https://github.com/blurry20/blurry20-portfolio',
    demo: SITE_URL,
    featured: true,
  },
  {
    title: 'Project name',
    description:
      'One or two sentences on what it does and the problem it solves. Lead with the outcome, then the approach. Replace this placeholder with a real project.',
    tags: ['Java', 'Spring Boot'],
    repo: 'https://github.com/blurry20',
    demo: undefined,
    featured: false,
  },
  {
    title: 'Project name',
    description:
      'Another highlight — ideally something that shows backend depth or a full-stack build. Replace this placeholder with a real project.',
    tags: ['React', 'Next.js', 'Node.js'],
    repo: 'https://github.com/blurry20',
    demo: undefined,
    featured: false,
  },
];

export const skillGroups = [
  {
    number: '01',
    title: 'Backend & quality',
    description: 'My core focus. Maintainable services, clear architecture, and confidence through testing.',
    skills: ['Java', 'Spring Boot', 'JUnit', 'Mockito', 'Python'],
  },
  {
    number: '02',
    title: 'Web development',
    description: 'Connecting reliable backends with thoughtful, responsive web experiences.',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'Node.js'],
  },
  {
    number: '03',
    title: 'Delivery & observability',
    description: 'Supporting software beyond the code, from deployments to monitoring in production.',
    skills: ['Docker', 'Git', 'Jenkins', 'Anthos', 'Argo CD', 'Dynatrace'],
  },
];
