export interface Orb {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  github: string;
  stars: number;
  tech: string[];
  platforms: ('macos' | 'windows' | 'linux' | 'web' | 'cli')[];
  buildTime: string;
  creator: {
    name: string;
    avatar: string;
    github: string;
  };
  createdAt: Date;
  featured: boolean;
}
