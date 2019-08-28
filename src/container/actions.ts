import { v4 } from 'uuid'
import {
  IChart, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragNode, IOnLinkCancel,
  IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove, IOnLinkStart, IOnNodeClick,
  IOnNodeSizeChange, IOnPortPositionChange,
} from '../'
import { rotate } from './utils/rotate'

/**
 * This file contains actions for updating state after each of the required callbacks
 */

export const onDragNode: IOnDragNode = ({ config, event, data, id }) => (chart: IChart) => {
  const nodechart = chart.nodes[id]

  if (nodechart) {
    const chartToUpdate = {
      ...nodechart,
      position:
        config && config.snapToGrid
          ? { x: Math.round(data.x / 20) * 20, y: Math.round(data.y / 20) * 20 }
          : data
    };
    return { ...chart, nodes: { ...chart.nodes, [id]: chartToUpdate } };
  }

  return chart
}

export const onDragCanvas: IOnDragCanvas = ({ config, event, data }) => (chart: IChart): IChart => {
  return {
    ...chart,
    offset:
      config && config.snapToGrid
        ? { x: Math.round(data.x / 20) * 20, y: Math.round(data.y / 20) * 20 }
        : data
  };
}

export const onLinkStart: IOnLinkStart = ({ linkId, fromNodeId, fromPortId }) => (chart: IChart): IChart => {
  return {
    ...chart,
    links: {
      ...chart.links,
      [linkId]: {
        id: linkId,
        from: {
          nodeId: fromNodeId,
          portId: fromPortId
        },
        to: {}
      }
    }
  };
}

export const onLinkMove: IOnLinkMove = ({ linkId, toPosition }) => (chart: IChart): IChart => {
  const linkToUpdate = chart.links[linkId];
  return {
    ...chart,
    links: {
      ...chart.links,
      [linkId]: { ...linkToUpdate, to: { position: toPosition } }
    }
  };
}

export const onLinkComplete: IOnLinkComplete = (props) => {
  const { linkId, fromNodeId, fromPortId, toNodeId, toPortId, config = {} } = props
  return (chart: IChart): IChart => {
    const links = {...chart.links};
    if ((config.validateLink ? config.validateLink({ ...props, chart }) : true) && [fromNodeId, fromPortId].join() !== [toNodeId, toPortId].join()) {
      const linkToUpdate = links[linkId];
      return {
        ...chart,
        links: {
          ...links,
          [linkId]: {
            ...linkToUpdate,
            to: { nodeId: toNodeId, portId: toPortId }
          }
        }
      };
    } 
      
    delete links[linkId]
    return { ...chart, links }
  }
}

export const onLinkCancel: IOnLinkCancel = ({ linkId }) => (chart: IChart) => {
  const links = {...chart.links};
  delete links[linkId]
  return { ...chart, links }
}

export const onLinkMouseEnter: IOnLinkMouseEnter = ({ linkId }) => (chart: IChart) => {
  // Set the link to hover
  const link = chart.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    if (chart.hovered.type !== 'link' || chart.hovered.id !== linkId) {
      return { ...chart, hovered: { type: "link", id: linkId } };
    }
  }
  return chart
}

export const onLinkMouseLeave: IOnLinkMouseLeave = ({ linkId }) => (chart: IChart) => {
  const link = chart.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    return { ...chart, hovered: {} };
  }
  return chart
}

export const onLinkClick: IOnLinkMouseLeave = ({ linkId }) => (chart: IChart) => {
  if (chart.selected.id !== linkId || chart.selected.type !== 'link') {
    return { ...chart, selected: { type: "link", id: linkId } };
  }
  return chart
}

export const onCanvasClick: IOnCanvasClick = () => (chart: IChart) => {
  if (chart.selected.id) {
    return { ...chart, selected: {} };
  }
  return chart
}

export const onDeleteKey: IOnDeleteKey = () => (chart: IChart) => {
  const nodes = {...chart.nodes};
  const links = {...chart.links};
  let selected = chart.selected;
  if (chart.selected.type === 'node' && chart.selected.id) {
    const node = nodes[chart.selected.id]
    // Delete the connected links
    Object.keys(links).forEach((linkId) => {
      const link = links[linkId]
      if (link.from.nodeId === node.id || link.to.nodeId === node.id) {
        delete links[link.id]
      }
    })
    // Delete the node
    delete nodes[chart.selected.id]
  } else if (chart.selected.type === 'link' && chart.selected.id) {
    delete links[chart.selected.id]
  }
  if (chart.selected) {
    selected = {};
  }
  return { ...chart, nodes, links, selected }
}

export const onNodeClick: IOnNodeClick = ({ nodeId }) => (chart: IChart) => {
  if (chart.selected.id !== nodeId || chart.selected.type !== 'node') {
    return {
      ...chart,
      selected: {
        type: "node",
        id: nodeId
      }
    };
  }
  return chart
}

export const onNodeSizeChange: IOnNodeSizeChange = ({ nodeId, size }) => (chart: IChart) => {
  const nodeToUpdate = chart.nodes[nodeId];
  return {
    ...chart,
    nodes: { ...chart.nodes, [nodeId]: { ...nodeToUpdate, size } }
  };
}

export const onPortPositionChange: IOnPortPositionChange = ({ node: nodeToUpdate, port, el, nodesEl }) =>
  (chart: IChart): IChart => {
    if (nodeToUpdate.size) {
      // rotate the port's position based on the node's orientation prop (angle)
      const center = { x: nodeToUpdate.size.width / 2, y: nodeToUpdate.size.height / 2 }
      const current = { x: el.offsetLeft + nodesEl.offsetLeft + el.offsetWidth / 2, y: el.offsetTop + nodesEl.offsetTop + el.offsetHeight / 2 }
      const angle = nodeToUpdate.orientation || 0
      const position = rotate(center, current, angle)

      const node = chart.nodes[nodeToUpdate.id]
      const portToUpdate = node.ports[port.id];

      return {
        ...chart,
        nodes: {
          ...chart.nodes,
          [nodeToUpdate.id]: {
            ...node,
            ports: {
              ...node.ports,
              [port.id]: {
                ...portToUpdate,
                position: {
                  x: position.x,
                  y: position.y
                }
              }
            }
          }
        }
      };
    }

    return chart
  }

export const onCanvasDrop: IOnCanvasDrop = ({ config, data, position }) => (chart: IChart): IChart => {
  const id = v4()
  return {
    ...chart,
    nodes: {
      ...chart.nodes,
      [id]: {
        id,
        position:
          config && config.snapToGrid
            ? {
                x: Math.round(position.x / 20) * 20,
                y: Math.round(position.y / 20) * 20
              }
            : position,
        orientation: data.orientation || 0,
        type: data.type,
        ports: data.ports,
        properties: data.properties
      }
    }
  };
}
