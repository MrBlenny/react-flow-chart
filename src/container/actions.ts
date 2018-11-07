import { IOnDragNode, IOnDragCanvas, IOnLinkStart, IOnLinkMove, IOnLinkComplete, IChart, IOnLinkCancel, IUpdatePortPositionState } from '../types'

export const onDragNode: IOnDragNode = (event, data, id) => (state: IChart) => {
  const nodeState = state.nodes[id]
  if (nodeState) {
    nodeState.position = {
      x: data.x,
      y: data.y
    }
  }
  return state
}

export const onDragCanvas: IOnDragCanvas = (event, data) => (state: IChart): IChart => {
  state.offset.x = data.x
  state.offset.y = data.y
  return state
}

export const onLinkStart: IOnLinkStart = ({ linkId, fromNodeId, fromPortId }) => (state: IChart): IChart => {
  state.links[linkId] = {
    id: linkId,
    from: {
      nodeId: fromNodeId,
      portId: fromPortId
    },
    to: {}
  }
  return state
}

export const onLinkMove: IOnLinkMove = ({ linkId, toPosition }) =>(state: IChart): IChart => {
  state.links[linkId].to.position = toPosition
  return state
}

export const onLinkComplete: IOnLinkComplete = ({ linkId, fromNodeId, toNodeId, toPortId }) =>(state: IChart): IChart => {
  if (fromNodeId !== toPortId) {
    state.links[linkId].to = {
      nodeId: toNodeId,
      portId: toPortId
    }
  }
  return state
}

export const onLinkCancel: IOnLinkCancel = ({ linkId }) => (state: IChart) => {
  delete state.links[linkId]
  return state
}

export const updatePortPositionState: IUpdatePortPositionState = (nodeToUpdate, port, position) => (state: IChart): IChart => {
  state.nodes[nodeToUpdate.id].ports[port.id].position = {
    x: position.x,
    y: position.y
  }
  return state
}
