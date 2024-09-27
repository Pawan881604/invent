import { NextFunction, Request, Response } from "express";
import AsyncHandler from "../../middlewares/AsyncHandler";
import VendorService from "../../services/vendorService";

class VendorController {
  constructor(private vendorService: VendorService) {}
  add_new = AsyncHandler.handle(
    async (req: Request, res: Response, next: NextFunction) => {
      const vendor = await this.vendorService.add_new_vendor(req.body, next);

      if (vendor) {
        return res.status(201).json({
          success: true,
          vendor,
        });
      }
    }
  );
  all_vendors = AsyncHandler.handle(
    async (req: Request, res: Response, next: NextFunction) => {
      const query = req.query;

      const resultPerpage = Number(query.rowsPerPage);
      console.log(query)
      const vendor = await this.vendorService.all_vendors(query);
      const data_counter = await this.vendorService.data_counter(query);
      if (vendor) {
        return res.status(201).json({
          success: true,
          vendor,
          resultPerpage,
          data_counter
        });
      }
    }
  );
}
export default VendorController;
