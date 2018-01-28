/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

export default {
  cn: {
    website: window.__INFO__.cn,
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: Object.assign({}, window.__INFO__.cn, window.__INFO__.en),
    route: routeMap.map(v => v.en)
  }
}
