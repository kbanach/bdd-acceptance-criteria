import { Box, Typography } from "@mui/material";
import { BddLine } from "./BddLine";

interface ScenarioProps {
    title: string;
}

export const Scenario = ({ title }: ScenarioProps) => (
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
)