import * as React from "react"

import { storiesOf } from "@storybook/react"
import centered from "@storybook/addon-centered"

storiesOf("Addon|centered", module)
	.addDecorator(centered) // needed for centered presentation
	.add("Centered Button", () => <button>Centered Button</button>)