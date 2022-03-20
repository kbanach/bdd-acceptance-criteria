import { Box, Grid, TextField } from "@mui/material";
import theme from "../../../theme";


interface BddLineProps {
    title: string;
    content: string;
    isEdited?: boolean;
    onChange?: (newContent: string) => void
}

export const BddLine = ({ isEdited = false, title, content, onChange = () => { } }: BddLineProps) => {
    if (isEdited) {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <TextField label={title} variant="standard" value={content} onChange={(e) => onChange(e.target.value)} />
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid item xs={2}><Box fontWeight={theme.typography.fontWeightBold}>{title}</Box></Grid>
            <Grid item xs={10}>{content}</Grid>
        </Grid>
    );
}