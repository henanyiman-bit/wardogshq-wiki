import type { Locale } from './config';

interface UiMessages {
  nav: [string, string, string, string, string, string, string];
  selector: string;
  version: string;
  footer: [string, string, string, string];
  overviewTitle: string;
  overview: string;
  cardDescriptions: [string, string, string];
}

export const uiMessages: Record<Locale, UiMessages> = {
  en: {
    nav: ['Money', 'Map', 'Loadouts', 'Vehicles', 'Weapons', 'Database', 'Tools'], selector: 'Language selector',
    version: 'Season 1 · Patch 0.11 · Snapshot 2026-09-19',
    footer: ['Independent WARDOGS Wiki snapshot. Game facts are version-bound; unsupported values are omitted.', 'About', 'Sources', 'Editorial policy'],
    overviewTitle: 'Explore the WARDOGS knowledge base',
    overview: 'Start with battlefield fundamentals, then move into weapon, vehicle and map records. Database relationships connect each subject to relevant systems and guides, while interactive tools support practical loadout and comparison decisions.',
    cardDescriptions: ['Browse weapons, vehicles, maps and connected entity relationships.', 'Plan loadouts and compare weapon or vehicle roles.', 'Learn match basics, economy and objective strategy.'],
  },
  'zh-cn': {
    nav: ['经济', '地图', '配装', '载具', '武器', '数据库', '工具'], selector: '语言选择',
    version: '第 1 赛季 · 补丁 0.11 · 资料快照 2026-09-19',
    footer: ['独立 WARDOGS Wiki 资料快照。游戏数据对应特定版本，未获可靠支持的数值不会收录。', '关于', '资料来源', '编辑规范'],
    overviewTitle: '探索 WARDOGS 游戏知识库',
    overview: '从战场基础开始，再深入武器、载具和地图资料。数据库通过实体关系连接相关系统与指南，互动工具则帮助玩家规划配装并比较不同武器和载具的战术定位。',
    cardDescriptions: ['浏览武器、载具、地图及其关联实体资料。', '规划配装并比较武器或载具定位。', '了解对局基础、经济系统与目标策略。'],
  },
  es: {
    nav: ['Economía', 'Mapas', 'Equipamientos', 'Vehículos', 'Armas', 'Base de datos', 'Herramientas'], selector: 'Selector de idioma',
    version: 'Temporada 1 · Parche 0.11 · Datos del 2026-09-19',
    footer: ['Wiki independiente de WARDOGS. Los datos dependen de la versión y se omiten los valores sin confirmar.', 'Acerca de', 'Fuentes', 'Política editorial'],
    overviewTitle: 'Explora la base de conocimientos de WARDOGS',
    overview: 'Comienza con los fundamentos del campo de batalla y consulta después los registros de armas, vehículos y mapas. Las relaciones conectan cada tema con sistemas y guías útiles, mientras las herramientas ayudan a planificar equipamientos y comparaciones.',
    cardDescriptions: ['Consulta armas, vehículos, mapas y relaciones entre entidades.', 'Planifica equipamientos y compara funciones de armas o vehículos.', 'Aprende las bases, la economía y la estrategia de objetivos.'],
  },
  'pt-br': {
    nav: ['Economia', 'Mapas', 'Equipamentos', 'Veículos', 'Armas', 'Banco de dados', 'Ferramentas'], selector: 'Seletor de idioma',
    version: 'Temporada 1 · Patch 0.11 · Dados de 2026-09-19',
    footer: ['Wiki independente de WARDOGS. Os dados dependem da versão e valores não confirmados são omitidos.', 'Sobre', 'Fontes', 'Política editorial'],
    overviewTitle: 'Explore a base de conhecimento de WARDOGS',
    overview: 'Comece pelos fundamentos do campo de batalha e avance para os registros de armas, veículos e mapas. As relações ligam cada assunto a sistemas e guias relevantes, enquanto as ferramentas ajudam a planejar equipamentos e comparações.',
    cardDescriptions: ['Consulte armas, veículos, mapas e relações entre entidades.', 'Planeje equipamentos e compare funções de armas ou veículos.', 'Aprenda fundamentos, economia e estratégia de objetivos.'],
  },
  de: {
    nav: ['Wirtschaft', 'Karten', 'Ausrüstung', 'Fahrzeuge', 'Waffen', 'Datenbank', 'Werkzeuge'], selector: 'Sprachauswahl',
    version: 'Saison 1 · Patch 0.11 · Datenstand 19.09.2026',
    footer: ['Unabhängiger WARDOGS-Wiki-Datenstand. Fakten sind versionsgebunden; unbestätigte Werte werden ausgelassen.', 'Über uns', 'Quellen', 'Redaktionsrichtlinie'],
    overviewTitle: 'Erkunde die WARDOGS-Wissensdatenbank',
    overview: 'Beginne mit den Grundlagen des Schlachtfelds und wechsle dann zu Waffen-, Fahrzeug- und Karteneinträgen. Beziehungen verbinden jedes Thema mit relevanten Systemen und Guides, während Werkzeuge bei Ausrüstungsplanung und Vergleichen helfen.',
    cardDescriptions: ['Durchsuche Waffen, Fahrzeuge, Karten und verknüpfte Entitäten.', 'Plane Ausrüstungen und vergleiche Waffen- oder Fahrzeugrollen.', 'Lerne Spielablauf, Wirtschaft und Zielstrategien kennen.'],
  },
  fr: {
    nav: ['Économie', 'Cartes', 'Équipements', 'Véhicules', 'Armes', 'Base de données', 'Outils'], selector: 'Sélecteur de langue',
    version: 'Saison 1 · Patch 0.11 · Données du 19/09/2026',
    footer: ['Wiki WARDOGS indépendant. Les données dépendent de la version et les valeurs non confirmées sont omises.', 'À propos', 'Sources', 'Politique éditoriale'],
    overviewTitle: 'Explorez la base de connaissances WARDOGS',
    overview: 'Commencez par les principes du champ de bataille, puis consultez les fiches des armes, véhicules et cartes. Les relations relient chaque sujet aux systèmes et guides utiles, tandis que les outils facilitent la préparation et les comparaisons.',
    cardDescriptions: ['Consultez les armes, véhicules, cartes et relations entre entités.', 'Préparez un équipement et comparez les rôles des armes ou véhicules.', 'Découvrez les bases, l’économie et la stratégie des objectifs.'],
  },
  ja: {
    nav: ['経済', 'マップ', '装備', '車両', '武器', 'データベース', 'ツール'], selector: '言語を選択',
    version: 'シーズン1 · パッチ0.11 · 2026-09-19時点',
    footer: ['独立した WARDOGS Wiki のデータです。情報はバージョンに依存し、未確認の数値は掲載しません。', '概要', '情報源', '編集方針'],
    overviewTitle: 'WARDOGS 知識データベースを探索',
    overview: '戦場の基本を学んだ後、武器、車両、マップの各データを確認できます。関連情報から対応するシステムやガイドへ移動でき、ツールを使って装備構成や役割の比較も行えます。',
    cardDescriptions: ['武器、車両、マップと関連エンティティを確認します。', '装備を計画し、武器や車両の役割を比較します。', '試合の基本、経済、目標戦略を学びます。'],
  },
  ko: {
    nav: ['경제', '지도', '장비 구성', '차량', '무기', '데이터베이스', '도구'], selector: '언어 선택',
    version: '시즌 1 · 패치 0.11 · 2026-09-19 기준',
    footer: ['독립 WARDOGS Wiki 자료입니다. 게임 정보는 버전에 따라 달라지며 확인되지 않은 수치는 제외합니다.', '소개', '출처', '편집 정책'],
    overviewTitle: 'WARDOGS 지식 데이터베이스 살펴보기',
    overview: '전장의 기본을 익힌 뒤 무기, 차량, 지도 기록을 살펴보세요. 데이터베이스 관계는 각 주제를 관련 시스템 및 가이드와 연결하며, 도구를 이용해 장비 구성을 계획하고 역할을 비교할 수 있습니다.',
    cardDescriptions: ['무기, 차량, 지도와 연결된 엔티티 정보를 확인합니다.', '장비 구성을 계획하고 무기 또는 차량 역할을 비교합니다.', '경기 기본, 경제 및 목표 전략을 알아봅니다.'],
  },
};
