export interface ProjectObj {
  id: string,
  featured: boolean,
  title: string,
  subtitle?: string,
  briefDescription: string,
  description?: string[],
  status: string,
  tags: string[],
  githubLink?: string,
  liveLink?: string,
  poster: string,
  video?: string,
  startDate: Date,
  endDate: Date
}