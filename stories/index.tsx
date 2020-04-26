import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { ConfigSnapToGridDemo } from './ConfigSnapToGrid'
import { ConfigValidateLinkDemo } from './ConfigValidateLink'
import { CustomCanvasOuterDemo } from './CustomCanvasOuter'
import { CustomLinkDemo } from './CustomLink'
import { CustomNodeDemo } from './CustomNode'
import { CustomNodeInnerDemo } from './CustomNodeInner'
import { CustomPortDemo } from './CustomPort'
import { DragAndDropSidebar } from './DragAndDropSidebar'
import { ExternalReactState } from './ExternalReactState'
import { InternalReactState } from './InternalReactState'
import { LinkColors } from './LinkColors'
import { ReadonlyMode } from './ReadonlyMode'
import { SelectedSidebar } from './SelectedSidebar'
import { SmartRouting } from './SmartRouting'
import { StressTestDemo } from './StressTest'
import { Zoom } from './Zoom'

storiesOf('State', module)
  .add('Internal React State', InternalReactState)
  .add('External React State', () => <ExternalReactState />)

storiesOf('Custom Components', module)
  .add('Node Inner', () => <CustomNodeInnerDemo />)
  .add('Node', CustomNodeDemo)
  .add('Port', CustomPortDemo)
  .add('Canvas Outer', CustomCanvasOuterDemo)
  .add('Canvas Link', () => <CustomLinkDemo />)
  .add('Link Colors', () => <LinkColors />)

storiesOf('Stress Testing', module).add('default', StressTestDemo)

storiesOf('Sidebar', module)
  .add('Drag and Drop', DragAndDropSidebar)
  .add('Selected Sidebar', () => <SelectedSidebar />)

storiesOf('Other Config', module)
  .add('Snap To Grid', ConfigSnapToGridDemo)
  .add('Link validation function', ConfigValidateLinkDemo)
  .add('Read only mode', ReadonlyMode)
  .add('Smart link routing', SmartRouting)
  .add('Zoom', () => <Zoom />)
