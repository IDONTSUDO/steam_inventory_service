import { NextFunction, Request, Response } from 'express';
import SteamService from '@services/steam.service';
import { SteamUserInventoryDto } from '@/dtos/steam.user.inventory.dto';

class SteamController {
  public steamService = new SteamService();

  public userInventory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user: SteamUserInventoryDto = req.body;
      const userInventoryData = await this.steamService.findUserInventory(user);
      res.status(200).json(userInventoryData);
    } catch (error) {
      next(error);
    }
  };
}

export default SteamController;
