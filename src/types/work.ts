export interface WorkExperienceType {
    id: string;
    company: string;
    company_url?: string;
    role: string;
    project: string;
    start_date: string;
    end_date: string;
    responsabilities: string;
    summary: string;
    technologies: Array<string>;
}