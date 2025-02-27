import { tileSize } from "../constants";

export const Tree = ({ tileIndex, height }) => {
    // console.log("Tree renders")
    // console.log(tileIndex, height)
  return (
    <group position-x={tileIndex * tileSize}>
      <mesh position-z={height / 2 + 20}>
        <boxGeometry args={[30, 30, height]} />
        <meshLambertMaterial color={"#2a7a1a"} flatShading />
      </mesh>
      <mesh position-z={10}>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={"#60340b"} flatShading />
      </mesh>
    </group>
  );
};