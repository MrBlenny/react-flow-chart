import { IChart } from '../../src'

export const chartSimple: IChart = {
  offset: {
    x: -320,
    y: -1108
  },
  nodes: {
    'a9fc57ef-6de2-4c88-bac7-199c788705dc': {
      id: 'a9fc57ef-6de2-4c88-bac7-199c788705dc',
      size: {
        height: 159,
        width: 300
      },
      orientation: 0,
      position: {
        x: 400,
        y: 1414
      },
      type: 'trigger',
      ports: {
        port1: {
          type: 'right',
          id: 'port1',
          properties: {
            type: 'output'
          },
          position: {
            x: 162,
            y: 12
          }
        }
      },
      properties: {
        type: 'trigger.conversation:created',
        title: 'Trigger: New conversation',
        icon: 'AddToHomeScreenIcon',
        subheader: 'When new conversation is created'
      }
    },
    'eb21979b-d6a4-4fd0-ab43-875d7322d23f': {
      orientation: 0,
      size: {
        width: 200,
        height: 69
      },
      type: 'note',
      position: {
        x: 751,
        y: 1701
      },
      ports: {
        port1: {
          position: {
            x: 88,
            y: 12
          },
          type: 'left',
          id: 'port1',
          properties: {
            custom: 'property'
          }
        },
        port2: {
          position: {
            x: 112,
            y: 12
          },
          properties: {
            custom: 'property'
          },
          type: 'right',
          id: 'port2'
        }
      },
      properties: {
        icon: 'NoteIcon',
        type: 'other.note',
        title: 'Note'
      },
      id: 'eb21979b-d6a4-4fd0-ab43-875d7322d23f'
    },
    'dd53aad5-3ffa-4945-93c6-39431d3e5ed7': {
      type: 'action',
      ports: {
        port1: {
          properties: {
            custom: 'property'
          },
          id: 'port1',
          type: 'left',
          position: {
            x: 138,
            y: 12
          }
        }
      },
      id: 'dd53aad5-3ffa-4945-93c6-39431d3e5ed7',
      properties: {
        title: 'Send message',
        icon: 'RateReviewIcon',
        type: 'action.message:send',
        subHeader: 'Send message #1'
      },
      size: {
        width: 300,
        height: 185
      },
      position: {
        y: 1510,
        x: 1176
      },
      orientation: 0
    },
    '5a013aec-c441-4308-b104-92c7a82d067d': {
      position: {
        x: 1175,
        y: 1214
      },
      size: {
        width: 300,
        height: 185
      },
      orientation: 0,
      ports: {
        port1: {
          id: 'port1',
          type: 'left',
          position: {
            x: 138,
            y: 12
          },
          properties: {
            custom: 'property'
          }
        }
      },
      id: '5a013aec-c441-4308-b104-92c7a82d067d',
      properties: {
        icon: 'RateReviewIcon',
        type: 'action.message:send',
        title: 'Send a message',
        subHeader: 'Send message #1'
      },
      type: 'action'
    },
    'c11162aa-1fbd-4775-872e-20378ffa8867': {
      properties: {
        type: 'condition.message',
        icon: 'MessageIcon',
        title: 'Message body is'
      },
      position: {
        y: 1435,
        x: 859
      },
      ports: {
        port1: {
          type: 'left',
          position: {
            x: 97,
            y: 12
          },
          properties: {
            custom: 'property'
          },
          id: 'port1'
        },
        port2: {
          type: 'right',
          position: {
            x: 121,
            y: 12
          },
          id: 'port2',
          properties: {
            custom: 'property'
          }
        }
      },
      id: 'c11162aa-1fbd-4775-872e-20378ffa8867',
      orientation: 0,
      type: 'condition',
      size: {
        width: 218,
        height: 69
      }
    }
  },
  scale: 1,
  links: {
    'd5e21c40-b2ea-43f6-bb23-e85597045e3b': {
      from: {
        portId: 'port2',
        nodeId: 'c11162aa-1fbd-4775-872e-20378ffa8867'
      },
      id: 'd5e21c40-b2ea-43f6-bb23-e85597045e3b',
      to: {
        nodeId: 'dd53aad5-3ffa-4945-93c6-39431d3e5ed7',
        portId: 'port1'
      }
    },
    '7a1a67f6-c408-4428-ae26-233cfe055eff': {
      to: {
        nodeId: 'eb21979b-d6a4-4fd0-ab43-875d7322d23f',
        portId: 'port1'
      },
      id: '7a1a67f6-c408-4428-ae26-233cfe055eff',
      from: {
        portId: 'port1',
        nodeId: 'c11162aa-1fbd-4775-872e-20378ffa8867'
      }
    },
    '416c3792-73bc-47dc-993b-2675073ea8ef': {
      from: {
        nodeId: 'c11162aa-1fbd-4775-872e-20378ffa8867',
        portId: 'port2'
      },
      id: '416c3792-73bc-47dc-993b-2675073ea8ef',
      to: {
        nodeId: '5a013aec-c441-4308-b104-92c7a82d067d',
        portId: 'port1'
      }
    },
    '0163783c-b0ff-4d36-85ac-839732b717b5': {
      id: '0163783c-b0ff-4d36-85ac-839732b717b5',
      to: {
        nodeId: 'c11162aa-1fbd-4775-872e-20378ffa8867',
        portId: 'port1'
      },
      from: {
        nodeId: 'a9fc57ef-6de2-4c88-bac7-199c788705dc',
        portId: 'port1'
      }
    }
  },
  selected: {},
  hovered: {
    type: 'node',
    id: 'a9fc57ef-6de2-4c88-bac7-199c788705dc'
  }
}
