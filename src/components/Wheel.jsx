export default function Wheel({ x }) {
  return (
    <mesh position={[x, 0, 6]}>
      <boxGeometry args={[12, 33, 12]} />
      <meshLambertMaterial color={"#000000"} flatShading />
    </mesh>
  );
}
