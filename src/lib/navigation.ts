export const PAGE_TO_SLUG: Record<string, string> = {
  Home: "home",
  Media: "media",
  Projects: "projects",
  Minis: "minis",
  "About Me": "about",
  Contact: "contact",
};

const SLUG_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_SLUG).map(([page, slug]) => [slug, page])
) as Record<string, string>;

export function pageToHash(page: string, anchor?: string | null): string {
  const slug = PAGE_TO_SLUG[page];
  if (!slug || slug === "home") {
    return anchor ? `#home/${anchor}` : "";
  }
  return anchor ? `#${slug}/${anchor}` : `#${slug}`;
}

export function hashToNavigationTarget(hash: string): {
  page: string;
  anchor: string | null;
} {
  const cleaned = hash.replace(/^#\/?/, "").trim();
  if (!cleaned) {
    return { page: "Home", anchor: null };
  }

  const [slug, ...anchorParts] = cleaned.split("/");
  const page = SLUG_TO_PAGE[slug.toLowerCase()] ?? "Home";
  const anchor = anchorParts.length > 0 ? anchorParts.join("/") : null;

  return { page, anchor };
}

export function parseNavigationTarget(target: string): {
  page: string;
  anchor: string | null;
} {
  if (target.includes("#")) {
    const [page, anchor] = target.split("#");
    return { page, anchor: anchor || null };
  }

  return { page: target, anchor: null };
}
