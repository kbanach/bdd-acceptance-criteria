import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { scenarioToJiraSyntax } from "../../utils";
import { add } from "../Scenario";
import { clearAll, selectAllScenarios } from "../Scenario/scenariosSlice";
import { Notification } from '../Notification'


function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
}

export const ScenariosTools = () => {
    const allScenarios = useAppSelector((state) => selectAllScenarios(state));
    const dispatch = useAppDispatch();
    const addScenario = () => dispatch(add());
    const removeAll = () => dispatch(clearAll());

    const [showNotification, setShowNotification] = useState<boolean>(false);

    const copyAllAsJira = () => {
        const allScenariosJira = allScenarios.map(scenarioToJiraSyntax).join('\n\n')

        copyToClipboard(allScenariosJira);
        setShowNotification(true);
    };

    return (<>
        <Notification
            showNotification={showNotification}
            onClose={() => setShowNotification(false)}
        >
            Copied to clipboard!
        </Notification>

        <Button onClick={addScenario} variant="outlined">New scenario</Button>
        {' '}
        <Button onClick={copyAllAsJira} variant="outlined">Copy all as Jira</Button>
        {' '}
        <Button onClick={removeAll} variant="contained" color="error">Delete all</Button>
    </>);
}