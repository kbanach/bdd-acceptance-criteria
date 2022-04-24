import { Alert, Box, Button, Grid, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { ScenarioEditor } from "./ScenarioEditor";
import { IScenario, selectById, update, remove } from "./scenariosSlice";
import './Scenario.scss';
import { scenarioToJiraSyntax } from "../../utils";
import { useState } from "react";
import { Notification } from '../Notification';

interface ScenarioProps {
    id: IScenario['id'];
}

function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
}

export const Scenario = ({ id }: ScenarioProps) => {
    const scenario = useAppSelector((state) => selectById(state, id));
    const dispatch = useDispatch();
    const startEdit = () => dispatch(update({ id, isEdited: true }));
    const finishEdit = () => dispatch(update({ id, isEdited: false }));
    const removeScenario = () => dispatch(remove(id));

    const [showNotification, setShowNotification] = useState<boolean>(false);

    const copyAsJira = () => {
        copyToClipboard(scenarioToJiraSyntax(scenario));
        setShowNotification(true);
    };

    if (scenario === null) {
        return <Box>No such scenario found.</Box>
    }

    const { isEdited } = scenario;

    return (
        <div className="scenario">
            <Notification showNotification={showNotification} onClose={() => setShowNotification(false)}>
                Copied to clipboard!
            </Notification>

            <ScenarioEditor id={id} onClick={startEdit} />
            {(isEdited === true) && <Button variant="contained" onClick={finishEdit}>Save</Button>}

            <div className="scenario__hover-buttons">
                <Button variant="outlined" color="primary" onClick={copyAsJira}>Copy as JIRA text</Button>
                {' '}
                <Button variant="contained" color="error" onClick={removeScenario}>Delete</Button>
            </div>
        </div>
    );
}