/// <reference types="react" />
export type OptionType = {
    [index: string]: string;
};
export interface AutocompleteProps {
    id: string;
    label: string;
    optionlabelkeyname: string;
    options: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent) => void;
    freeSolo?: boolean;
}
export declare const Autocomplete: React.FC<AutocompleteProps>;