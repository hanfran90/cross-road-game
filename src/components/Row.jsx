import { Forest } from "./Forest";
import { CarLane } from "./CarLane";

export const Row = ({ rowIndex, rowData }) => {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />;
    }

    case "car": {
      return <CarLane rowIndex={rowIndex} rowData={rowData} />;
    }
  }
};
