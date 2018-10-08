import { setOptions } from "@storybook/addon-options"
import { configure } from "@storybook/react"
import { configureViewport, INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

setOptions({
	hierarchySeparator: /\/|\./,
	hierarchyRootSeparator: /\|/,
})

configureViewport({
	viewports: {
		...INITIAL_VIEWPORTS
	}
})

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context("../../stories", true, /\.tsx?$/));
}

configure(loadStories, module);