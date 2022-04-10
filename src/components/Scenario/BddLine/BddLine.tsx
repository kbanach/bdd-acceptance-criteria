import { Box, Grid, TextField } from "@mui/material";
import { ReactFragment } from "react";
import theme from "../../../theme";
import { Placeholder } from "../Placeholder";

interface BddLineProps {
    title: string;
    content: string;
    placeholder?: string;
    isEdited?: boolean;
    onChange?: (newContent: string) => void
}

export const BddLine = ({ isEdited = false, title, content, placeholder = '', onChange = () => { } }: BddLineProps) => {
    return (
        <Grid container>
            <Grid item xs={2}><Box fontWeight={theme.typography.fontWeightBold}>{title}</Box></Grid>
            <Grid item xs={10}>{
                (isEdited === true) ? (
                    <TextField size="small" variant="standard" value={content} onChange={(e) => onChange(e.target.value)} fullWidth />
                ) :
                    content ||  <Placeholder>{placeholder}</Placeholder>
            }</Grid>
        </Grid>
    );
}