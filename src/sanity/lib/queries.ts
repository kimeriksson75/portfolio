// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
	defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
	defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const SITE_QUERY = defineQuery(`*[_type == "site"][0]{
  title, description, logo, pages
}`);

export const PAGE_QUERY =
	defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  title, body, image, imageAlt, sections[]{
    _type == "section" => {
      title, body, image, imageAlt
    }
  }
}`);
