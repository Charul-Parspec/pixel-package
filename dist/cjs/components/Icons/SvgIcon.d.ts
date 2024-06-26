import { SvgIconProps as MUISvgIconProps } from '@mui/material';
type contrastType = 'dark' | 'main' | 'contrastText' | 'light';
export declare function getFillColor(color: string, contrast?: contrastType): string;
export interface SvgIconProps extends Omit<MUISvgIconProps, 'fontSize'> {
    fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'inherit';
}
export declare function SvgIcon({ children, fontSize, color, ...restProps }: SvgIconProps): import("react/jsx-runtime").JSX.Element;
export declare namespace SvgIcon {
    var defaultProps: {
        fontSize: string;
        color: string;
    };
}
export {};
