export interface WorkExperienceType {
    id: string;
    company: string;
    company_url?: string;
    role: string;
    project: string;
    start_date: string;
    end_date: string;
    summary: string;
    responsabilities: Array<string>;
    technologies: Array<string>;
}