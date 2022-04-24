import { Box, Grid, TextField } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import theme from "../../../theme";
import { Placeholder } from "../Placeholder";

export interface BddLineProps {
    title: string;
    content: string;
    placeholder?: string;
    isEdited?: boolean;
    onChange?: (newContent: string) => void
    button?: ReactElement
}

export const BddLine = ({ isEdited = false, title, content, placeholder = '', onChange = () => { }, button }: BddLineProps) => {

    const [localValue, setLocalValue] = useState<BddLineProps['content']>(content);

    useEffect(() => {
        setLocalValue(content);
    }, [content]);

    return (
        <Grid container>
            <Grid item xs={2}><Box fontWeight={theme.typography.fontWeightBold}>{title}</Box></Grid>

            <Grid item xs={8}>{
                (isEdited === true) ? (
                    <TextField
                        size="small"
                        variant="standard"
                        value={localValue}
                        onBlur={() => onChange(localValue)}
                        onChange={(e) => setLocalValue(e.target.value)}
                        placeholder={placeholder}
                        fullWidth />
                ) :
                    content || <Placeholder>{placeholder}</Placeholder>
            }</Grid>

            <Grid item xs={2}  container justifyContent="flex-end">{(isEdited && button) && (button)}</Grid>
        </Grid>
    );
}