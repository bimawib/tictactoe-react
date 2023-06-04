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
        if(state.turn >= 4){
          state.compareInput();
        }
        state.turn++;
      } else {
        state.playerInput[1].push(action.payload.inputIndex);
        state.turn++;
      }
    },
    compareInput(state){
      const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
      ];
      const playerInput = state.playerInput;
      const playerO = playerInput[0];
      const playerX = playerInput[1];
      let winner = '';
      for(let i = 0; i < winningCombos.length; i++){
        if(playerO.includes(winningCombos[i][0]) && playerO.includes(winningCombos[i][1]) && playerO.includes(winningCombos[i][2])){
          winner = 'O';
        } else if(playerX.includes(winningCombos[i][0]) && playerX.includes(winningCombos[i][1]) && playerX.includes(winningCombos[i][2])){
          winner = 'X';
        }
      }
      if(winner === 'O'){
        state.winner = 'O';
      } else if(winner === 'X'){
        state.winner = 'X';
      } else if(state.turn === 9){
        state.winner = 'draw';
      }
    },
    resetState(state){
      state.winner = '';
      state.playerInput = [[], []];
      state.turn = 0;
    }
  }
});

// create a function to compare both arrays in playerInput to an array of winning combinations
// if any of the winning combinations are found in playerInput, then the player wins
// if the length of playerInput is 9 and no winning combinations are found, then it's a draw
// if the length of playerInput is less than 9 and no winning combinations are found, then the game continues

export const { addInput, compareInput, resetState } = gameSlicer.actions;

export default gameSlicer.reducer;
