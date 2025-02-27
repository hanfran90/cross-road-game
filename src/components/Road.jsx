import { tileSize, tilesPerRow } from "../constants";

export const Road = ({ rowIndex, children }) => {
//   console.log(rowIndex, children);
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
        <meshLambertMaterial color={"#4f4c4a"} flatShading />
      </mesh>
      {children}
    </group>
  );
};
