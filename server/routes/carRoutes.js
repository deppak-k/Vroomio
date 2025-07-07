import express from "express";
import { getCars } from "../controllers/userController.js";

const carRouter = express.Router();

// Public endpoint to get all cars
carRouter.get('/cars', getCars);

export default carRouter;
