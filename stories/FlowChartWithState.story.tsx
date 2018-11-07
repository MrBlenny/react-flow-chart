import * as React from 'react'
import { FlowChartWithState } from '../src'
import { storiesOf } from '@storybook/react';

storiesOf("Flow Chart With State", module)
	.add("default", () => {
		const chart = {
			offset: {
				x: 0,
				y: 0
			},
			nodes: {
				'node1': {
					id: 'node1',
					type: 'type-1-lets-make-this-a-bit-bigger',
					position: {
						x: 200,
						y: 100
					},
					ports: {
						port1:{
							id: 'port1',
							type: 'input'
						}, 
						port2: {
							id: 'port2',
							type: 'output'
						}
					}
				}, 
				'node2': {
					id: 'node2',
					type: 'type-2-lets-make-this-a-bit-bigger',
					position: {
						x: 200,
						y: 300
					},
					ports: {
						port1:{
							id: 'port1',
							type: 'input'
						}, 
						port2: {
							id: 'port2',
							type: 'output'
						}
					}
				}
			},
			links: {
				link1: {
					id: 'link1',
					from: {
						nodeId: 'node1',
						portId: 'port2',
					},
					to: {
						nodeId: 'node2',
						portId: 'port1',
					}
				},
				link2: {
					id: 'link2',
					from: {
						nodeId: 'node2',
						portId: 'port2',
					},
					to: {
						nodeId: 'node1',
						portId: 'port2',
					}
				}
			}
		}

		return <FlowChartWithState initialValue={ chart } />
	})
	.add("other", () => {
		const chart = {
			offset: {
				x: 0,
				y: 0
			},
			nodes: {
				'node1': {
					id: 'node1',
					type: 'type-1-lets-make-this-a-bit-bigger',
					position: {
						x: 200,
						y: 100
					},
					ports: {
						port1: {
							id: 'port1',
							type: 'input'
						}, 
						port2: {
							id: 'port2',
							type: 'output'
						}
					}
				}, 
				'node2': {
					id: 'node2',
					type: 'type-2-lets-make-this-a-bit-bigger',
					position: {
						x: 200,
						y: 300
					},
					ports: {
						port1: {
							id: 'port1',
							type: 'input'
						}, 
						port2: {
							id: 'port2',
							type: 'output'
						}
					}
				}
			},
			links: {}
		}
		
		return <FlowChartWithState initialValue={ chart } />
	})