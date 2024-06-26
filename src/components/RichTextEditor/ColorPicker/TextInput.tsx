import { HTMLInputTypeAttribute } from 'react';
import { Box } from '../../Box';
import { TextField } from '../../TextField';

interface ITextInput {
    label: string;
    onChange: (val: string) => void;
    placeholder?: string;
    value: string;
    type?: HTMLInputTypeAttribute;
}

export default function TextInput({ label, value, onChange, placeholder = '', type = 'text' }: ITextInput): JSX.Element {
    return (
        <Box width="100%" display="flex" alignItems="center" justifyContent={'space-between'} mb="10px">
            <TextField
                fullWidth
                size="small"
                type={type}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </Box>
    );
}
