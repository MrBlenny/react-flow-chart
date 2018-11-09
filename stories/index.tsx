import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { CustomCanvasOuterDemo } from './CustomCanvasOuter'
import { CustomNodeDemo } from './CustomNode'
import { CustomNodeInnerDemo } from './CustomNodeInner'
import { CustomPortDemo } from './CustomPort'
import { DragAndDropSidebar } from './DragAndDropSidebar'
import { ExternalReactState } from './ExternalReactState'
import { InternalReactState } from './InternalReactState'
import { SelectedSidebar } from './SelectedSidebar'
import { StressTestDemo } from './StressTest'

storiesOf('State', module)
  .add('Internal React State', InternalReactState)
  .add('External React State', () => <ExternalReactState />)

storiesOf('Custom Components', module)
  .add('Node', CustomNodeDemo)
  .add('Node Inner', CustomNodeInnerDemo)
  .add('Port', CustomPortDemo)
  .add('Canvas Outer', CustomCanvasOuterDemo)

storiesOf('Stress Testing', module)
  .add('default', StressTestDemo)

storiesOf('Sidebar', module)
  .add('Drag and Drop', DragAndDropSidebar)
  .add('Selected Sidebar', () => <SelectedSidebar />)
