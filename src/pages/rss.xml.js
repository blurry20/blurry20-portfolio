import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const scripts = await getCollection("scripts");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    categories: [],
    items: scripts.map((script) => ({
      ...script.data,
      link: `/linux/${script.slug}/`,
    })),
  });
}
