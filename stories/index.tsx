import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ConfigSnapToGridDemo } from './ConfigSnapToGrid'
import { ConfigValidateLinkDemo } from './ConfigValidateLink'
import { CustomCanvasOuterDemo } from './CustomCanvasOuter'
import { CustomLinkDemo } from './CustomLink'
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
  .add('Node Inner', () => <CustomNodeInnerDemo />)
  .add('Port', CustomPortDemo)
  .add('Canvas Outer', CustomCanvasOuterDemo)
  .add('Canvas Link', () => <CustomLinkDemo />)

storiesOf('Stress Testing', module)
  .add('default', StressTestDemo)

storiesOf('Sidebar', module)
  .add('Drag and Drop', DragAndDropSidebar)
  .add('Selected Sidebar', () => <SelectedSidebar />)

storiesOf('Other Config', module)
  .add('Snap To Grid', ConfigSnapToGridDemo)
  .add('Selected Sidebar', ConfigValidateLinkDemo)
