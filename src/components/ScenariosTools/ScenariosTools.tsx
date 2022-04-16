import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { scenarioToJiraSyntax } from "../../utils";
import { add } from "../Scenario";
import { selectAllScenarios } from "../Scenario/scenariosSlice";


function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
}

export const ScenariosTools = () => {
    const allScenarios = useAppSelector((state) => selectAllScenarios(state));
    const dispatch = useAppDispatch();
    const addScenario = () => dispatch(add());

    const [openClipboardSuccess, setOpenClipboardSuccess] = useState<boolean>(false);

    const copyAllAsJira = () => {
        const allScenariosJira = allScenarios.map(scenarioToJiraSyntax).join('\n\n')

        copyToClipboard(allScenariosJira);
        setOpenClipboardSuccess(true);
    };

    const handleClipboardSuccessClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenClipboardSuccess(false);
    }


    return (<>
        <Snackbar open={openClipboardSuccess} autoHideDuration={3000} onClose={handleClipboardSuccessClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClipboardSuccessClose} severity="success" sx={{ width: '100%' }}>
                Copied to clipboard!
            </Alert>
        </Snackbar>

        <Button onClick={addScenario} variant="outlined">New scenario</Button>
        {' '}
        <Button onClick={copyAllAsJira} variant="outlined">Copy all as Jira</Button>
    </>);
}