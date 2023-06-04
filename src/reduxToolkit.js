import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  winner: '',
  playerInput: [[], []],
  turn: 0
}

const gameSlicer = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    addInput(state, action){
      if(action.payload.turn % 2 === 0){
        state.playerInput[0].push(action.payload.inputIndex);
        state.turn++;
      } else {
        state.playerInput[1].push(action.payload.inputIndex);
        state.turn++;
      }
    },
    resetState(state){
      state.winner = '';
      state.playerInput = [[], []];
      state.turn = 0;
    },
    setWinner(state, action){
      state.winner = action.payload.winner;
    }
  }
});

// create a function to compare both arrays in playerInput to an array of winning combinations
// if any of the winning combinations are found in playerInput, then the player wins
// if the length of playerInput is 9 and no winning combinations are found, then it's a draw
// if the length of playerInput is less than 9 and no winning combinations are found, then the game continues

export const { addInput, resetState, setWinner } = gameSlicer.actions;

export default gameSlicer.reducer;
