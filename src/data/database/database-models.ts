export type KnowledgeEntityType = 'weapon' | 'armor' | 'attachment' | 'ammunition' | 'loadout';
export type KnowledgeValueStatus = 'confirmed' | 'observed' | 'currently_unconfirmed';

export interface KnowledgeValue<T = string | number | boolean> {
  value: T | null;
  status: KnowledgeValueStatus;
  source?: string;
  note?: string;
}

export interface KnowledgeRelation {
  type: 'belongs_to' | 'used_in' | 'compare_with' | 'related_guide' | 'related_system' | 'compatible_with' | 'uses';
  targetId: string;
  name: string;
  url: string;
}

export interface KnowledgePatchRecord {
  version: string;
  date?: string;
  note: string;
  changedFields?: string[];
}

export interface KnowledgeEntityBase {
  id: string;
  name: string;
  type: KnowledgeEntityType;
  image: string;
  description: string;
  attributes: Record<string, KnowledgeValue>;
  relations: KnowledgeRelation[];
  version: string;
  patchHistory: KnowledgePatchRecord[];
}

export interface WeaponEntity extends KnowledgeEntityBase {
  type: 'weapon';
  stats: {
    weaponClass: KnowledgeValue<string>;
    combatRole: KnowledgeValue<string>;
    fireMode?: KnowledgeValue<string>;
    magazineSize?: KnowledgeValue<number>;
  };
  compatibleAttachmentIds: string[];
  ammunitionIds: string[];
}

export interface ArmorEntity extends KnowledgeEntityBase {
  type: 'armor';
  stats: {
    armorClass: KnowledgeValue<string>;
    protectedArea: KnowledgeValue<string>;
    protectionLevel?: KnowledgeValue<string>;
    weight?: KnowledgeValue<number>;
  };
  compatibleLoadoutIds: string[];
}

export interface AttachmentEntity extends KnowledgeEntityBase {
  type: 'attachment';
  stats: {
    attachmentClass: KnowledgeValue<string>;
    mountType: KnowledgeValue<string>;
    effect?: KnowledgeValue<string>;
  };
  compatibleWeaponIds: string[];
}

export interface AmmunitionEntity extends KnowledgeEntityBase {
  type: 'ammunition';
  stats: {
    caliber: KnowledgeValue<string>;
    ammunitionClass: KnowledgeValue<string>;
    capacity?: KnowledgeValue<number>;
  };
  compatibleWeaponIds: string[];
}

export interface LoadoutEntity extends KnowledgeEntityBase {
  type: 'loadout';
  stats: {
    role: KnowledgeValue<string>;
    budgetTier: KnowledgeValue<string>;
    estimatedCost?: KnowledgeValue<number>;
  };
  weaponIds: string[];
  armorIds: string[];
  attachmentIds: string[];
  ammunitionIds: string[];
}

export type DatabaseModelEntity = WeaponEntity | ArmorEntity | AttachmentEntity | AmmunitionEntity | LoadoutEntity;

export const isCurrentlyUnconfirmed = (value: KnowledgeValue): boolean => value.status === 'currently_unconfirmed';
