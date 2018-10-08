import { setOptions } from "@storybook/addon-options"
import { configure } from '@storybook/react'
// import { resolve } from "path"

setOptions({
	hierarchySeparator: /\/|\./,
	hierarchyRootSeparator: /\|/,
})

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context("../../stories", true, /\.tsx?$/));
}

configure(loadStories, module);