import { Forest } from "./Forest";

export const Row = ({ rowIndex, rowData }) => {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />;
    }
  }
};
