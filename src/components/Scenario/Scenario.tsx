import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { BddLine } from "./BddLine";
import { ScenarioEditMode } from "./ScenarioEditMode";
import { IScenario, selectById } from "./scenariosSlice";

interface ScenarioProps {
    id: IScenario['id'];
}

export const Scenario = ({ id }: ScenarioProps) => {
    const scenario = useAppSelector((state) => selectById(state, id));

    if (scenario === null) {
        return <Box>No such scenario found.</Box>
    }

    const {
        title,
        isEdited,
    } = scenario;

    if (isEdited) {
        return <ScenarioEditMode id={id} />
    }

    return (
        <Box>
            <Typography variant="h3">{title}</Typography>
            <BddLine
                title="Given"
                content="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
            />
            <BddLine
                title="When"
                content="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
            />
            <BddLine
                title="Then"
                content="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem"
            />
        </Box>
    );
}