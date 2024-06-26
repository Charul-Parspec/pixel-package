interface Props {
    initialHtml?: string;
    onBlur: (html: string) => void;
    onChange?: (html: string) => void;
}
export declare const HtmlPlugin: ({ initialHtml, onBlur, onChange }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
