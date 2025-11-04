/**
 * Funció per processar el contingut HTML i convertir URLs de tweets en blockquotes de Twitter
 * que seran renderitzats per widgets.js
 * @param content - El contingut HTML del article
 * @returns El contingut amb les URLs de tweets convertides en blockquotes de Twitter
 */
export function processTweetEmbeds(content: string): string {
  // Si el contingut ja conté blockquotes de Twitter, no processar les URLs que hi siguin dins
  // Patró per detectar blockquotes de Twitter existents (pot estar dins d'un div o no)
  const existingBlockquotePattern = /(?:<div[^>]*>[\s]*)?<blockquote[^>]*class=["']twitter-tweet["'][^>]*>[\s\S]*?<\/blockquote>(?:[\s]*<\/div>)?/gi;
  
  // Dividir el contingut en parts: blockquotes existents i la resta
  const parts: Array<{ type: 'blockquote' | 'text'; content: string; index: number }> = [];
  let lastIndex = 0;
  let match;
  
  // Trobar tots els blockquotes existents
  while ((match = existingBlockquotePattern.exec(content)) !== null) {
    // Afegir el text abans del blockquote
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: content.substring(lastIndex, match.index),
        index: lastIndex,
      });
    }
    
    // Afegir el blockquote sense processar
    parts.push({
      type: 'blockquote',
      content: match[0],
      index: match.index,
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Afegir el text restant
  if (lastIndex < content.length) {
    parts.push({
      type: 'text',
      content: content.substring(lastIndex),
      index: lastIndex,
    });
  }
  
  // Si no hi ha blockquotes, processar tot el contingut normalment
  if (parts.length === 0) {
    const tweetUrlPattern = /(https?:\/\/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)(?:\?[^\s<>"]*)?)/gi;
    return content.replace(tweetUrlPattern, (match, url) => {
      return `<div class="w-full flex justify-center p-4"><blockquote class="twitter-tweet" data-media-max-width="370"><p lang="es" dir="ltr"><a href="${url}">${url}</a></p></blockquote></div>`;
    });
  }
  
  // Processar només les parts de text (no els blockquotes)
  const processedParts = parts.map((part) => {
    if (part.type === 'blockquote') {
      return part.content;
    }
    
    // Processar URLs de tweets en el text
    const tweetUrlPattern = /(https?:\/\/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)(?:\?[^\s<>"]*)?)/gi;
    return part.content.replace(tweetUrlPattern, (match, url) => {
      return `<div class="w-full flex justify-center p-4"><blockquote class="twitter-tweet" data-media-max-width="370"><p lang="es" dir="ltr"><a href="${url}">${url}</a></p></blockquote></div>`;
    });
  });
  
  return processedParts.join('');
}
