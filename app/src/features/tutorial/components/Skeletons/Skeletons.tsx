import Skeleton from "../Skeleton/Skeleton";

function Skeletons({ amount = 1 }: { amount?: number }) {
  return (
    <div>
      {[...Array(amount)].map((k, v) => (
        <div className="css-scroll-gallery-item" key={v}>
          <Skeleton fill="var(--accent)" />
        </div>
      ))}
    </div>
  );
}

export default Skeletons;
