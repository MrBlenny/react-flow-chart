import * as React from "react"

import { storiesOf } from "@storybook/react"
import { checkA11y } from "@storybook/addon-a11y"

storiesOf("Addon|a11y.Anchor", module)
	.addDecorator(checkA11y) // needed for a11y checks
	.add("No Href", () => <a>Anchor without href</a>)
	.add("With Alt", () => <img src="https://i.imgur.com/l71RgBd.jpg" alt="This is an image alt text" />)

storiesOf("Addon|a11y.Button", module)
	.addDecorator(checkA11y)
	.add("No Text", () => <button onClick={() => { }}></button>)
	.add("With Text", () => <button onClick={() => { }}>I have Text</button>)

storiesOf("Addon|a11y.Img", module)
	.addDecorator(checkA11y)
	.add("No Alt", () => <img src="https://i.imgur.com/l71RgBd.jpg" />)
	.add("With Alt", () => <img src="https://i.imgur.com/l71RgBd.jpg" alt="This is an image alt text" />)

storiesOf("Addon|a11y.Input", module)
	.addDecorator(checkA11y)
	.add("No Label", () => <form>
		<input />
	</form>)
	.add("With Label", () => <form>
		<label>
			The Input Label
		<input />
		</label>
	</form>)

storiesOf("Addon|a11y.Other", module)
	.addDecorator(checkA11y)
	.add("Same id twice", () => <div>
		<button id="unique-id">I have the "unique-id" id</button>
		<button id="unique-id">#metoo</button>
	</div>)
	.add("Color contrast to low", () => <button style={{ backgroundColor: "red", color: "white" }}>White Text</button>)
