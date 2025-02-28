import { useFrame } from "@react-three/fiber";
import { tileSize, minTileIndex, maxTileIndex } from "../constants";

export const useVehicleAnimation = (ref, direction, speed) => {
  useFrame((state, delta) => {
    if (!ref.current) return;
    const vehicle = ref.current;
    // console.log(vehicle);

    const beginningOfRow = (minTileIndex - 2) * tileSize;
    const endOfRow = (maxTileIndex + 2) * tileSize;

    // console.log(vehicle.position.x, endOfRow, beginningOfRow);

    if (direction) {
      vehicle.position.x =
        vehicle.position.x > endOfRow
          ? beginningOfRow
          : vehicle.position.x + speed * delta;
    } else {
      vehicle.position.x =
        vehicle.position.x < beginningOfRow
          ? endOfRow
          : vehicle.position.x - speed * delta;
    }
  });
};
