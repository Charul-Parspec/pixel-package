/// <reference types="react" />
import { SelectProps as MUISelectProps } from '@mui/material/Select';
interface SelectMenuOption {
    [index: string]: string | number | ColorType;
}
type ColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
export interface StatusSelectProps extends Omit<MUISelectProps, 'classes' | 'label' | 'labelId' | 'input'> {
    options: SelectMenuOption[];
    id?: string;
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    optionColorKeyName?: string;
    type?: ColorType;
    label?: String;
    labelId?: string;
}
export declare const StatusSelect: import("react").ForwardRefExoticComponent<Omit<StatusSelectProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
