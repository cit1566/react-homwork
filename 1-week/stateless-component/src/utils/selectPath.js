import { svgPath } from './utils'

export default function selectPath(svgName) {
  switch (svgName) {
    case 'check-mark':
      return svgPath['check-mark']
    case 'cross':
      return svgPath.cross
    case 'not-allowed':
      return svgPath['not-allowed']
    case 'up-arrow':
      return svgPath['up-arrow']
  }
}
