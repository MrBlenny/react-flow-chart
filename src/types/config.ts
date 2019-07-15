import { IChart } from './chart'
import { IOnLinkCompleteInput } from './functions'

export interface IConfig {
  snapToGrid?: boolean
  gridSize?: number
  validateLink?: (props: IOnLinkCompleteInput & { chart: IChart }) => boolean
  nodeProps?: any
  [key: string]: any
}
