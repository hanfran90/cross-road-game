import { tileSize, tilesPerRow } from "../constants";

export const Grass = ({ rowIndex, children }) => {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={"#6bcb57"} flatShading />
      </mesh>
      {children}
    </group>
  );
};
