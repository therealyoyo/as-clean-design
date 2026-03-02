/**
 * Sitemap component — renders a basic XML sitemap structure as a page.
 * In production, this should be generated server-side as XML.
 * This placeholder lists all routes for reference.
 */
import { getAllServices } from "@/data/services";
import { brusselsCommunes } from "@/data/communes";

const baseUrl = "https://www.ascleaning.be";

const staticRoutes = [
  "/",
  "/services",
  "/tarifs",
  "/a-propos",
  "/faq",
  "/blog",
  "/contact",
  "/zones",
];

export function generateSitemapUrls(): string[] {
  const urls = [...staticRoutes];

  // Add all service pages
  getAllServices().forEach((s) => {
    urls.push(`/services/${s.category.slug}/${s.service.slug}`);
  });

  return urls.map((path) => `${baseUrl}${path}`);
}
