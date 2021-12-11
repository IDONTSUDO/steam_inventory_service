// https://steamcommunity.com/inventory/76561199172982948/730/2?l=en
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import SteamController from '@controllers/steam.controller';
import { SteamUserInventoryDto } from '@/dtos/steam.user.inventory.dto';

class SteamRoute implements Routes {
  public path = '/steam';
  public router = Router();
  public steamController = new SteamController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/inventory/user`, validationMiddleware(SteamUserInventoryDto, 'body'), this.steamController.userInventory);
  }
}

export default SteamRoute;
