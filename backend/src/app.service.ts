import { Injectable, NotFoundException } from '@nestjs/common';

export interface Project {
  id: number;
  name: string;
}

const projects: Project[] = [
  { id: 1, name: "Hermes" },
  { id: 2, name: "Leonidas" }
]

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProject(projectId: number): Project {
    const project = projects.find(project => project.id === projectId);
    if(!project){
      throw new NotFoundException("Project not found");
    }
    return project
  }

}

