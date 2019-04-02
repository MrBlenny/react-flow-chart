(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iframe"],{

/***/ "./config/storybook/config.js":
/*!************************************!*\
  !*** ./config/storybook/config.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/addon-options */ "./node_modules/@storybook/addon-options/preview.js");
/* harmony import */ var _storybook_addon_options__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
// import { configureViewport, INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_0__["setOptions"])({hierarchySeparator:/\/|\./,hierarchyRootSeparator:/\|/});// configureViewport({
// 	viewports: {
// 		...INITIAL_VIEWPORTS
// 	}
// })
function requireAll(requireContext){return requireContext.keys().map(requireContext)}function loadStories(){requireAll(__webpack_require__("./stories sync recursive \\.tsx?$"))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Canvas/Canvas.wrapper.tsx":
/*!**************************************************!*\
  !*** ./src/components/Canvas/Canvas.wrapper.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_draggable_1 = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasWrapper.prototype.render = function () {
        var _a = this.props, ComponentInner = _a.ComponentInner, ComponentOuter = _a.ComponentOuter, position = _a.position, onDragCanvas = _a.onDragCanvas, children = _a.children, onCanvasClick = _a.onCanvasClick, onDeleteKey = _a.onDeleteKey, onCanvasDrop = _a.onCanvasDrop;
        return (React.createElement(ComponentOuter, null,
            React.createElement(react_draggable_1.default, { axis: "both", position: position, grid: [1, 1], onDrag: function (e, dragData) { return onDragCanvas(e, dragData); } },
                React.createElement(ComponentInner, { children: children, onClick: onCanvasClick, tabIndex: 0, onKeyDown: function (e) {
                        if (e.keyCode === 46) {
                            onDeleteKey();
                        }
                    }, onDrop: function (e) {
                        var data = JSON.parse(e.dataTransfer.getData(__1.REACT_FLOW_CHART));
                        onCanvasDrop({ data: data, position: {
                                x: e.clientX - position.x,
                                y: e.clientY - position.y,
                            } });
                    }, onDragOver: function (e) {
                        e.preventDefault();
                    } }))));
    };
    return CanvasWrapper;
}(React.Component));
exports.CanvasWrapper = CanvasWrapper;


/***/ }),

/***/ "./src/components/Canvas/CanvasInner.default.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Canvas/CanvasInner.default.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.CanvasInnerDefault = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  outline: 1px dashed rgba(0,0,0,0.1);\n  width: 10000px;\n  height: 10000px;\n  cursor: move;\n"], ["\n  position: relative;\n  outline: 1px dashed rgba(0,0,0,0.1);\n  width: 10000px;\n  height: 10000px;\n  cursor: move;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/components/Canvas/CanvasOuter.default.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Canvas/CanvasOuter.default.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.CanvasOuterDefault = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background-size: 20px 20px;\n  background-color: rgba(0,0,0,0.08);\n  background-image:\n    linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),\n    linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: not-allowed;\n"], ["\n  position: relative;\n  background-size: 20px 20px;\n  background-color: rgba(0,0,0,0.08);\n  background-image:\n    linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),\n    linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: not-allowed;\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/components/Canvas/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Canvas/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./CanvasInner.default */ "./src/components/Canvas/CanvasInner.default.tsx"));
__export(__webpack_require__(/*! ./CanvasOuter.default */ "./src/components/Canvas/CanvasOuter.default.tsx"));
__export(__webpack_require__(/*! ./Canvas.wrapper */ "./src/components/Canvas/Canvas.wrapper.tsx"));


/***/ }),

/***/ "./src/components/FlowChart/FlowChart.tsx":
/*!************************************************!*\
  !*** ./src/components/FlowChart/FlowChart.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
exports.FlowChart = function (props) {
    var chart = props.chart, _a = props.callbacks, onDragNode = _a.onDragNode, onDragCanvas = _a.onDragCanvas, onCanvasDrop = _a.onCanvasDrop, onLinkStart = _a.onLinkStart, onLinkMove = _a.onLinkMove, onLinkComplete = _a.onLinkComplete, onLinkCancel = _a.onLinkCancel, onPortPositionChange = _a.onPortPositionChange, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, onCanvasClick = _a.onCanvasClick, onDeleteKey = _a.onDeleteKey, onNodeClick = _a.onNodeClick, _b = props.Components, _c = _b === void 0 ? {} : _b, _d = _c.CanvasOuter, CanvasOuter = _d === void 0 ? __1.CanvasOuterDefault : _d, _e = _c.CanvasInner, CanvasInner = _e === void 0 ? __1.CanvasInnerDefault : _e, _f = _c.NodeInner, NodeInner = _f === void 0 ? __1.NodeInnerDefault : _f, _g = _c.Ports, Ports = _g === void 0 ? __1.PortsDefault : _g, _h = _c.Port, Port = _h === void 0 ? __1.PortDefault : _h, _j = _c.Node, Node = _j === void 0 ? __1.NodeDefault : _j, _k = _c.Link, Link = _k === void 0 ? __1.LinkDefault : _k;
    var links = chart.links, nodes = chart.nodes, selected = chart.selected;
    var canvasCallbacks = { onDragCanvas: onDragCanvas, onCanvasClick: onCanvasClick, onDeleteKey: onDeleteKey, onCanvasDrop: onCanvasDrop };
    var linkCallbacks = { onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick };
    var nodeCallbacks = { onDragNode: onDragNode, onNodeClick: onNodeClick };
    var portCallbacks = { onPortPositionChange: onPortPositionChange, onLinkStart: onLinkStart, onLinkMove: onLinkMove, onLinkComplete: onLinkComplete, onLinkCancel: onLinkCancel };
    return (React.createElement(__1.CanvasWrapper, __assign({ position: chart.offset, ComponentInner: CanvasInner, ComponentOuter: CanvasOuter }, canvasCallbacks),
        Object.keys(links).map(function (linkId) { return (React.createElement(__1.LinkWrapper, __assign({ chart: chart, key: linkId, link: links[linkId], Component: Link }, linkCallbacks))); }),
        Object.keys(nodes).map(function (nodeId) { return (React.createElement(__1.NodeWrapper, __assign({ key: nodeId, node: nodes[nodeId], selected: selected, Component: Node }, nodeCallbacks),
            React.createElement(NodeInner, { node: nodes[nodeId] }),
            React.createElement(Ports, null, Object.keys(nodes[nodeId].ports).map(function (portId) { return (React.createElement(__1.PortWrapper, __assign({ key: portId, chart: chart, node: nodes[nodeId], port: nodes[nodeId].ports[portId], Component: Port }, portCallbacks))); })))); })));
};


/***/ }),

/***/ "./src/components/FlowChart/index.ts":
/*!*******************************************!*\
  !*** ./src/components/FlowChart/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./FlowChart */ "./src/components/FlowChart/FlowChart.tsx"));


/***/ }),

/***/ "./src/components/Link/Link.default.tsx":
/*!**********************************************!*\
  !*** ./src/components/Link/Link.default.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
exports.LinkDefault = function (_a) {
    var link = _a.link, startPos = _a.startPos, endPos = _a.endPos, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, isHovered = _a.isHovered, isSelected = _a.isSelected;
    var points = __1.generateCurvePath(startPos, endPos);
    return (React.createElement("svg", { style: { overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 } },
        React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: "cornflowerblue" }),
        React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "3", fill: "none" }),
        React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: (isHovered || isSelected) ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ linkId: link.id }); }, onClick: function (e) {
                onLinkClick({ linkId: link.id });
                e.stopPropagation();
            } }),
        React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: "cornflowerblue" })));
};


/***/ }),

/***/ "./src/components/Link/Link.wrapper.tsx":
/*!**********************************************!*\
  !*** ./src/components/Link/Link.wrapper.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Link_default_1 = __webpack_require__(/*! ./Link.default */ "./src/components/Link/Link.default.tsx");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/components/Link/utils/index.ts");
exports.LinkWrapper = function (_a) {
    var _b = _a.Component, Component = _b === void 0 ? Link_default_1.LinkDefault : _b, link = _a.link, chart = _a.chart, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick;
    var startPos = utils_1.getLinkPosition(chart, link.from.nodeId, link.from.portId);
    var endPos = link.to.nodeId && link.to.portId
        ? utils_1.getLinkPosition(chart, link.to.nodeId, link.to.portId)
        : link.to.position;
    // Don't render the link yet if there is no end pos
    // This will occur if the link was just created
    if (!endPos) {
        return null;
    }
    return (React.createElement(Component, { link: link, startPos: startPos, endPos: endPos, onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick, isSelected: chart.selected.type === 'link' && chart.selected.id === link.id, isHovered: chart.hovered.type === 'link' && chart.hovered.id === link.id }));
};


/***/ }),

/***/ "./src/components/Link/index.ts":
/*!**************************************!*\
  !*** ./src/components/Link/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Link.default */ "./src/components/Link/Link.default.tsx"));
__export(__webpack_require__(/*! ./Link.wrapper */ "./src/components/Link/Link.wrapper.tsx"));
__export(__webpack_require__(/*! ./utils */ "./src/components/Link/utils/index.ts"));


/***/ }),

/***/ "./src/components/Link/utils/generateCurvePath.ts":
/*!********************************************************!*\
  !*** ./src/components/Link/utils/generateCurvePath.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCurvePath = function (startPos, endPos) {
    var width = Math.abs(startPos.x - endPos.x);
    var height = Math.abs(startPos.y - endPos.y);
    var leftToRight = startPos.x < endPos.x;
    var topToBottom = startPos.y < endPos.y;
    var isHorizontal = width > height;
    var start;
    var end;
    if (isHorizontal) {
        start = leftToRight ? startPos : endPos;
        end = leftToRight ? endPos : startPos;
    }
    else {
        start = topToBottom ? startPos : endPos;
        end = topToBottom ? endPos : startPos;
    }
    var curve = isHorizontal ? width / 3 : height / 3;
    var curveX = isHorizontal ? curve : 0;
    var curveY = isHorizontal ? 0 : curve;
    return "M" + start.x + "," + start.y + " C " + (start.x + curveX) + "," + (start.y + curveY) + " " + (end.x - curveX) + "," + (end.y - curveY) + " " + end.x + "," + end.y;
};


/***/ }),

/***/ "./src/components/Link/utils/getLinkPosition.ts":
/*!******************************************************!*\
  !*** ./src/components/Link/utils/getLinkPosition.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkPosition = function (chart, nodeId, portId) {
    var node = chart.nodes[nodeId];
    var port = node.ports[portId];
    return {
        x: node.position.x + (port.position ? port.position.x : 0),
        y: node.position.y + (port.position ? port.position.y : 0),
    };
};


/***/ }),

/***/ "./src/components/Link/utils/index.ts":
/*!********************************************!*\
  !*** ./src/components/Link/utils/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./getLinkPosition */ "./src/components/Link/utils/getLinkPosition.ts"));
__export(__webpack_require__(/*! ./generateCurvePath */ "./src/components/Link/utils/generateCurvePath.ts"));


/***/ }),

/***/ "./src/components/Node/Node.default.tsx":
/*!**********************************************!*\
  !*** ./src/components/Node/Node.default.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.NodeDefault = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  transition: 0.3s ease box-shadow, 0.3s ease margin-top;\n  background: white;\n  border-radius: 4px;\n  min-width: 200px;\n  ", "\n"], ["\n  position: absolute;\n  transition: 0.3s ease box-shadow, 0.3s ease margin-top;\n  background: white;\n  border-radius: 4px;\n  min-width: 200px;\n  ",
    "\n"])), function (props) { return props.isSelected && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "], ["\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n    margin-top: -2px\n    "]))); });
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/Node/Node.wrapper.tsx":
/*!**********************************************!*\
  !*** ./src/components/Node/Node.wrapper.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_draggable_1 = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
var Node_default_1 = __webpack_require__(/*! ./Node.default */ "./src/components/Node/Node.default.tsx");
exports.NodeWrapper = function (_a) {
    var node = _a.node, onDragNode = _a.onDragNode, children = _a.children, onNodeClick = _a.onNodeClick, selected = _a.selected, _b = _a.Component, Component = _b === void 0 ? Node_default_1.NodeDefault : _b;
    return (React.createElement(react_draggable_1.default, { bounds: "parent", axis: "both", position: node.position, grid: [1, 1], onStart: function (e) {
            // Stop propagation so the canvas does not move
            e.stopPropagation();
        }, onDrag: function (e, dragData) { return onDragNode(e, dragData, node.id); } },
        React.createElement(Component, { children: children, onClick: function (e) {
                onNodeClick({ nodeId: node.id });
                e.stopPropagation();
            }, isSelected: selected.type === 'node' && selected.id === node.id, node: node })));
};


/***/ }),

/***/ "./src/components/Node/index.ts":
/*!**************************************!*\
  !*** ./src/components/Node/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Node.default */ "./src/components/Node/Node.default.tsx"));
__export(__webpack_require__(/*! ./Node.wrapper */ "./src/components/Node/Node.wrapper.tsx"));
__export(__webpack_require__(/*! ./Node.default */ "./src/components/Node/Node.default.tsx"));


/***/ }),

/***/ "./src/components/NodeInner/NodeInner.default.tsx":
/*!********************************************************!*\
  !*** ./src/components/NodeInner/NodeInner.default.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 40px 30px;\n"], ["\n  padding: 40px 30px;\n"])));
exports.NodeInnerDefault = function (_a) {
    var node = _a.node;
    return (React.createElement(Outer, null,
        React.createElement("div", null,
            "Type: ",
            node.type)));
};
var templateObject_1;


/***/ }),

/***/ "./src/components/NodeInner/index.ts":
/*!*******************************************!*\
  !*** ./src/components/NodeInner/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./NodeInner.default */ "./src/components/NodeInner/NodeInner.default.tsx"));


/***/ }),

/***/ "./src/components/Port/Port.default.tsx":
/*!**********************************************!*\
  !*** ./src/components/Port/Port.default.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var PortDefaultOuter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover > div {\n    background: cornflowerblue;\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover > div {\n    background: cornflowerblue;\n  }\n"])));
var PortDefaultInner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background:  ", ";\n  cursor: pointer;\n"], ["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background:  ", ";\n  cursor: pointer;\n"])), function (props) { return props.active ? 'cornflowerblue' : 'grey'; });
exports.PortDefault = function (_a) {
    var isLinkSelected = _a.isLinkSelected, isLinkHovered = _a.isLinkHovered;
    return (React.createElement(PortDefaultOuter, null,
        React.createElement(PortDefaultInner, { active: isLinkSelected || isLinkHovered })));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/Port/Port.wrapper.tsx":
/*!**********************************************!*\
  !*** ./src/components/Port/Port.wrapper.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
var Port_default_1 = __webpack_require__(/*! ./Port.default */ "./src/components/Port/Port.default.tsx");
/** Construct the composed path by traversing parentElements */
var composedPath = function (el) {
    var path = [];
    while (el) {
        path.push(el);
        el = el.parentElement;
    }
    return path;
};
var PortWrapper = /** @class */ (function (_super) {
    __extends(PortWrapper, _super);
    function PortWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getNodRef = function (el) {
            if (el) {
                var _a = _this.props, node = _a.node, port = _a.port, onPortPositionChange = _a.onPortPositionChange;
                _this.nodeRef = el;
                // Ports component should be positions absolute
                // Factor this in so we get position relative to the node
                var nodesEl = el.parentElement
                    ? el.parentElement
                    : { offsetLeft: 0, offsetTop: 0 };
                var position = {
                    x: el.offsetLeft + nodesEl.offsetLeft + el.offsetWidth / 2,
                    y: el.offsetTop + nodesEl.offsetTop + el.offsetHeight / 2,
                };
                onPortPositionChange(node, port, position);
            }
        };
        _this.onMouseDown = function (startEvent) {
            var _a = _this.props, chart = _a.chart, node = _a.node, port = _a.port, onLinkStart = _a.onLinkStart, onLinkCancel = _a.onLinkCancel, onLinkComplete = _a.onLinkComplete, onLinkMove = _a.onLinkMove;
            var linkId = uuid_1.v4();
            var fromNodeId = node.id;
            var fromPortId = port.id;
            // Create the move handler
            // This will update the position as the mouse moves
            var mouseMoveHandler = function (e) {
                onLinkMove({
                    linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId,
                    toPosition: {
                        x: e.clientX - chart.offset.x,
                        y: e.clientY - chart.offset.y,
                    },
                });
            };
            // Create and bind the mouse up handler
            // This is used to check if the link is complete or cancelled
            var mouseUpHandler = function (e) {
                // We traverse up the event path until we find an element with 'data-port-id' and data-node-id'
                // e.toElement cannot be used because it may be a child element of the port
                var path = composedPath(e.target);
                var portEl = path.find(function (el) {
                    var toPortId = el.getAttribute && el.getAttribute('data-port-id');
                    var toNodeId = el.getAttribute && el.getAttribute('data-node-id');
                    return !!(toPortId && toNodeId);
                });
                // If both node-id and port-id are defined as data attributes, we are mouse-upping
                // on another port. Run the success handler
                if (portEl) {
                    var toPortId = portEl.getAttribute('data-port-id');
                    var toNodeId = portEl.getAttribute('data-node-id');
                    onLinkComplete({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId, toNodeId: toNodeId, toPortId: toPortId });
                }
                else {
                    onLinkCancel({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
                }
                // Remove the listeners if the link is complete or canceled
                window.removeEventListener('mouseup', mouseUpHandler, false);
                window.removeEventListener('mousemove', mouseMoveHandler, false);
            };
            // Add listeners
            window.addEventListener('mouseup', mouseUpHandler, false);
            window.addEventListener('mousemove', mouseMoveHandler, false);
            // Notify state of link start
            onLinkStart({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
            // Prevent default and stop propagation to prevent text selection
            startEvent.preventDefault();
            startEvent.stopPropagation();
        };
        return _this;
    }
    PortWrapper.prototype.render = function () {
        var _a = this.props, chart = _a.chart, style = _a.style, port = _a.port, node = _a.node, _b = _a.Component, Component = _b === void 0 ? Port_default_1.PortDefault : _b;
        var selectedLink = chart.selected.type === 'link' && chart.selected.id && chart.links[chart.selected.id];
        var hoveredLink = chart.selected.type === 'link' && chart.selected.id && chart.links[chart.selected.id];
        return (React.createElement("div", { "data-port-id": port.id, "data-node-id": node.id, onMouseDown: this.onMouseDown, ref: this.getNodRef, style: style },
            React.createElement(Component, { port: port, isSelected: chart.selected.type === 'port' && chart.selected.id === port.id, isHovered: chart.hovered.type === 'port' && chart.hovered.id === port.id, isLinkSelected: selectedLink
                    ? ((selectedLink.from.portId === port.id && selectedLink.from.nodeId === node.id) ||
                        (selectedLink.to.portId === port.id && selectedLink.to.nodeId === node.id))
                    : false, isLinkHovered: hoveredLink
                    ? ((hoveredLink.from.portId === port.id && hoveredLink.from.nodeId === node.id) ||
                        (hoveredLink.to.portId === port.id && hoveredLink.to.nodeId === node.id))
                    : false })));
    };
    return PortWrapper;
}(React.Component));
exports.PortWrapper = PortWrapper;


/***/ }),

/***/ "./src/components/Port/index.ts":
/*!**************************************!*\
  !*** ./src/components/Port/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Port.default */ "./src/components/Port/Port.default.tsx"));
__export(__webpack_require__(/*! ./Port.wrapper */ "./src/components/Port/Port.wrapper.tsx"));


/***/ }),

/***/ "./src/components/Ports/Ports.default.tsx":
/*!************************************************!*\
  !*** ./src/components/Ports/Ports.default.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __1 = __webpack_require__(/*! ../../ */ "./src/index.ts");
exports.PortsDefault = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement(__1.PortsGroupDefault, { side: "top" }, children.filter(function (child) { return ['input', 'top'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "bottom" }, children.filter(function (child) { return ['output', 'bottom'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "right" }, children.filter(function (child) { return ['right'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "left" }, children.filter(function (child) { return ['left'].includes(child.props.port.type); }))));
};


/***/ }),

/***/ "./src/components/Ports/index.ts":
/*!***************************************!*\
  !*** ./src/components/Ports/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Ports.default */ "./src/components/Ports/Ports.default.tsx"));


/***/ }),

/***/ "./src/components/PortsGroup/PortsGroup.default.tsx":
/*!**********************************************************!*\
  !*** ./src/components/PortsGroup/PortsGroup.default.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.PortsGroupDefault = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n\n  ",
    "\n"])), function (props) {
    if (props.side === 'top') {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 100%;\n        left: 0;\n        top: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "], ["\n        width: 100%;\n        left: 0;\n        top: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "])));
    }
    else if (props.side === 'bottom') {
        return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: 100%;\n        left: 0;\n        bottom: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "], ["\n        width: 100%;\n        left: 0;\n        bottom: -12px;\n        flex-direction: row;\n        > div {\n          margin: 0 3px;\n        }\n      "])));
    }
    else if (props.side === 'left') {
        return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        height: 100%;\n        top: 0;\n        left: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "], ["\n        height: 100%;\n        top: 0;\n        left: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "])));
    }
    else {
        return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        height: 100%;\n        top: 0;\n        right: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "], ["\n        height: 100%;\n        top: 0;\n        right: -12px;\n        flex-direction: column;\n        > div {\n          margin: 3px 0;\n        }\n      "])));
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/PortsGroup/index.ts":
/*!********************************************!*\
  !*** ./src/components/PortsGroup/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./PortsGroup.default */ "./src/components/PortsGroup/PortsGroup.default.tsx"));


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Canvas */ "./src/components/Canvas/index.tsx"));
__export(__webpack_require__(/*! ./Node */ "./src/components/Node/index.ts"));
__export(__webpack_require__(/*! ./NodeInner */ "./src/components/NodeInner/index.ts"));
__export(__webpack_require__(/*! ./Port */ "./src/components/Port/index.ts"));
__export(__webpack_require__(/*! ./Ports */ "./src/components/Ports/index.ts"));
__export(__webpack_require__(/*! ./PortsGroup */ "./src/components/PortsGroup/index.ts"));
__export(__webpack_require__(/*! ./Link */ "./src/components/Link/index.ts"));
__export(__webpack_require__(/*! ./FlowChart */ "./src/components/FlowChart/index.ts"));


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.REACT_FLOW_CHART = 'react-flow-chart';


/***/ }),

/***/ "./src/container/FlowChartWithState.tsx":
/*!**********************************************!*\
  !*** ./src/container/FlowChartWithState.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __1 = __webpack_require__(/*! ../ */ "./src/index.ts");
var actions = __webpack_require__(/*! ./actions */ "./src/container/actions.ts");
var mapValues_1 = __webpack_require__(/*! ./utils/mapValues */ "./src/container/utils/mapValues.ts");
/**
 * Flow Chart With State
 */
var FlowChartWithState = /** @class */ (function (_super) {
    __extends(FlowChartWithState, _super);
    function FlowChartWithState(props) {
        var _this = _super.call(this, props) || this;
        _this.state = props.initialValue;
        return _this;
    }
    FlowChartWithState.prototype.render = function () {
        var _this = this;
        var Components = this.props.Components;
        var stateActions = mapValues_1.default(actions, function (func) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.setState(func.apply(void 0, args));
            };
        });
        return (React.createElement(__1.FlowChart, { chart: this.state, callbacks: stateActions, Components: Components }));
    };
    return FlowChartWithState;
}(React.Component));
exports.FlowChartWithState = FlowChartWithState;


/***/ }),

/***/ "./src/container/actions.ts":
/*!**********************************!*\
  !*** ./src/container/actions.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/**
 * This file contains actions for updating state after each of the required callbacks
 */
exports.onDragNode = function (event, data, id) { return function (chart) {
    var nodechart = chart.nodes[id];
    if (nodechart) {
        nodechart.position = {
            x: data.x,
            y: data.y,
        };
    }
    return chart;
}; };
exports.onDragCanvas = function (event, data) { return function (chart) {
    chart.offset.x = data.x;
    chart.offset.y = data.y;
    return chart;
}; };
exports.onLinkStart = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, fromPortId = _a.fromPortId;
    return function (chart) {
        chart.links[linkId] = {
            id: linkId,
            from: {
                nodeId: fromNodeId,
                portId: fromPortId,
            },
            to: {},
        };
        return chart;
    };
};
exports.onLinkMove = function (_a) {
    var linkId = _a.linkId, toPosition = _a.toPosition;
    return function (chart) {
        chart.links[linkId].to.position = toPosition;
        return chart;
    };
};
exports.onLinkComplete = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, toNodeId = _a.toNodeId, toPortId = _a.toPortId;
    return function (chart) {
        if (fromNodeId !== toPortId) {
            chart.links[linkId].to = {
                nodeId: toNodeId,
                portId: toPortId,
            };
        }
        return chart;
    };
};
exports.onLinkCancel = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        delete chart.links[linkId];
        return chart;
    };
};
exports.onLinkMouseEnter = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        // Set the link to hover
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {
                type: 'link',
                id: linkId,
            };
        }
        return chart;
    };
};
exports.onLinkMouseLeave = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {};
        }
        return chart;
    };
};
exports.onLinkClick = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        chart.selected = {
            type: 'link',
            id: linkId,
        };
        return chart;
    };
};
exports.onCanvasClick = function () { return function (chart) {
    chart.selected = {};
    return chart;
}; };
exports.onDeleteKey = function () { return function (chart) {
    if (chart.selected.type === 'node' && chart.selected.id) {
        var node_1 = chart.nodes[chart.selected.id];
        // Delete the connected links
        Object.keys(chart.links).forEach(function (linkId) {
            var link = chart.links[linkId];
            if (link.from.nodeId === node_1.id || link.to.nodeId === node_1.id) {
                delete chart.links[link.id];
            }
        });
        // Delete the node
        delete chart.nodes[chart.selected.id];
    }
    else if (chart.selected.type === 'link' && chart.selected.id) {
        delete chart.links[chart.selected.id];
    }
    chart.selected = {};
    return chart;
}; };
exports.onNodeClick = function (_a) {
    var nodeId = _a.nodeId;
    return function (chart) {
        chart.selected = {
            type: 'node',
            id: nodeId,
        };
        return chart;
    };
};
exports.onPortPositionChange = function (nodeToUpdate, port, position) {
    return function (chart) {
        chart.nodes[nodeToUpdate.id].ports[port.id].position = {
            x: position.x,
            y: position.y,
        };
        return chart;
    };
};
exports.onCanvasDrop = function (_a) {
    var data = _a.data, position = _a.position;
    return function (chart) {
        var id = uuid_1.v4();
        chart.nodes[id] = {
            id: id,
            position: position,
            type: data.type,
            ports: data.ports,
            properties: data.properties,
        };
        return chart;
    };
};


/***/ }),

/***/ "./src/container/index.ts":
/*!********************************!*\
  !*** ./src/container/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./FlowChartWithState */ "./src/container/FlowChartWithState.tsx"));


/***/ }),

/***/ "./src/container/utils/mapValues.ts":
/*!******************************************!*\
  !*** ./src/container/utils/mapValues.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapValues(o, func) {
    var res = {};
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            res[key] = func(o[key]);
        }
    }
    return res;
}
exports.default = mapValues;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components */ "./src/components/index.ts"));
__export(__webpack_require__(/*! ./container */ "./src/container/index.ts"));
__export(__webpack_require__(/*! ./constants */ "./src/constants.ts"));


/***/ }),

/***/ "./stories sync recursive \\.tsx?$":
/*!******************************!*\
  !*** ./stories sync \.tsx?$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CustomCanvasOuter.tsx": "./stories/CustomCanvasOuter.tsx",
	"./CustomNode.tsx": "./stories/CustomNode.tsx",
	"./CustomNodeInner.tsx": "./stories/CustomNodeInner.tsx",
	"./CustomPort.tsx": "./stories/CustomPort.tsx",
	"./DragAndDropSidebar.tsx": "./stories/DragAndDropSidebar.tsx",
	"./ExternalReactState.tsx": "./stories/ExternalReactState.tsx",
	"./InternalReactState.tsx": "./stories/InternalReactState.tsx",
	"./SelectedSidebar.tsx": "./stories/SelectedSidebar.tsx",
	"./StressTest.tsx": "./stories/StressTest.tsx",
	"./components/Content.tsx": "./stories/components/Content.tsx",
	"./components/Page.tsx": "./stories/components/Page.tsx",
	"./components/Sidebar.tsx": "./stories/components/Sidebar.tsx",
	"./components/SidebarItem.tsx": "./stories/components/SidebarItem.tsx",
	"./components/index.ts": "./stories/components/index.ts",
	"./index.tsx": "./stories/index.tsx",
	"./misc/exampleChartState.ts": "./stories/misc/exampleChartState.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./stories sync recursive \\.tsx?$";

/***/ }),

/***/ "./stories/CustomCanvasOuter.tsx":
/*!***************************************!*\
  !*** ./stories/CustomCanvasOuter.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
var CanvasOuterCustom = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background-size: 10px 10px;\n  background-color: #4f6791;\n  background-image:\n    linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),\n    linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: not-allowed;\n"], ["\n  position: relative;\n  background-size: 10px 10px;\n  background-color: #4f6791;\n  background-image:\n    linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),\n    linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: not-allowed;\n"])));
exports.CustomCanvasOuterDemo = function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple, Components: {
                CanvasOuter: CanvasOuterCustom,
            } })));
};
var templateObject_1;


/***/ }),

/***/ "./stories/CustomNode.tsx":
/*!********************************!*\
  !*** ./stories/CustomNode.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
var DarkBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  padding: 30px;\n  background: #3e3e3e;\n  color: white;\n  border-radius: 10px;\n"], ["\n  position: absolute;\n  padding: 30px;\n  background: #3e3e3e;\n  color: white;\n  border-radius: 10px;\n"])));
var Circle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #d30000;\n  color: white;\n  border-radius: 50%;\n"], ["\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #d30000;\n  color: white;\n  border-radius: 50%;\n"
    /**
     * Create the custom component,
     * Make sure it has the same prop signature
     * You'll need to add {...otherProps} so the event listeners are added to your component
     */
])));
/**
 * Create the custom component,
 * Make sure it has the same prop signature
 * You'll need to add {...otherProps} so the event listeners are added to your component
 */
var NodeCustom = function (_a) {
    var node = _a.node, children = _a.children, otherProps = __rest(_a, ["node", "children"]);
    if (node.type === 'output-only') {
        return (React.createElement(DarkBox, __assign({}, otherProps), children));
    }
    else {
        return (React.createElement(Circle, __assign({}, otherProps), children));
    }
};
exports.CustomNodeDemo = function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple, Components: {
                Node: NodeCustom,
            } })));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./stories/CustomNodeInner.tsx":
/*!*************************************!*\
  !*** ./stories/CustomNodeInner.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 30px;\n"], ["\n  padding: 30px;\n"])));
var Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  width: 100%;\n"], ["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  width: 100%;\n"
    /**
     * Create the custom component,
     * Make sure it has the same prop signature
     */
])));
/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
var NodeInnerCustom = function (_a) {
    var node = _a.node;
    if (node.type === 'output-only') {
        return (React.createElement(Outer, null,
            React.createElement("p", null, "Use Node inner to customise the content of the node")));
    }
    else {
        return (React.createElement(Outer, null,
            React.createElement("p", null, "Add custom displays for each node.type"),
            React.createElement("p", null, "You may need to stop event propagation so your forms work."),
            React.createElement("br", null),
            React.createElement(Input, { placeholder: "Add forms etc if required", onClick: function (e) { return e.stopPropagation(); }, onMouseUp: function (e) { return e.stopPropagation(); }, onMouseDown: function (e) { return e.stopPropagation(); } })));
    }
};
exports.CustomNodeInnerDemo = function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple, Components: {
                NodeInner: NodeInnerCustom,
            } })));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./stories/CustomPort.tsx":
/*!********************************!*\
  !*** ./stories/CustomPort.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
var PortDefaultOuter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  background: cornflowerblue;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 24px;\n  height: 24px;\n  background: cornflowerblue;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var PortCustom = function (props) { return (React.createElement(PortDefaultOuter, null,
    props.port.properties && props.port.properties.value === 'yes' && (React.createElement("svg", { style: { width: '24px', height: '24px' }, viewBox: "0 0 24 24" },
        React.createElement("path", { fill: "white", d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }))),
    props.port.properties && props.port.properties.value === 'no' && (React.createElement("svg", { style: { width: '24px', height: '24px' }, viewBox: "0 0 24 24" },
        React.createElement("path", { fill: "white", d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }))),
    !props.port.properties && (React.createElement("svg", { style: { width: '24px', height: '24px' }, viewBox: "0 0 24 24" },
        React.createElement("path", { fill: "white", d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }))))); };
exports.CustomPortDemo = function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple, Components: {
                Port: PortCustom,
            } })));
};
var templateObject_1;


/***/ }),

/***/ "./stories/DragAndDropSidebar.tsx":
/*!****************************************!*\
  !*** ./stories/DragAndDropSidebar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
var Message = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nmargin: 10px;\npadding: 10px;\nbackground: rgba(0,0,0,0.05);\n"], ["\nmargin: 10px;\npadding: 10px;\nbackground: rgba(0,0,0,0.05);\n"])));
exports.DragAndDropSidebar = function () { return (React.createElement(components_1.Page, null,
    React.createElement(components_1.Content, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple })),
    React.createElement(components_1.Sidebar, null,
        React.createElement(Message, null, "Drag and drop these items onto the canvas."),
        React.createElement(components_1.SidebarItem, { type: "top/bottom", ports: {
                port1: {
                    id: 'port1',
                    type: 'top',
                    properties: {
                        custom: 'property',
                    },
                },
                port2: {
                    id: 'port1',
                    type: 'bottom',
                    properties: {
                        custom: 'property',
                    },
                },
            }, properties: {
                custom: 'property',
            } }),
        React.createElement(components_1.SidebarItem, { type: "bottom-only", ports: {
                port1: {
                    id: 'port1',
                    type: 'bottom',
                    properties: {
                        custom: 'property',
                    },
                },
            } }),
        React.createElement(components_1.SidebarItem, { type: "left-right", ports: {
                port1: {
                    id: 'port1',
                    type: 'left',
                    properties: {
                        custom: 'property',
                    },
                },
                port2: {
                    id: 'port2',
                    type: 'right',
                    properties: {
                        custom: 'property',
                    },
                },
            } }),
        React.createElement(components_1.SidebarItem, { type: "all-sides", ports: {
                port1: {
                    id: 'port1',
                    type: 'left',
                },
                port2: {
                    id: 'port2',
                    type: 'right',
                },
                port3: {
                    id: 'port3',
                    type: 'top',
                },
                port4: {
                    id: 'port4',
                    type: 'bottom',
                },
            } }),
        React.createElement(components_1.SidebarItem, { type: "lots-of-ports", ports: {
                port1: {
                    id: 'port1',
                    type: 'left',
                },
                port2: {
                    id: 'port2',
                    type: 'right',
                },
                port3: {
                    id: 'port3',
                    type: 'top',
                },
                port4: {
                    id: 'port4',
                    type: 'bottom',
                },
                port5: {
                    id: 'port5',
                    type: 'left',
                },
                port6: {
                    id: 'port6',
                    type: 'right',
                },
                port7: {
                    id: 'port7',
                    type: 'top',
                },
                port8: {
                    id: 'port8',
                    type: 'bottom',
                },
                port9: {
                    id: 'port9',
                    type: 'left',
                },
                port10: {
                    id: 'port10',
                    type: 'right',
                },
                port11: {
                    id: 'port11',
                    type: 'top',
                },
                port12: {
                    id: 'port12',
                    type: 'bottom',
                },
            } })))); };
var templateObject_1;


/***/ }),

/***/ "./stories/ExternalReactState.tsx":
/*!****************************************!*\
  !*** ./stories/ExternalReactState.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var actions = __webpack_require__(/*! ../src/container/actions */ "./src/container/actions.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
var ExternalReactState = /** @class */ (function (_super) {
    __extends(ExternalReactState, _super);
    function ExternalReactState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = lodash_1.cloneDeep(exampleChartState_1.chartSimple);
        return _this;
    }
    ExternalReactState.prototype.render = function () {
        var _this = this;
        var chart = this.state;
        var stateActions = lodash_1.mapValues(actions, function (func) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.setState(func.apply(void 0, args));
            };
        });
        return (React.createElement(components_1.Page, null,
            React.createElement(src_1.FlowChart, { chart: chart, callbacks: stateActions })));
    };
    return ExternalReactState;
}(React.Component));
exports.ExternalReactState = ExternalReactState;


/***/ }),

/***/ "./stories/InternalReactState.tsx":
/*!****************************************!*\
  !*** ./stories/InternalReactState.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
exports.InternalReactState = function () {
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: exampleChartState_1.chartSimple })));
};


/***/ }),

/***/ "./stories/SelectedSidebar.tsx":
/*!*************************************!*\
  !*** ./stories/SelectedSidebar.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var actions = __webpack_require__(/*! ../src/container/actions */ "./src/container/actions.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
var exampleChartState_1 = __webpack_require__(/*! ./misc/exampleChartState */ "./stories/misc/exampleChartState.ts");
var Message = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 10px;\n  padding: 10px;\n  line-height: 1.4em;\n"], ["\n  margin: 10px;\n  padding: 10px;\n  line-height: 1.4em;\n"])));
var Button = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 10px 15px;\n  background: cornflowerblue;\n  color: white;\n  border-radius: 3px;\n  text-align: center;\n  transition: 0.3s ease all;\n  cursor: pointer;\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n  }\n  &:active {\n    background: #5682d2;\n  }\n"], ["\n  padding: 10px 15px;\n  background: cornflowerblue;\n  color: white;\n  border-radius: 3px;\n  text-align: center;\n  transition: 0.3s ease all;\n  cursor: pointer;\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,.1);\n  }\n  &:active {\n    background: #5682d2;\n  }\n"])));
var SelectedSidebar = /** @class */ (function (_super) {
    __extends(SelectedSidebar, _super);
    function SelectedSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = lodash_1.cloneDeep(exampleChartState_1.chartSimple);
        return _this;
    }
    SelectedSidebar.prototype.render = function () {
        var _this = this;
        var chart = this.state;
        var stateActions = lodash_1.mapValues(actions, function (func) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.setState(func.apply(void 0, args));
            };
        });
        return (React.createElement(components_1.Page, null,
            React.createElement(components_1.Content, null,
                React.createElement(src_1.FlowChart, { chart: chart, callbacks: stateActions })),
            React.createElement(components_1.Sidebar, null, chart.selected.type
                ? React.createElement(Message, null,
                    React.createElement("div", null,
                        "Type: ",
                        chart.selected.type),
                    React.createElement("div", null,
                        "ID: ",
                        chart.selected.id),
                    React.createElement("br", null),
                    React.createElement(Button, { onClick: function () { return stateActions.onDeleteKey(); } }, "Delete"))
                : React.createElement(Message, null, "Click on a Node, Port or Link"))));
    };
    return SelectedSidebar;
}(React.Component));
exports.SelectedSidebar = SelectedSidebar;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./stories/StressTest.tsx":
/*!********************************!*\
  !*** ./stories/StressTest.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var components_1 = __webpack_require__(/*! ./components */ "./stories/components/index.ts");
exports.StressTestDemo = function () {
    var xyGrid = lodash_1.flatten(lodash_1.range(0, 1500, 300).map(function (x) { return lodash_1.range(0, 1000, 150).map(function (y) { return ({ x: x, y: y }); }); }));
    var chart = {
        offset: {
            x: 0,
            y: 0,
        },
        nodes: lodash_1.keyBy(xyGrid.map(function (_a) {
            var x = _a.x, y = _a.y;
            return ({
                id: "node-" + x + "-" + y,
                type: 'default',
                position: { x: x + 100, y: y + 100 },
                ports: {
                    port1: {
                        id: 'port1',
                        type: 'top',
                    },
                    port2: {
                        id: 'port2',
                        type: 'bottom',
                    },
                    port3: {
                        id: 'port3',
                        type: 'right',
                    },
                    port4: {
                        id: 'port4',
                        type: 'left',
                    },
                },
            });
        }), 'id'),
        links: lodash_1.keyBy(lodash_1.compact(lodash_1.flatMap(xyGrid, function (_a, idx) {
            var x = _a.x, y = _a.y;
            var next = xyGrid[idx + 1];
            if (next) {
                return [{
                        id: "link-" + x + "-" + y + "-a",
                        from: {
                            nodeId: "node-" + x + "-" + y,
                            portId: 'port2',
                        },
                        to: {
                            nodeId: "node-" + next.x + "-" + next.y,
                            portId: 'port3',
                        },
                    }, {
                        id: "link-" + x + "-" + y + "-b",
                        from: {
                            nodeId: "node-" + x + "-" + y,
                            portId: 'port2',
                        },
                        to: {
                            nodeId: "node-" + next.x + "-" + next.y,
                            portId: 'port4',
                        },
                    }];
            }
            return undefined;
        })), 'id'),
        selected: {},
        hovered: {},
    };
    return (React.createElement(components_1.Page, null,
        React.createElement(src_1.FlowChartWithState, { initialValue: chart })));
};


/***/ }),

/***/ "./stories/components/Content.tsx":
/*!****************************************!*\
  !*** ./stories/components/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Content = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"])));
var templateObject_1;


/***/ }),

/***/ "./stories/components/Page.tsx":
/*!*************************************!*\
  !*** ./stories/components/Page.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"], ["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"])));
var PageContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"])));
exports.Page = function (_a) {
    var children = _a.children;
    return (React.createElement(PageContent, null,
        children,
        React.createElement(GlobalStyle, null)));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./stories/components/Sidebar.tsx":
/*!****************************************!*\
  !*** ./stories/components/Sidebar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Sidebar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"], ["\n  width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"])));
var templateObject_1;


/***/ }),

/***/ "./stories/components/SidebarItem.tsx":
/*!********************************************!*\
  !*** ./stories/components/SidebarItem.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var src_1 = __webpack_require__(/*! ../../src */ "./src/index.ts");
var Outer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n"], ["\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n"])));
exports.SidebarItem = function (_a) {
    var type = _a.type, ports = _a.ports, properties = _a.properties;
    return (React.createElement(Outer, { draggable: true, onDragStart: function (event) {
            event.dataTransfer.setData(src_1.REACT_FLOW_CHART, JSON.stringify({ type: type, ports: ports, properties: properties }));
        } }, type));
};
var templateObject_1;


/***/ }),

/***/ "./stories/components/index.ts":
/*!*************************************!*\
  !*** ./stories/components/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Content */ "./stories/components/Content.tsx"));
__export(__webpack_require__(/*! ./Page */ "./stories/components/Page.tsx"));
__export(__webpack_require__(/*! ./Sidebar */ "./stories/components/Sidebar.tsx"));
__export(__webpack_require__(/*! ./SidebarItem */ "./stories/components/SidebarItem.tsx"));


/***/ }),

/***/ "./stories/index.tsx":
/*!***************************!*\
  !*** ./stories/index.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var CustomCanvasOuter_1 = __webpack_require__(/*! ./CustomCanvasOuter */ "./stories/CustomCanvasOuter.tsx");
var CustomNode_1 = __webpack_require__(/*! ./CustomNode */ "./stories/CustomNode.tsx");
var CustomNodeInner_1 = __webpack_require__(/*! ./CustomNodeInner */ "./stories/CustomNodeInner.tsx");
var CustomPort_1 = __webpack_require__(/*! ./CustomPort */ "./stories/CustomPort.tsx");
var DragAndDropSidebar_1 = __webpack_require__(/*! ./DragAndDropSidebar */ "./stories/DragAndDropSidebar.tsx");
var ExternalReactState_1 = __webpack_require__(/*! ./ExternalReactState */ "./stories/ExternalReactState.tsx");
var InternalReactState_1 = __webpack_require__(/*! ./InternalReactState */ "./stories/InternalReactState.tsx");
var SelectedSidebar_1 = __webpack_require__(/*! ./SelectedSidebar */ "./stories/SelectedSidebar.tsx");
var StressTest_1 = __webpack_require__(/*! ./StressTest */ "./stories/StressTest.tsx");
react_1.storiesOf('State', module)
    .add('Internal React State', InternalReactState_1.InternalReactState)
    .add('External React State', function () { return React.createElement(ExternalReactState_1.ExternalReactState, null); });
react_1.storiesOf('Custom Components', module)
    .add('Node', CustomNode_1.CustomNodeDemo)
    .add('Node Inner', CustomNodeInner_1.CustomNodeInnerDemo)
    .add('Port', CustomPort_1.CustomPortDemo)
    .add('Canvas Outer', CustomCanvasOuter_1.CustomCanvasOuterDemo);
react_1.storiesOf('Stress Testing', module)
    .add('default', StressTest_1.StressTestDemo);
react_1.storiesOf('Sidebar', module)
    .add('Drag and Drop', DragAndDropSidebar_1.DragAndDropSidebar)
    .add('Selected Sidebar', function () { return React.createElement(SelectedSidebar_1.SelectedSidebar, null); });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./stories/misc/exampleChartState.ts":
/*!*******************************************!*\
  !*** ./stories/misc/exampleChartState.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chartSimple = {
    offset: {
        x: 0,
        y: 0,
    },
    nodes: {
        node1: {
            id: 'node1',
            type: 'output-only',
            position: {
                x: 300,
                y: 100,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'output',
                    properties: {
                        value: 'yes',
                    },
                },
                port2: {
                    id: 'port2',
                    type: 'output',
                    properties: {
                        value: 'no',
                    },
                },
            },
        },
        node2: {
            id: 'node2',
            type: 'input-output',
            position: {
                x: 300,
                y: 300,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input',
                },
                port2: {
                    id: 'port2',
                    type: 'output',
                },
            },
        },
        node3: {
            id: 'node3',
            type: 'input-output',
            position: {
                x: 100,
                y: 600,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input',
                },
                port2: {
                    id: 'port2',
                    type: 'output',
                },
            },
        },
        node4: {
            id: 'node4',
            type: 'input-output',
            position: {
                x: 500,
                y: 600,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input',
                },
                port2: {
                    id: 'port2',
                    type: 'output',
                },
            },
        },
    },
    links: {
        link1: {
            id: 'link1',
            from: {
                nodeId: 'node1',
                portId: 'port2',
            },
            to: {
                nodeId: 'node2',
                portId: 'port1',
            },
        },
        link2: {
            id: 'link2',
            from: {
                nodeId: 'node2',
                portId: 'port2',
            },
            to: {
                nodeId: 'node3',
                portId: 'port1',
            },
        },
        link3: {
            id: 'link3',
            from: {
                nodeId: 'node2',
                portId: 'port2',
            },
            to: {
                nodeId: 'node4',
                portId: 'port1',
            },
        },
    },
    selected: {},
    hovered: {},
};


/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@storybook/core/dist/server/config/polyfills.js ./node_modules/@storybook/core/dist/server/config/globals.js ./config/storybook/config.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/c/Users/David/Documents/Git/misc/react-flow-chart/node_modules/@storybook/core/dist/server/config/polyfills.js */"./node_modules/@storybook/core/dist/server/config/polyfills.js");
__webpack_require__(/*! /mnt/c/Users/David/Documents/Git/misc/react-flow-chart/node_modules/@storybook/core/dist/server/config/globals.js */"./node_modules/@storybook/core/dist/server/config/globals.js");
module.exports = __webpack_require__(/*! /mnt/c/Users/David/Documents/Git/misc/react-flow-chart/config/storybook/config.js */"./config/storybook/config.js");


/***/ })

},[[0,"runtime~iframe","vendors~iframe"]]]);
//# sourceMappingURL=iframe.0fd77ada0df4b2602476.bundle.js.map