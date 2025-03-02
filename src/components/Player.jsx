import { Bounds } from "@react-three/drei";
import usePlayerAnimation from "../hooks/usePlayerAnimation";
import { useRef } from "react";

export const Player = () => {
  const player = useRef(null);
  usePlayerAnimation(player);

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        <mesh position={[0, 0, 10]} castShadow receiveShadow>
          <boxGeometry args={[15, 15, 20]} />
          <meshLambertMaterial
            color={"#f6049d"}
            emissive={"#c31313"}
            flatShading
          />
        </mesh>
        <mesh position={[0, 0, 21]} castShadow receiveShadow>
          <boxGeometry args={[2, 4, 2]} />
          <meshLambertMaterial color={"#f5f5f5"} flatShading />
        </mesh>
      </group>
    </Bounds>
  );
};
