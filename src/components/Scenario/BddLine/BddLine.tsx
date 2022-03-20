import { Box, Grid } from "@mui/material";
import theme from "../../../theme";


interface BddLineProps {
    title: string;
    content: string;
    editMode?: boolean;
}

export const BddLine = ({ editMode = false, title, content }: BddLineProps) => (
    <Grid container>
        <Grid item xs={2}><Box fontWeight={theme.typography.fontWeightBold}>{title}</Box></Grid>
        <Grid item xs={10}>{content}</Grid>
    </Grid>
)