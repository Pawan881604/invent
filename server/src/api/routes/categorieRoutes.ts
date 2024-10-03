import { Router } from "express";
import CategorieController from "../controllers/categorieController";
import upload from "../../middlewares/multer";

const categorieRoutes = (categorieController: CategorieController) => {
  const router = Router();
  router.post(
    "/add",
    upload.array("images"),
    categorieController.add_new_customer.bind(categorieController)
  );
  return router;
};
export default categorieRoutes;
