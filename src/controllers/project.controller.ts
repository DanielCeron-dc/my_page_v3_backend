import { Response, Request } from "express";
import projectModel from "../models/project.model";

export default class ProjectController {

    public async getProjects(req: Request, res: Response): Promise<Response> {
        try {
            const projects = await projectModel.find();
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json({
                message: "Error getting projects"
            });
        }
    }

    public async createProject(req: Request, res: Response): Promise<Response> {
        
        try {
            const newProject = new projectModel(req.body);
            await newProject.save();
            return res.status(200).json({
                message: "Project created successfully"
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error creating project",
                error
            });
        }
    }

}


