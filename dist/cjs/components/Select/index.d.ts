/// <reference types="react" />
import { SelectProps as MUISelectProps } from '@mui/material/Select';
interface SelectMenuOption {
    [index: string]: string | number | boolean | undefined;
    color?: string;
    disabled?: boolean;
}
type BorderColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
export interface SelectProps extends Omit<MUISelectProps, 'classes'> {
    label?: string;
    options: SelectMenuOption[];
    labelId?: string;
    id?: string;
    size?: 'small' | 'medium';
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    borderColor?: BorderColorType;
    customOption?: (props: SelectMenuOption) => JSX.Element;
}
export { SelectChangeEvent } from '@mui/material';
export declare const Select: import("react").ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
