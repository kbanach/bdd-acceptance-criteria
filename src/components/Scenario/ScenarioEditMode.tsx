import { Box, TextField, Typography } from "@mui/material";
import { title } from "process";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { BddLine } from "./BddLine";
import { IScenario, selectById, update } from "./scenariosSlice";

interface ScenarioEditModeProps {
    id: IScenario['id'];
}

export const ScenarioEditMode = ({ id }: ScenarioEditModeProps) => {
    const {
        title,
        given,
        when,
        then,
    } = useAppSelector((state) => selectById(state, id));

    const dispatch = useAppDispatch();

    const updateScenario = (payload: Partial<IScenario>) => dispatch(update({ id, ...payload }))

    return (
        <Box>
            <TextField id="title" label="Title" variant="standard" value={title} onChange={(e) => updateScenario({ title: e.target.value })} />
            <BddLine
                isEdited
                onChange={(newGiven) => updateScenario({ given: newGiven })}
                title="Given"
                content={given}
            />
            <BddLine
                isEdited
                onChange={(newWhen) => updateScenario({ when: newWhen })}
                title="When"
                content={when} />
            <BddLine
                isEdited
                onChange={(newThen) => updateScenario({ then: newThen })}
                title="Then"
                content={then} />
        </Box>)
}