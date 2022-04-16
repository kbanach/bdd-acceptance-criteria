import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from "../../hooks";
import theme from "../../theme";
import { BddLine } from "./BddLine";
import { BddOptionalLine } from "./BddLine/BddOptionalLine";
import { Placeholder } from "./Placeholder";
import { addAnd, IScenario, removeAnd, selectById, update, updateAnd } from "./scenariosSlice";

interface ScenarioEditModeProps {
    id: IScenario['id'];
    onClick: () => void;
}


export const ScenarioEditor = ({ id, onClick = () => { } }: ScenarioEditModeProps) => {
    const {
        title,
        isEdited,
        given,
        givenAnds,
        when,
        whenAnds,
        then,
        thenAnds,
    } = useAppSelector((state) => selectById(state, id));
    const dispatch = useAppDispatch();

    const updateScenario = (payload: Partial<IScenario>) => dispatch(update({ id, ...payload }));

    const addGivenAnd = () => dispatch(addAnd({ id, type: 'givenAnds', value: '' }));
    const addWhenAnd = () => dispatch(addAnd({ id, type: 'whenAnds', value: '' }));
    const addThenAnd = () => dispatch(addAnd({ id, type: 'thenAnds', value: '' }));

    const updateGivenAnd = (idxToUpdate: number, value: string) => dispatch(updateAnd({ id, type: 'givenAnds', andIdx: idxToUpdate, value }));
    const updateWhenAnd = (idxToUpdate: number, value: string) => dispatch(updateAnd({ id, type: 'whenAnds', andIdx: idxToUpdate, value }));
    const updateThenAnd = (idxToUpdate: number, value: string) => dispatch(updateAnd({ id, type: 'thenAnds', andIdx: idxToUpdate, value }));

    const removeGivenAndOnIndex = (idxToRemove: number) => dispatch(removeAnd({ id, type: 'givenAnds', andIdx: idxToRemove }));
    const removeWhenAndOnIndex = (idxToRemove: number) => dispatch(removeAnd({ id, type: 'whenAnds', andIdx: idxToRemove }));
    const removeThenAndOnIndex = (idxToRemove: number) => dispatch(removeAnd({ id, type: 'thenAnds', andIdx: idxToRemove }));

    return (
        <Box onClick={onClick}>
            {(isEdited === true) ? (
                <TextField size="medium" variant="standard" value={title} onChange={(e) => updateScenario({ title: e.target.value })} fullWidth />
            ) : (
                <Typography sx={{ fontSize: theme.typography.h2 }} variant='h2'>{title || <Placeholder>no title</Placeholder>}</Typography>
            )}

            {(isEdited) && (<><br /><br /></>)}

            <BddLine
                isEdited={isEdited}
                onChange={(newGiven) => updateScenario({ given: newGiven })}
                title="Given"
                content={given}
                placeholder="some state"
                button={
                    <Button
                        size="small"
                        onClick={addGivenAnd}
                        variant="outlined"
                        startIcon={<AddIcon />}>
                        And
                    </Button>
                }
            />
            {givenAnds.map((and, idx) => (
                <BddOptionalLine
                    key={`given-and-${and}-${idx}`}
                    isEdited={isEdited}
                    onChange={(newGiven) => updateGivenAnd(idx, newGiven)}
                    title="And"
                    content={and}
                    placeholder="and for given"
                    button={
                        <Button
                            size="small"
                            onClick={() => removeGivenAndOnIndex(idx)}
                            variant="outlined"
                            startIcon={<DeleteIcon />}>
                            Remove
                        </Button>
                    }
                />
            ))}

            {(isEdited) && (<br />)}

            <BddLine
                isEdited={isEdited}
                onChange={(newWhen) => updateScenario({ when: newWhen })}
                title="When"
                content={when}
                placeholder="some event"
                button={
                    <Button
                        size="small"
                        onClick={addWhenAnd}
                        variant="outlined"
                        startIcon={<AddIcon />}>
                        And
                    </Button>
                }
            />

            {whenAnds.map((and, idx) => (
                <BddOptionalLine
                    key={`when-and-${and}-${idx}`}
                    isEdited={isEdited}
                    onChange={(newWhen) => updateWhenAnd(idx, newWhen)}
                    title="And"
                    content={and}
                    placeholder="and for when"
                    button={
                        <Button
                            size="small"
                            onClick={() => removeWhenAndOnIndex(idx)}
                            variant="outlined"
                            startIcon={<DeleteIcon />}>
                            Remove
                        </Button>
                    }
                />
            ))}

            {(isEdited) && (<br />)}

            <BddLine
                isEdited={isEdited}
                onChange={(newThen) => updateScenario({ then: newThen })}
                title="Then"
                content={then}
                placeholder="expected result"
                button={
                    <Button
                        size="small"
                        onClick={addThenAnd}
                        variant="outlined"
                        startIcon={<AddIcon />}>
                        And
                    </Button>
                }
            />

            {thenAnds.map((and, idx) => (
                <BddOptionalLine
                    key={`then-and-${and}-${idx}`}
                    isEdited={isEdited}
                    onChange={(newThen) => updateThenAnd(idx, newThen)}
                    title="And"
                    content={and}
                    placeholder="and for then"
                    button={
                        <Button
                            size="small"
                            onClick={() => removeThenAndOnIndex(idx)}
                            variant="outlined"
                            startIcon={<DeleteIcon />}>
                            Remove
                        </Button>
                    }
                />
            ))}

            {(isEdited) && (<br />)}

        </Box>
    );
}