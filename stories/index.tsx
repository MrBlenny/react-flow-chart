import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { CustomCanvasOuterDemo } from './CustomCanvasOuter'
import { CustomLinkDemo } from './CustomLink'
import { CustomNodeDemo } from './CustomNode'
import { CustomNodeInnerDemo } from './CustomNodeInner'
import { CustomPortDemo } from './CustomPort'
import { DragAndDropSidebar } from './DragAndDropSidebar'
import { ExternalReactState } from './ExternalReactState'
import { InternalReactState } from './InternalReactState'
import { ReadonlyMode } from './ReadonlyMode'
import { SelectedSidebar } from './SelectedSidebar'
import { StressTestDemo } from './StressTest'

storiesOf('State', module)
  .add('Internal React State', InternalReactState)
  .add('External React State', () => <ExternalReactState />)
storiesOf('Readonly Mode', module)
  .add('default', ReadonlyMode)

storiesOf('Custom Components', module)
  .add('Node', CustomNodeDemo)
  .add('Node Inner', CustomNodeInnerDemo)
  .add('Port', CustomPortDemo)
  .add('Canvas Outer', CustomCanvasOuterDemo)
  .add('Canvas Link', () => <CustomLinkDemo />)

storiesOf('Stress Testing', module)
  .add('default', StressTestDemo)

storiesOf('Sidebar', module)
  .add('Drag and Drop', DragAndDropSidebar)
  .add('Selected Sidebar', () => <SelectedSidebar />)
