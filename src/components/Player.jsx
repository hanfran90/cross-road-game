import { Bounds } from "@react-three/drei";
import usePlayerAnimation from "../hooks/usePlayerAnimation";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLight } from "./DirectionalLight";

export const Player = () => {
  const player = useRef(null);
  const lightRef = useRef(null);
  const camera = useThree((state) => state.camera);
  // console.log(camera)

  usePlayerAnimation(player);

  useEffect(() => {
    if (!player.current) return;
    if (!lightRef.current) return;

    // console.log(player.current.add(camera));

    player.current.add(camera);
    lightRef.current.target = player.current;
  });

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        <group>
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
        <DirectionalLight ref={lightRef} />
      </group>
    </Bounds>
  );
};
