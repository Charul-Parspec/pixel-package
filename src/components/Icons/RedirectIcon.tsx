import { SvgIconProps } from '@mui/material';

export const RedirectIcon: React.FC<SvgIconProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                stroke="#94A3B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M12 14.25L12 5" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.75 8.25L12 4.75L15.25 8.25" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
