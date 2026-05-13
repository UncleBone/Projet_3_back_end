export interface Project {
    id: number;
    name: string;
}
export declare class AppService {
    getHello(): string;
    getProject(projectId: number): Project;
}
