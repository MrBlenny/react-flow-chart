import {
  IChart, IOnLinkCompleteInput,
} from '../../'

export const validateLink = ({ linkId, fromNodeId, fromPortId, toNodeId, toPortId }: IOnLinkCompleteInput, chart: IChart): boolean => {
  // no links between same type nodes
  if (chart.nodes[fromNodeId].type === chart.nodes[toNodeId].type) return false
  return true
}
