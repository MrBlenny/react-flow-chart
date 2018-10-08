import * as React from "react"

import { storiesOf } from "@storybook/react"

storiesOf("UI|First", module)
	.addDecorator(story => <div style={{ background: "grey" }}>{story()}</div>)
	.add("default", () => <span>Just a Span</span>)

storiesOf("UI|MenuItem", module)
	.addDecorator(story => <div style={{ background: "grey" }}>{story()}</div>)
	.add("default", () => <span>Just a Span</span>)