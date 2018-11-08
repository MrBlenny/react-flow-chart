import { 
  IOnDragNode, IOnDragCanvas, IOnLinkStart, IOnLinkMove, IOnLinkComplete, IChart, IOnLinkCancel, 
  IUpdatePortPositionState, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnCanvasClick, IOnDeleteKey, IOnNodeClick, IOnCanvasDrop 
} from '../types'
import { forEach } from 'lodash'
import { v4 } from 'uuid'


/**
 * This file contains actions for updating state after each of the required callbacks
 */

export const onDragNode: IOnDragNode = (event, data, id) => (chart: IChart) => {
  const nodechart = chart.nodes[id]
  if (nodechart) {
    nodechart.position = {
      x: data.x,
      y: data.y
    }
  }
  return chart
}

export const onDragCanvas: IOnDragCanvas = (event, data) => (chart: IChart): IChart => {
  chart.offset.x = data.x
  chart.offset.y = data.y
  return chart
}

export const onLinkStart: IOnLinkStart = ({ linkId, fromNodeId, fromPortId }) => (chart: IChart): IChart => {
  chart.links[linkId] = {
    id: linkId,
    from: {
      nodeId: fromNodeId,
      portId: fromPortId
    },
    to: {}
  }
  return chart
}

export const onLinkMove: IOnLinkMove = ({ linkId, toPosition }) =>(chart: IChart): IChart => {
  chart.links[linkId].to.position = toPosition
  return chart
}

export const onLinkComplete: IOnLinkComplete = ({ linkId, fromNodeId, toNodeId, toPortId }) =>(chart: IChart): IChart => {
  if (fromNodeId !== toPortId) {
    chart.links[linkId].to = {
      nodeId: toNodeId,
      portId: toPortId
    }
  }
  return chart
}

export const onLinkCancel: IOnLinkCancel = ({ linkId }) => (chart: IChart) => {
  delete chart.links[linkId]
  return chart
}

export const onLinkMouseEnter: IOnLinkMouseEnter = ({ linkId }) => (chart: IChart) => {
  // Set the link to hover
  const link = chart.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    chart.hovered = {
      type: 'link',
      id: linkId
    }
  }
  return chart
}

export const onLinkMouseLeave: IOnLinkMouseLeave = ({ linkId }) => (chart: IChart) => {
  const link = chart.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    chart.hovered = {}
  }
  return chart
}

export const onLinkClick: IOnLinkMouseLeave = ({ linkId }) => (chart: IChart) => {
  chart.selected = {
    type: 'link',
    id: linkId
  }
  return chart
}

export const onCanvasClick: IOnCanvasClick = () => (chart: IChart) => {
  chart.selected = {}
  return chart
}

export const onDeleteKey: IOnDeleteKey = () => (chart: IChart) => {
  if (chart.selected.type === 'node' && chart.selected.id) {
    const node = chart.nodes[chart.selected.id]
    // Delete the connected links
    forEach(chart.links, link => { 
      if (link.from.nodeId === node.id || link.to.nodeId === node.id) {
        delete chart.links[link.id]
      }
    })
    // Delete the node
    delete chart.nodes[chart.selected.id]
  } else if (chart.selected.type === 'link' && chart.selected.id) {
    delete chart.links[chart.selected.id]
  }
  return chart
}

export const onNodeClick: IOnNodeClick = ({ nodeId }) => (chart: IChart) => {
  chart.selected = {
    type: 'node',
    id: nodeId
  }
  return chart
}

export const updatePortPositionState: IUpdatePortPositionState = (nodeToUpdate, port, position) => (chart: IChart): IChart => {
  chart.nodes[nodeToUpdate.id].ports[port.id].position = {
    x: position.x,
    y: position.y
  }
  return chart
}

export const onCanvasDrop: IOnCanvasDrop = ({ data, position }) => (chart: IChart): IChart => {
  const id = v4()
  chart.nodes[id] = {
    id,
    type: data.type,
    position,
    ports: {}
  }
  return chart
}
