export interface ProjectObj {
  id: string,
  featured: boolean,
  title: string,
  subtitle?: string,
  briefDescription: string,
  description?: string[],
  status: string,
  tags: string[],
  githubLinks?: string[],
  liveLink?: string,
  poster: string,
  video?: string,
  startDate?: string,
  endDate?: string
}