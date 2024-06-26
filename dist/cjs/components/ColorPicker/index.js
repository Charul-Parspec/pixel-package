"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionsColorPicker = exports.ColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_color_1 = require("react-color");
const Box_1 = require("../Box");
const Popper_1 = __importDefault(require("../Popper"));
const ColorPicker = (props) => {
    return (0, jsx_runtime_1.jsx)(react_color_1.SketchPicker, Object.assign({}, props));
};
exports.ColorPicker = ColorPicker;
const TransitionsColorPicker = ({ color, onChange, onClickAway = () => { }, onClick = () => { } }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
        onClick(open);
    };
    function clickAwayHandler() {
        setOpen(false);
        onClickAway();
    }
    function handleOnColorChange(color) {
        onChange(color);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { sx: { cursor: 'pointer' }, onClick: handleClick, width: 24, height: 24, borderRadius: 100, bgcolor: color }), open && ((0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, Object.assign({ onClickAway: clickAwayHandler }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: (0, jsx_runtime_1.jsx)(Popper_1.default, Object.assign({ placement: "auto", open: open, anchorEl: anchorEl, transition: true }, { children: ({ TransitionProps }) => ((0, jsx_runtime_1.jsx)(material_1.Fade, Object.assign({}, TransitionProps, { timeout: 350 }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ m: 2 }, { children: (0, jsx_runtime_1.jsx)(exports.ColorPicker, { color: color, onChange: (color) => handleOnColorChange(color) }) })) }))) })) }) })))] }));
};
exports.TransitionsColorPicker = TransitionsColorPicker;
exports.TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
//# sourceMappingURL=index.js.map