import { SvgIconProps } from '@mui/material';

export const AnnotateIcon: React.FC<SvgIconProps> = ({ color }) => {
    return (
        <svg style={{ color }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.75 19.25V12L12 4.75L16.25 12V19.25M10.25 8C10.25 8 10.5 9.25 12 9.25C13.5 9.25 13.75 8 13.75 8M16 13.75H8"
                stroke="#94A3B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};