export interface IProject {
  title: string;
  description: string;
  shortDescription?: string; // Optional short summary
  images: string[]; // URL of the uploaded image
  liveLink: string; // URL to the live project
  technologies: string[]; // Array of technologies used
  features?: string[]; // Optional array of key features
  createdAt?: Date; // Optional creation timestamp
  updatedAt?: Date; // Optional update timestamp
  githubRepo?: string; // Optional GitHub repository link
  my_role: 'full stack developer' | 'frontend developer' | 'backend developer';
  status?: 'active' | 'archived' | 'in-progress'; // Optional project status
  challengesFaced?: string; // Optional description of challenges faced
  futurePlan?: string;
}
