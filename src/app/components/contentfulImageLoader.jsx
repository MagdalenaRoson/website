export default function contentfulLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}&fm=webp`;
}
