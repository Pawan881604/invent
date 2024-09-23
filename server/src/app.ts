import express from "express";
const app = express();

import servicesLoader from './loaders/servicesLoader';
import userRoutes from './api/routes/userRoutes';
import UserRepository from './repositories/userRepository';
import UserService from './services/userService';
import UserController from './api/controllers/userController';
import { repositoriesLoader } from "./loaders/repositoriesLoader";
import errorMiddleware from "./middlewares/error";


// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));



const repositories = repositoriesLoader();

// Load services
const services = servicesLoader(repositories);

// Create controllers
const userController = new UserController(services.userService);

// Set up routes
app.use('/api/users', userRoutes(userController));
app.use(errorMiddleware);


export default app;