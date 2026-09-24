import type { Locale } from './config';

type SeoTerms = {
  wiki: string;
  database: string;
  tools: string;
  guides: string;
  weapons: string;
  vehicles: string;
  items: string;
  maps: string;
};

const terms: Record<Locale, SeoTerms> = {
  en: { wiki:'WARDOGS Wiki', database:'WARDOGS database', tools:'WARDOGS tools', guides:'WARDOGS guides', weapons:'WARDOGS weapons database', vehicles:'WARDOGS vehicles database', items:'WARDOGS items database', maps:'WARDOGS maps database' },
  'zh-cn': { wiki:'WARDOGS 中文 Wiki', database:'WARDOGS 中文数据库', tools:'WARDOGS 中文工具', guides:'WARDOGS 中文指南', weapons:'WARDOGS 武器数据库', vehicles:'WARDOGS 载具数据库', items:'WARDOGS 物品数据库', maps:'WARDOGS 地图数据库' },
  es: { wiki:'WARDOGS Wiki en español', database:'base de datos de WARDOGS', tools:'herramientas de WARDOGS', guides:'guías de WARDOGS', weapons:'base de armas de WARDOGS', vehicles:'base de vehículos de WARDOGS', items:'base de objetos de WARDOGS', maps:'base de mapas de WARDOGS' },
  'pt-br': { wiki:'WARDOGS Wiki em português', database:'banco de dados WARDOGS', tools:'ferramentas WARDOGS', guides:'guias WARDOGS', weapons:'banco de armas WARDOGS', vehicles:'banco de veículos WARDOGS', items:'banco de itens WARDOGS', maps:'banco de mapas WARDOGS' },
  de: { wiki:'WARDOGS Wiki Deutsch', database:'WARDOGS Datenbank', tools:'WARDOGS Werkzeuge', guides:'WARDOGS Guides Deutsch', weapons:'WARDOGS Waffendatenbank', vehicles:'WARDOGS Fahrzeugdatenbank', items:'WARDOGS Gegenstandsdatenbank', maps:'WARDOGS Kartendatenbank' },
  fr: { wiki:'WARDOGS Wiki français', database:'base de données WARDOGS', tools:'outils WARDOGS', guides:'guides WARDOGS', weapons:'base des armes WARDOGS', vehicles:'base des véhicules WARDOGS', items:'base des objets WARDOGS', maps:'base des cartes WARDOGS' },
  ja: { wiki:'WARDOGS 日本語 Wiki', database:'WARDOGS データベース', tools:'WARDOGS ツール', guides:'WARDOGS 日本語ガイド', weapons:'WARDOGS 武器データベース', vehicles:'WARDOGS 車両データベース', items:'WARDOGS アイテムデータベース', maps:'WARDOGS マップデータベース' },
  ko: { wiki:'WARDOGS 한국어 Wiki', database:'WARDOGS 데이터베이스', tools:'WARDOGS 도구', guides:'WARDOGS 한국어 가이드', weapons:'WARDOGS 무기 데이터베이스', vehicles:'WARDOGS 차량 데이터베이스', items:'WARDOGS 아이템 데이터베이스', maps:'WARDOGS 지도 데이터베이스' },
};

export const homeSeoKeywords = (locale: Locale) => [terms[locale].wiki, terms[locale].database, terms[locale].guides];

export const coreSeoKeywords = (locale: Locale, slug: 'database'|'tools'|'guide') => {
  const primary = slug === 'database' ? terms[locale].database : slug === 'tools' ? terms[locale].tools : terms[locale].guides;
  return [primary, terms[locale].wiki, slug === 'guide' ? terms[locale].database : terms[locale].guides];
};

export const collectionSeoKeywords = (locale: Locale, collection: 'weapons'|'vehicles'|'items'|'maps') => [
  terms[locale][collection],
  terms[locale].database,
  terms[locale].wiki,
];

export const guideSeoKeywords = (locale: Locale, guideTitle: string) => [
  /wardogs/i.test(guideTitle) ? guideTitle : `${guideTitle} WARDOGS`,
  terms[locale].guides,
  terms[locale].wiki,
];

export const entitySeoKeywords = (locale: Locale, name: string, typeName: string) => [
  `${name} WARDOGS ${typeName}`,
  `${name} WARDOGS`,
  terms[locale].database,
];
