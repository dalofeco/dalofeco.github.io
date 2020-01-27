import { string } from "prop-types"

export interface ProjectType {
    name: string;
    date: Date | null;
    subtitle: string
    summary: string
    technologies: Array<string>;
    id: string;
    github_url?: string;
    demo_url?: string;
}