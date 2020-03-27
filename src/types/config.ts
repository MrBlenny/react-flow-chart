import { IChart } from './chart'
import { IOnLinkCompleteInput } from './functions'

export interface IConfig {
  defaultPosition?: any
  grid?: any
  positionOffset?: any
  zoomScale?: any
  readonly?: boolean
  disableCanvas?: boolean
  snapToGrid?: boolean
  gridSize?: number
  validateLink?: (props: IOnLinkCompleteInput & { chart: IChart }) => boolean
  nodeProps?: any
  [key: string]: any
}
