"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Checkbox = (_a) => {
    var { label, size } = _a, rest = __rest(_a, ["label", "size"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, Object.assign({}, rest, { size: size })), label: label }) }));
};
exports.Checkbox = Checkbox;
exports.Checkbox.defaultProps = {
    size: 'medium'
};
//# sourceMappingURL=index.js.map