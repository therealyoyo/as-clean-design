import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

function setMeta(property: string, content: string, isName = false) {
  const attr = isName ? `name="${property}"` : `property="${property}"`;
  let el = document.head.querySelector<HTMLMetaElement>(
    isName ? `meta[name="${property}"]` : `meta[property="${property}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    if (isName) el.setAttribute("name", property);
    else el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description, true);
    setMeta("og:title", title);
    setMeta("og:description", description);
  }, [title, description]);
}
