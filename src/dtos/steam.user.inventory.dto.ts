import { IsBoolean, IsString } from 'class-validator';

export class SteamUserInventoryDto {
  @IsString()
  public userId: string;
  @IsBoolean()
  public isTradable: boolean;
}
