export const state = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
};

export const queueMove = (direction) => {
  state.movesQueue.push(direction);
};

export const stepCompleted = () => {
  const direction = state.movesQueue.shift();

  if (direction === "forward") return (state.currentRow += 1);
  if (direction === "backward") return (state.currentRow -= 1);
  if (direction === "left") return (state.currentTile -= 1);
  if (direction === "right") return (state.currentTile += 1);
};
