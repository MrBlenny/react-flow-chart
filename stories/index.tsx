import { storiesOf } from '@storybook/react'
import { CustomCanvasOuterDemo } from './CustomCanvasOuter'
import { CustomNodeDemo } from './CustomNode'
import { CustomNodeInnerDemo } from './CustomNodeInner'
import { CustomPortDemo } from './CustomPort'
import { StressTestDemo } from './StressTest'
import { WithSidebarDemo } from './WithSidebar'

storiesOf('Custom Components', module)
  .add('Node', CustomNodeDemo)
  .add('Node Inner', CustomNodeInnerDemo)
  .add('Port', CustomPortDemo)
  .add('Canvas Outer', CustomCanvasOuterDemo)

storiesOf('Stress Testing', module)
  .add('default', StressTestDemo)

storiesOf('Drag and Drop Sidebar', module)
  .add('default', WithSidebarDemo)
