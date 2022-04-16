import { BddLine, BddLineProps } from "./BddLine";

type BddOptionalLineProps = BddLineProps & {};

export const BddOptionalLine = ({ ...props }: BddOptionalLineProps) => {
    return (
        <BddLine {...props} />
    );
}