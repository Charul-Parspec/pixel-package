import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import LexicalClickableLinkPlugin from '@lexical/react/LexicalClickableLinkPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { AutoLinkPlugin } from './AutoLinkPlugin';
import { HtmlPlugin } from './HtmlPlugin';
import './RichText.css';
import { Placeholder } from './PlaceHolder';
import { Box } from '../Box';
import { ToolBar, registeredNodes } from './ToolBar';
import { DisableEditorPlugin } from './DisableEditorPlugin';
const theme = {
    link: 'cursor-pointer',
    text: {
        bold: 'textBold',
        italic: 'textItalic',
        underline: 'textUnderline'
    },
    paragraph: 'richTextParagraph',
    list: {
        listitem: 'richTextListItem',
        ul: 'richTextList',
        ol: 'richTextList'
    }
};
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
    console.error(error);
}
export function RichTextEditor({ onFileUpload, initialHtml = '', editorBgColor = 'white', contentEditableHeight = '150px', isDisable = false, placeHolderText = 'Enter text...', showAttachements = false, showShareableLinkButton = false, shareableLinkUrl = 'https://', shareableLinkTitle = '', showFontFamiliy = false, onBlur = () => { }, onChange = () => { }, onFocus = () => { } }) {
    const initialConfig = {
        namespace: 'ParspecEditor',
        theme,
        onError,
        nodes: registeredNodes
    };
    return (_jsx(LexicalComposer, Object.assign({ initialConfig: initialConfig }, { children: _jsx(Box, Object.assign({ className: "editor-container" }, { children: _jsxs(Box, Object.assign({ className: "editor-inner" }, { children: [_jsx(ToolBar, { onFileUpload: onFileUpload, isDisable: isDisable, showAttachements: showAttachements, showShareableLinkButton: showShareableLinkButton, shareableLinkTitle: shareableLinkTitle, shareableLinkUrl: shareableLinkUrl, showFontFamiliy: showFontFamiliy }), _jsx(RichTextPlugin, { contentEditable: _jsx(ContentEditable, { id: "content-editable", onFocus: onFocus, style: {
                                width: '100%',
                                height: contentEditableHeight,
                                border: '1px solid #ccc',
                                // outline: 0,
                                backgroundColor: editorBgColor,
                                paddingTop: '12px',
                                paddingLeft: '12px',
                                overflow: 'auto',
                                borderRadius: '5px'
                            } }), placeholder: _jsx(Placeholder, { placeHolderText: placeHolderText }), ErrorBoundary: LexicalErrorBoundary }), _jsx(ListPlugin, {}), _jsx(HistoryPlugin, {}), _jsx(HtmlPlugin, { initialHtml: initialHtml, onBlur: onBlur, onChange: onChange }), _jsx(AutoLinkPlugin, {}), _jsx(LinkPlugin, {}), _jsx(LexicalClickableLinkPlugin, {}), _jsx(DisableEditorPlugin, { isDisable: isDisable }), _jsx(MarkdownShortcutPlugin, { transformers: TRANSFORMERS })] })) })) })));
}
//# sourceMappingURL=index.js.map