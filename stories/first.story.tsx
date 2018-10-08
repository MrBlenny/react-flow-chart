import * as React from "react"

import { storiesOf } from "@storybook/react"

storiesOf("Elements|Span", module)
	.add("default", () => <span>default</span>)
	// everything following this decorator, will be wrapped with this div
	.addDecorator(story => <div style={{ background: "grey" }}>{story()}</div>)
	.add("with decorator background", () => <span>with decorator background</span>)
	// the next one will have 2 decorators
	.addDecorator(story => <div style={{ textDecoration: "line-through" }}>{story()}</div>)
	.add("with 2nd decorator line-through", () => <span>with 2nd decorator line-through</span>)

storiesOf("Elements|Span.FurtherNesting", module)
	.add("default", () => <span>No Decorators here</span>)