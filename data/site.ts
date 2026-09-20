export const siteInfo = {
  name: '東方夜宴',
  url: 'https://east-lu.me',
  description: '這世界不止眼前的苟且，還有詩和遠方。',
  copyrightStartYear: 2026,
  repository: 'https://github.com/EastLu/eastlu.github.io',
}

export function getPoliceRecordCode(): string {
  return siteInfo.beian.police.match(/\d+/)?.[0] ?? ''
}
