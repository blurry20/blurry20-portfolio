import { defineCollection, z } from "astro:content";

const scripts = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { scripts: scripts };
