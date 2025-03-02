import { endsUpInValidPosition } from "../utilities/endsUpInValidPostion";

export const state = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
};

export const queueMove = (direction) => {
  const isValidMove = endsUpInValidPosition(
    { rowIndex: state.currentRow, tileIndex: state.currentTile },
    [...state.movesQueue, direction]
  );

  if (!isValidMove) return;

  state.movesQueue.push(direction);
};

export const stepCompleted = () => {
  const direction = state.movesQueue.shift();

  if (direction === "forward") return (state.currentRow += 1);
  if (direction === "backward") return (state.currentRow -= 1);
  if (direction === "left") return (state.currentTile -= 1);
  if (direction === "right") return (state.currentTile += 1);
};
