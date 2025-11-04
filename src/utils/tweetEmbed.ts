/**
 * Funció per processar el contingut HTML i convertir URLs de tweets en blockquotes de Twitter
 * que seran renderitzats per widgets.js
 * @param content - El contingut HTML del article
 * @returns El contingut amb les URLs de tweets convertides en blockquotes de Twitter
 */
export function processTweetEmbeds(content: string): string {
  // Patrons per detectar URLs de tweets (tant twitter.com com x.com)
  // Format: https://twitter.com/username/status/123456789 o https://x.com/username/status/123456789
  const tweetUrlPattern = /(https?:\/\/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)(?:\?[^\s<>"]*)?)/gi;
  
  return content.replace(tweetUrlPattern, (match, url, tweetId) => {
    // Generar el blockquote amb el format oficial de Twitter
    // El widgets.js detectarà aquest blockquote i el convertirà en l'embed
    return `<div class="w-full flex justify-center p-4"><blockquote class="twitter-tweet" data-media-max-width="370"><p lang="es" dir="ltr"><a href="${url}">${url}</a></p></blockquote></div>`;
  });
}
