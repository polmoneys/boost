declare const Surface: ({ initialValue, onChange, }: {
    initialValue?: number[] | undefined;
    onChange?: ((points: [number, number]) => void) | undefined;
}) => JSX.Element;
export default Surface;
