import { Snackbar, Alert } from "@mui/material";
import React, { ReactNode } from "react";

type NotificationProps = React.PropsWithChildren<{
    showNotification: boolean,
    onClose: () => void;
}>

export const Notification: React.FC<NotificationProps> = ({ showNotification, onClose, children }: NotificationProps) => {
    const handleClipboardSuccessClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        onClose();
    }

    return (
        <Snackbar
            open={showNotification}
            autoHideDuration={3000}
            onClose={handleClipboardSuccessClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                onClose={handleClipboardSuccessClose}
                severity="success"
                sx={{ width: '100%' }}
            >
                {children}
            </Alert>
        </Snackbar>
    );
}