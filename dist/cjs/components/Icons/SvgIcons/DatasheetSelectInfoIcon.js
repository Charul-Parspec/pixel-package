"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasheetSelectInfoIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SvgIcon_1 = require("../SvgIcon");
const DatasheetSelectInfoIcon = ({ fontSize, color }) => {
    const colorCode = (0, SvgIcon_1.getFillColor)(String(color));
    return ((0, jsx_runtime_1.jsx)(SvgIcon_1.SvgIcon, Object.assign({ fontSize: fontSize, xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0.875 2.125H2.125V0.875C1.4375 0.875 0.875 1.4375 0.875 2.125ZM0.875 7.125H2.125V5.875H0.875V7.125ZM3.375 12.125H4.625V10.875H3.375V12.125ZM0.875 4.625H2.125V3.375H0.875V4.625ZM7.125 0.875H5.875V2.125H7.125V0.875ZM10.875 0.875V2.125H12.125C12.125 1.4375 11.5625 0.875 10.875 0.875ZM2.125 12.125V10.875H0.875C0.875 11.5625 1.4375 12.125 2.125 12.125ZM0.875 9.625H2.125V8.375H0.875V9.625ZM4.625 0.875H3.375V2.125H4.625V0.875ZM5.875 12.125H7.125V10.875H5.875V12.125ZM10.875 7.125H12.125V5.875H10.875V7.125ZM10.875 12.125C11.5625 12.125 12.125 11.5625 12.125 10.875H10.875V12.125ZM10.875 4.625H12.125V3.375H10.875V4.625ZM10.875 9.625H12.125V8.375H10.875V9.625ZM8.375 12.125H9.625V10.875H8.375V12.125ZM8.375 2.125H9.625V0.875H8.375V2.125ZM3.375 9.625H9.625V3.375H3.375V9.625ZM4.625 4.625H8.375V8.375H4.625V4.625Z", fill: colorCode }) })));
};
exports.DatasheetSelectInfoIcon = DatasheetSelectInfoIcon;
exports.DatasheetSelectInfoIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
//# sourceMappingURL=DatasheetSelectInfoIcon.js.map