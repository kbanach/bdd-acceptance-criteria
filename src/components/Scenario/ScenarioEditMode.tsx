import { Box, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import theme from "../../theme";
import { BddLine } from "./BddLine";
import { Placeholder } from "./Placeholder";
import { IScenario, selectById, update } from "./scenariosSlice";

interface ScenarioEditModeProps {
    id: IScenario['id'];
    onClick: () => void;
}


export const ScenarioEditMode = ({ id, onClick = () => { } }: ScenarioEditModeProps) => {
    const {
        title,
        isEdited,
        given,
        when,
        then,
    } = useAppSelector((state) => selectById(state, id));
    const dispatch = useAppDispatch();

    const updateScenario = (payload: Partial<IScenario>) => dispatch(update({ id, ...payload }))

    return (
        <Box onClick={onClick}>
            {(isEdited === true) ? (
                <TextField size="medium" variant="standard" value={title} onChange={(e) => updateScenario({ title: e.target.value })} fullWidth />
            ) : (
                <Typography sx={{ fontSize: theme.typography.h2 }} variant='h2'>{title || <Placeholder>no title</Placeholder>}</Typography>
            )}
            <BddLine
                isEdited={isEdited}
                onChange={(newGiven) => updateScenario({ given: newGiven })}
                title="Given"
                content={given}
                placeholder="some state" />
            <BddLine
                isEdited={isEdited}
                onChange={(newWhen) => updateScenario({ when: newWhen })}
                title="When"
                content={when} 
                placeholder="some event" />
            <BddLine
                isEdited={isEdited}
                onChange={(newThen) => updateScenario({ then: newThen })}
                title="Then"
                content={then} 
                placeholder="expected result" />
        </Box>
    );
}