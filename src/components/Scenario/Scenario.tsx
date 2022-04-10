import { Box, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { ScenarioEditMode } from "./ScenarioEditMode";
import { IScenario, selectById, update, remove } from "./scenariosSlice";
import './Scenario.scss';

interface ScenarioProps {
    id: IScenario['id'];
}

export const Scenario = ({ id }: ScenarioProps) => {
    const scenario = useAppSelector((state) => selectById(state, id));
    const dispatch = useDispatch();
    const startEdit = () => dispatch(update({ id, isEdited: true }));
    const finishEdit = () => dispatch(update({ id, isEdited: false }));
    const removeScenario = () => dispatch(remove( id ));

    if (scenario === null) {
        return <Box>No such scenario found.</Box>
    }

    const { isEdited } = scenario;

    return (
        <div className="scenario">
            <ScenarioEditMode id={id} onClick={startEdit} />
            {(isEdited === true) && <Button variant="contained" onClick={finishEdit}>Save</Button>}

            <div className="scenario__delete-button">
                <Button variant="contained" color="error" onClick={removeScenario}>Delete</Button>
            </div>
        </div>
    );
}