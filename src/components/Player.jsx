import { Bounds } from "@react-three/drei";

export const Player = () => {
  return (
    <Bounds fit clip observe margin={10}>
      <mesh position={[0, 0, 10]} castShadow receiveShadow>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial
          color={"#f6049d"}
          emissive={"#c31313"}
          flatShading
        />
      </mesh>
    </Bounds>
  );
};
