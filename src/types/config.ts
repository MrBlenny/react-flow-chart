import { IChart } from './chart'
import { IOnLinkCompleteInput } from './functions'

export interface IConfig {
  readonly?: boolean
  snapToGrid?: boolean
  smartRouting?: boolean
  gridSize?: number
  validateLink?: (props: IOnLinkCompleteInput & { chart: IChart }) => boolean
  nodeProps?: any
  zoom?: IZoomConfig
  [key: string]: any
}

export interface IZoomConfig {
  transformEnabled?: boolean
  minScale?: number
  maxScale?: number
  pan?: {
    disabled?: boolean
    touchPadEnabled?: boolean,
  }
  wheel?: {
    disabled?: boolean
    step?: number
    wheelEnabled?: boolean
    touchPadEnabled?: boolean,
  }
  zoomIn?: {
    disabled?: boolean
    step?: number,
  }
  zoomOut?: {
    disabled?: boolean
    step?: number,
  }
}
