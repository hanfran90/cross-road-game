import { Grass } from "./Grass";
import { Tree } from "./Tree";

export const Forest = ({ rowIndex, rowData }) => {
  // console.log("Forest renders");
  // console.log(rowIndex, rowData);
  return (
    <Grass rowIndex={rowIndex}>
      {rowData.trees.map((tree, index) => (
        <Tree key={index} tileIndex={tree.tileIndex} height={tree.height} />
      ))}
    </Grass>
  );
};
