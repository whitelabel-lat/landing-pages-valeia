export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  loading = "lazy"
}) {
  // Convertir URL de Contentful a WebP si es posible
  const imageUrl = src?.startsWith('//') ? 
    `https:${src}` : src;
  
  const webpUrl = imageUrl?.includes('images.ctfassets.net') ?
    `${imageUrl}?fm=webp&q=80` : imageUrl;

  return (
    <img
      src={webpUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : loading}
      decoding={priority ? "sync" : "async"}
    />
  );
}