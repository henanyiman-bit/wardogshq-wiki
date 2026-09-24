import type { Locale } from './config';

export const messages: Record<Locale, {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  database: string;
  tools: string;
  guides: string;
}> = {
  en: {
    title: 'WARDOGS Wiki in English',
    description: 'English-language entry point for the WARDOGS Wiki database, tools and beginner guides.',
    eyebrow: 'LANGUAGE PORTAL',
    heading: 'WARDOGS Wiki — English',
    introduction: 'Browse the English WARDOGS knowledge base for version-bound game data, connected entity records and practical guides.',
    database: 'Open Database',
    tools: 'Open Tools',
    guides: 'Beginner Guide',
  },
  'zh-cn': {
    title: 'WARDOGS Wiki 简体中文入口',
    description: 'WARDOGS Wiki 简体中文入口，提供数据库、工具与新手指南导航。',
    eyebrow: '语言入口',
    heading: 'WARDOGS Wiki — 简体中文',
    introduction: '通过简体中文入口访问 WARDOGS 游戏知识数据库、实体关联、实用工具和新手指南。具体资料页当前以英文为主，未确认数据会明确标注。',
    database: '打开数据库',
    tools: '打开工具',
    guides: '新手指南',
  },
  es: {
    title: 'WARDOGS Wiki en español',
    description: 'Portal en español para la base de datos, herramientas y guías de WARDOGS Wiki.',
    eyebrow: 'PORTAL DE IDIOMA',
    heading: 'WARDOGS Wiki — Español',
    introduction: 'Accede a la base de conocimientos de WARDOGS, con entidades conectadas, herramientas y guías prácticas. Las páginas de referencia detalladas están disponibles principalmente en inglés.',
    database: 'Abrir base de datos', tools: 'Abrir herramientas', guides: 'Guía para principiantes',
  },
  'pt-br': {
    title: 'WARDOGS Wiki em português',
    description: 'Portal em português para o banco de dados, ferramentas e guias da WARDOGS Wiki.',
    eyebrow: 'PORTAL DE IDIOMA',
    heading: 'WARDOGS Wiki — Português',
    introduction: 'Acesse a base de conhecimento de WARDOGS, com entidades conectadas, ferramentas e guias práticos. As páginas detalhadas estão disponíveis principalmente em inglês.',
    database: 'Abrir banco de dados', tools: 'Abrir ferramentas', guides: 'Guia para iniciantes',
  },
  de: {
    title: 'WARDOGS Wiki auf Deutsch',
    description: 'Deutschsprachiger Einstieg in Datenbank, Werkzeuge und Einsteiger-Guides der WARDOGS Wiki.',
    eyebrow: 'SPRACHPORTAL',
    heading: 'WARDOGS Wiki — Deutsch',
    introduction: 'Nutze den deutschsprachigen Einstieg in die WARDOGS-Wissensdatenbank mit verknüpften Entitäten, Werkzeugen und praktischen Guides. Detailseiten sind derzeit überwiegend auf Englisch verfügbar.',
    database: 'Datenbank öffnen', tools: 'Werkzeuge öffnen', guides: 'Einsteiger-Guide',
  },
  fr: {
    title: 'WARDOGS Wiki en français',
    description: 'Portail français vers la base de données, les outils et les guides de WARDOGS Wiki.',
    eyebrow: 'PORTAIL LINGUISTIQUE',
    heading: 'WARDOGS Wiki — Français',
    introduction: 'Accédez à la base de connaissances WARDOGS, aux entités associées, aux outils et aux guides pratiques. Les pages détaillées sont actuellement principalement disponibles en anglais.',
    database: 'Ouvrir la base', tools: 'Ouvrir les outils', guides: 'Guide du débutant',
  },
  ja: {
    title: 'WARDOGS Wiki 日本語ポータル',
    description: 'WARDOGS Wiki のデータベース、ツール、初心者ガイドへ移動できる日本語ポータルです。',
    eyebrow: '言語ポータル',
    heading: 'WARDOGS Wiki — 日本語',
    introduction: 'エンティティ関係、比較ツール、実用ガイドを含む WARDOGS 知識データベースへの日本語入口です。詳細ページは現在主に英語で提供されています。',
    database: 'データベースを開く', tools: 'ツールを開く', guides: '初心者ガイド',
  },
  ko: {
    title: 'WARDOGS Wiki 한국어 포털',
    description: 'WARDOGS Wiki 데이터베이스, 도구 및 초보자 가이드로 이동하는 한국어 포털입니다.',
    eyebrow: '언어 포털',
    heading: 'WARDOGS Wiki — 한국어',
    introduction: '연결된 엔티티, 비교 도구 및 실전 가이드를 제공하는 WARDOGS 지식 데이터베이스의 한국어 입구입니다. 상세 자료는 현재 주로 영어로 제공됩니다.',
    database: '데이터베이스 열기', tools: '도구 열기', guides: '초보자 가이드',
  },
};
