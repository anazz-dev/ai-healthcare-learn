export function splitModuleSections(html: string) {
  return html.split(/(?=<h2\b)/i).filter(section => section.trim()).map((section, index) => ({
    html: section,
    title: (section.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || (index === 0 ? 'Introduction' : `Section ${index + 1}`))
      .replace(/<[^>]*>/g, '').replace(/^Slide\s+\d+\s*[–—:-]\s*/i, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' '),
  }));
}
