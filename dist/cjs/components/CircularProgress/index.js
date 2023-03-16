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
exports.CircularProgress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const CircularProgress = (_a) => {
    var { color, size } = _a, rest = __rest(_a, ["color", "size"]);
    return jsx_runtime_1.jsx(CircularProgress_1.default, Object.assign({ color: color, size: size }, rest), void 0);
};
exports.CircularProgress = CircularProgress;
exports.CircularProgress.defaultProps = {
    color: 'inherit',
    size: 20
};
//# sourceMappingURL=index.js.map