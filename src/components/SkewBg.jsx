export default function SkewBg({ color, flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "110%",
        left: "-5%",
        backgroundColor: color,
        transform: flip ? "skewY(2.5deg)" : "skewY(-2.5deg)",
        transformOrigin: flip ? "top right" : "top left",
        zIndex: 0,
      }}
    />
  );
}
