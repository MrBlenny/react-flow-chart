import {
  IChart, IOnLinkCompleteInput,
} from '../../'

export const validateLink = ({ linkId, fromNodeId, fromPortId, toNodeId, toPortId }: IOnLinkCompleteInput, chart: IChart): boolean => {
  console.log('validateLink: ', linkId, fromNodeId, fromPortId, toNodeId, toPortId)
  if (chart.nodes[fromNodeId].type === chart.nodes[toNodeId].type) return false
  return true
}
