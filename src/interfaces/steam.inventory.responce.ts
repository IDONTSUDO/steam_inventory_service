export interface SteamUserInventoryResponce {
  assets: Asset[];
  descriptions: SteamUserInventoryResponceDescription[];
  total_inventory_count: number;
  success: number;
  rwgrsn: number;
}

export interface Asset {
  appid: number;
  contextid: string;
  assetid: string;
  classid: string;
  instanceid: string;
  amount: string;
}

export interface SteamUserInventoryResponceDescription {
  appid: number;
  classid: string;
  instanceid: string;
  currency: number;
  background_color: string;
  icon_url: string;
  icon_url_large: string;
  descriptions: DescriptionDescription[];
  tradable: number;
  actions: Action[];
  name: string;
  name_color: NameColor;
  type: string;
  market_name: string;
  market_hash_name: string;
  market_actions: Action[];
  commodity: number;
  market_tradable_restriction: number;
  marketable: number;
  tags: Tag[];
}

export interface Action {
  link: string;
  name: Name;
}

export enum Name {
  InspectInGame = 'Inspect in Game...',
}

export interface DescriptionDescription {
  type: Type;
  value: string;
  color?: DescriptionColor;
}

export enum DescriptionColor {
  The00A000 = '00a000',
  The9Da1A9 = '9da1a9',
}

export enum Type {
  HTML = 'html',
}

export enum NameColor {
  D2D2D2 = 'D2D2D2',
}

export interface Tag {
  category: Category;
  internal_name: string;
  localized_category_name: LocalizedCategoryName;
  localized_tag_name: string;
  color?: TagColor;
}

export enum Category {
  Exterior = 'Exterior',
  ItemSet = 'ItemSet',
  Quality = 'Quality',
  Rarity = 'Rarity',
  SprayColorCategory = 'SprayColorCategory',
  Tournament = 'Tournament',
  TournamentTeam = 'TournamentTeam',
  Type = 'Type',
  Weapon = 'Weapon',
}

export enum TagColor {
  B0C3D9 = 'b0c3d9',
  The4B69Ff = '4b69ff',
  The8847Ff = '8847ff',
}

export enum LocalizedCategoryName {
  Category = 'Category',
  Collection = 'Collection',
  Exterior = 'Exterior',
  GraffitiColor = 'Graffiti Color',
  Quality = 'Quality',
  Team = 'Team',
  Tournament = 'Tournament',
  Type = 'Type',
  Weapon = 'Weapon',
}
