export function linkResolver(doc) {
  if (doc.type === "navigation") {
    return "/navigation/" + doc.uid
  }

  // Homepage route fallback
  return "/"
}
