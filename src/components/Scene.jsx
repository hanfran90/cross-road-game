import { Canvas } from "@react-three/fiber";
import { gridSize, tilesPerRow } from "../constants";

export const Scene = ({ children }) => {
  return (
    <Canvas
      orthographic={true}
      shadows={true}
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
      }}
    >
      <ambientLight />
      <gridHelper
        args={[gridSize, tilesPerRow, 0xff0000, "teal"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {children}
    </Canvas>
  );
};
