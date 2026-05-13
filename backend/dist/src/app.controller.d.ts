import { AppService, type Project } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getProject(id: any): Project;
}
