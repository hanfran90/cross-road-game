import { Road } from "./Road";
import { Car } from "./Car";

export const CarLane = ({ rowIndex, rowData }) => {
  //   console.log(rowIndex, rowData);
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        //   console.log(vehicle, index),
        <Car
          key={index}
          rowIndex={rowIndex}
          initialTileIndex={vehicle.initialTileIndex}
          direction={rowData.direction}
          speed={rowData.speed}
          color={vehicle.color}
        />
      ))}
    </Road>
  );
};
