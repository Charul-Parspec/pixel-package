import { default as MUISnackbar, SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar';

export const Snackbar: React.FC<MUISnackbarProps> = ({ ContentProps, ...props }) => {
    return (
        <MUISnackbar
            sx={{
                '& .MuiSnackbarContent-root': {
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: 'secondary.main',
                    padding: '4px 16px',
                    maxWidth: '40vw',
                    '@media (min-width: 600px)': {
                        minWidth: 160
                    }
                }
            }}
            {...props}
        />
    );
};

Snackbar.defaultProps = {
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
    },
    autoHideDuration: 3000
};
