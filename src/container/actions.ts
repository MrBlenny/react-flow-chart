import { IOnDragNode, IOnDragCanvas, IOnLinkStart, IOnLinkMove, IOnLinkComplete, IChart, IOnLinkCancel, IUpdatePortPositionState, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnCanvasClick, IOnDeleteKey } from '../types'
import { forEach } from 'lodash'

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

export const onLinkMouseEnter: IOnLinkMouseEnter = ({ linkId }) => (state: IChart) => {
  // Set the link to hover
  const link = state.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    link.hover = true
    state.nodes[link.from.nodeId].ports[link.from.portId].linkHovered = true
    state.nodes[link.to.nodeId].ports[link.to.portId].linkHovered = true
  }
  return state
}

export const onLinkMouseLeave: IOnLinkMouseLeave = ({ linkId }) => (state: IChart) => {
  const link = state.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    link.hover = false
    state.nodes[link.from.nodeId].ports[link.from.portId].linkHovered = false
    state.nodes[link.to.nodeId].ports[link.to.portId].linkHovered = false
  }
  return state
}

export const onLinkClick: IOnLinkMouseLeave = ({ linkId }) => (state: IChart) => {
  forEach(state.links, (link) => link.selected = false)
  state.links[linkId].selected = !state.links[linkId].selected
  return state
}

export const onCanvasClick: IOnCanvasClick = () => (state: IChart) => {
  forEach(state.links, (link) => {
    link.selected = false
  })
  return state
}

export const onDeleteKey: IOnDeleteKey = () => (state: IChart) => {
  forEach(state.links, link => {
    if (link.selected) {
      delete state.links[link.id]
    }
  })
  forEach(state.nodes, node => {
    if (node.selected) {
      delete state.nodes[node.id]
    }
    forEach(node.ports, (port) => {
      port.linkSelected = false
      port.linkHovered = false
    })
  })
  return state
}

export const updatePortPositionState: IUpdatePortPositionState = (nodeToUpdate, port, position) => (state: IChart): IChart => {
  state.nodes[nodeToUpdate.id].ports[port.id].position = {
    x: position.x,
    y: position.y
  }
  return state
}
