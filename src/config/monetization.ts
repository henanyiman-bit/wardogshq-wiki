export type AdPlacement = 'wiki' | 'entity' | 'tool';

export interface AdPlacementConfig {
  key: string;
  width: number;
  height: number;
  label: string;
}

const cleanKey = (value: string | undefined) => /^[a-zA-Z0-9]+$/.test(value ?? '') ? value! : '';

export const adPlacements: Record<AdPlacement, AdPlacementConfig> = {
  wiki: { key: cleanKey(import.meta.env.PUBLIC_ADSTERRA_WIKI_KEY), width: 728, height: 90, label: 'Advertisement' },
  entity: { key: cleanKey(import.meta.env.PUBLIC_ADSTERRA_ENTITY_KEY), width: 728, height: 90, label: 'Advertisement' },
  tool: { key: cleanKey(import.meta.env.PUBLIC_ADSTERRA_TOOL_KEY), width: 728, height: 90, label: 'Advertisement' },
};

export const advertisingPolicyPath = '/advertising-policy/';
