import axios from 'axios';
import { HttpException } from '@exceptions/HttpException';
import { SteamInventory } from '@interfaces/steam.inventory';
import { SteamUserInventoryResponce } from '@/interfaces/steam.inventory.responce';
import { SteamUserInventoryDto } from '@/dtos/steam.user.inventory.dto';

class SteamService {
  public async findUserInventory(userData: SteamUserInventoryDto): Promise<Array<SteamInventory> | void | Error> {
    const inventoryRes = await axios.get<SteamUserInventoryResponce>(`https://steamcommunity.com/inventory/${userData.userId}/730/2?l=en`);
    if (inventoryRes.status != 200) {
      throw new HttpException(404, 'User not found or User Inventory dont visibel');
    } else {
      const inventory: Array<SteamInventory> = [];
      const inventorySteam = inventoryRes.data;
      for (const description of inventorySteam.descriptions) {
        inventory.push({ market_hash_name: description.market_hash_name, tradable: description.tradable });
      }
      if (userData.isTradable) {
        inventory.sort();
      }
      return inventory;
    }
  }
}
export default SteamService;
