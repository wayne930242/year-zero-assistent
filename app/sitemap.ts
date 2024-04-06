import { MetadataRoute } from "next";

const pages = ["walking-dead"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...pages.map((page) => ({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${page}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
