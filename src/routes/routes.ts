import { Router } from 'express';
import ProjectController from '../controllers/project.controller';

const router = Router();

router.get('/projects', new ProjectController().getProjects);
router.post('/projects', new ProjectController().createProject);
router.get('/', (req, res) => {
    //welcome page for documentation
    res.send(`
        <html>
            <body style ="display:grid;  height: 100vh; place-items: center;  ">
                <h1>Welcome to the API</h1>
                <p>This is the documentation for the project</p>
                <p>in the route /projects and the method GET, gives you the list of projects</p>
                <p>in the route /projects and the method POST, creates a new project</p>
            </body>
        </html>
    `);

})

export default router;