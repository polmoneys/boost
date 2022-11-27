function Skeleton({
  width = "100%",
  fill = "currentColor",
  cover = false,
}: {
  width?: string;
  fill?: string;
  cover?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        backgroundColor: fill,
        height: cover ? "100%" : "calc(var(--minHeightUserAction) * .5)",
      }}
    />
  );
}

export default Skeleton;
