import { Grass } from "./Grass";
import { rows } from "../metadata";
import { Row } from "./Row";

export const Map = () => {
  return (
    <>
      <Grass rowIndex={0} />
      <Grass rowIndex={-1} />

      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  );
};
