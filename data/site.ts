export const siteInfo = {
  name: '東方夜宴',
  url: 'https://east-lu.me',
  description: '這世界不止眼前的苟且，還有詩和遠方。',
  copyrightStartYear: 2026,
  repository: 'https://github.com/EastLu/eastlu.github.io',
  /* 
  beian: {
    icp: '闽ICP备2020017848号-3',
    police: '闽公网安备35021102000847号',
  }, 
  */
}

export function getPoliceRecordCode(): string {
  return siteInfo.beian.police.match(/\d+/)?.[0] ?? ''
}
