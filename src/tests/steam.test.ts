import request from 'supertest';
import App from '@/app';
import SteamRoute from '@/routes/steam.route';
import { SteamUserInventoryDto } from '@/dtos/steam.user.inventory.dto';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Steam', () => {
  describe('[POST] /steam/inventory/user', () => {
    it('responce Steam user inventory', () => {
      const userData: SteamUserInventoryDto = {
        userId: '76561199172982948',
        isTradable: true,
      };
      const steamRoute = new SteamRoute();
      const app = new App([steamRoute]);
      return request(app.getServer()).post('/steam/inventory/user').send(userData);
    });
  });
});
