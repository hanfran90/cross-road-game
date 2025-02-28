import { tileSize } from "../constants";
import Wheel from "./Wheel";
import { useRef } from "react";
import { useVehicleAnimation } from "../hooks/useVehicleAnimation";

export const Car = ({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}) => {

const car = useRef(null);
useVehicleAnimation(car, direction, speed)

  return (
    <group
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
      ref={car}
    >
      <mesh position={[0, 0, 12]} castShadow receiveShadow>
        <boxGeometry args={[60, 30, 15]} />
        <meshLambertMaterial color={color} flatShading />
      </mesh>
      <mesh position={[-6, 0, 25.5]} castShadow receiveShadow>
        <boxGeometry args={[33, 24, 12]} />
        <meshLambertMaterial color={"#FFFFFF"} flatShading />
      </mesh>
      <Wheel x={-18} />
      <Wheel x={18} />
    </group>
  );
};
