"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$isExtendedTextNode = exports.$createExtendedTextNode = exports.ExtendedTextNode = void 0;
const lexical_1 = require("lexical");
class ExtendedTextNode extends lexical_1.TextNode {
    constructor(text, key) {
        super(text, key);
    }
    static getType() {
        return 'extended-text';
    }
    static clone(node) {
        return new ExtendedTextNode(node.__text, node.__key);
    }
    static importDOM() {
        const importers = lexical_1.TextNode.importDOM();
        return Object.assign(Object.assign({}, importers), { code: () => ({
                conversion: patchStyleConversion(importers === null || importers === void 0 ? void 0 : importers.code),
                priority: 1
            }), em: () => ({
                conversion: patchStyleConversion(importers === null || importers === void 0 ? void 0 : importers.em),
                priority: 1
            }), span: () => ({
                conversion: patchStyleConversion(importers === null || importers === void 0 ? void 0 : importers.span),
                priority: 1
            }), strong: () => ({
                conversion: patchStyleConversion(importers === null || importers === void 0 ? void 0 : importers.strong),
                priority: 1
            }), sub: () => ({
                conversion: patchStyleConversion(importers === null || importers === void 0 ? void 0 : importers.sub),
                priority: 1
            }), sup: () => ({
                conversion: patchStyleConversion(importers === null || importers === void 0 ? void 0 : importers.sup),
                priority: 1
            }) });
    }
    static importJSON(serializedNode) {
        return lexical_1.TextNode.importJSON(serializedNode);
    }
    isSimpleText() {
        return (this.__type === 'text' || this.__type === 'extended-text') && this.__mode === 0;
    }
    exportJSON() {
        return Object.assign(Object.assign({}, super.exportJSON()), { type: 'extended-text', version: 1 });
    }
}
exports.ExtendedTextNode = ExtendedTextNode;
function $createExtendedTextNode(text) {
    return new ExtendedTextNode(text);
}
exports.$createExtendedTextNode = $createExtendedTextNode;
function $isExtendedTextNode(node) {
    return node instanceof ExtendedTextNode;
}
exports.$isExtendedTextNode = $isExtendedTextNode;
function patchStyleConversion(originalDOMConverter) {
    return (node) => {
        const original = originalDOMConverter === null || originalDOMConverter === void 0 ? void 0 : originalDOMConverter(node);
        if (!original) {
            return null;
        }
        const originalOutput = original.conversion(node);
        if (!originalOutput) {
            return originalOutput;
        }
        const backgroundColor = node.style.backgroundColor;
        const color = node.style.color;
        const fontFamily = node.style.fontFamily;
        const fontWeight = node.style.fontWeight;
        const fontSize = node.style.fontSize;
        const textDecoration = node.style.textDecoration;
        const lineHeight = node.style.lineHeight;
        return Object.assign(Object.assign({}, originalOutput), { forChild: (lexicalNode, parent) => {
                var _a;
                const originalForChild = (_a = originalOutput === null || originalOutput === void 0 ? void 0 : originalOutput.forChild) !== null && _a !== void 0 ? _a : ((x) => x);
                const result = originalForChild(lexicalNode, parent);
                if ((0, lexical_1.$isTextNode)(result)) {
                    const style = [
                        backgroundColor ? `background-color: ${backgroundColor}` : null,
                        color ? `color: ${color}` : null,
                        fontFamily ? `font-family: ${fontFamily}` : null,
                        fontWeight ? `font-weight: ${fontWeight}` : null,
                        fontSize ? `font-size: ${fontSize}` : null,
                        textDecoration ? `text-decoration: ${textDecoration}` : null,
                        lineHeight ? `line-height: ${lineHeight}` : null
                    ]
                        .filter((value) => value != null)
                        .join('; ');
                    if (style.length) {
                        return result.setStyle(style);
                    }
                }
                return result;
            } });
    };
}
//# sourceMappingURL=ExtentedTextNode.js.map