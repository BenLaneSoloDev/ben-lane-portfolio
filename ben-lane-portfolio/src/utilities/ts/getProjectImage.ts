
export default function getProjectImage(filename: string): string {
  return new URL(`../../assets/projectSS/${filename}`, import.meta.url).href;
}