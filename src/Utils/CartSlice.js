import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",//config
  initialState:{
    items:[]//cart items
  },
  reducers:{
    addItem: (state, action) => {
        //Mutating the state here
       state.items.push(action.payload); 
    },
    removeItem: (state,action) => {
      const index = state.items.findIndex(item => item?.card?.info?.name === action.payload?.card?.info?.name);
      // console.log(index)
      if (index > -1) {
        state.items.splice(index, 1);
        
      }
    },
    clearCart: (state) => {
        state.items.length = 0; //[]
    } 
  }  
})

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} = cartSlice.actions;