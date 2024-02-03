import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterval: 0 },
  reducers: {
    increment: (state) => {
      state.counterval++;
      console.log("Incremented State:", state);
    },
    decrement: (state, action) => {
      state.counterval--
    

    },
    nullAction: (state, action) => {
      state.counterval = 0
    },
    addValue: (state, action) => {
      state.counterval+= Number(action.payload.num)
    },
    subtractValue: (state, action) => {
      state.counterval-=Number(action.payload.num)
    },
  },
});

const privacySlice=createSlice({
  name:"privacy",
  initialState:false,
  reducers:{
Toogle:(state,action)=>{
   return state = !state
}

  }
})



const counterstore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const CounterAction = counterSlice.actions;
export const privacyAction=privacySlice.actions

export default counterstore;





// const counterReducer = (store = intinal_value, action) =>
// {

/*
const intinal_value = {
    counter: 0,
    privacy: false

if (action.type==="INCREMENT"){
    return{...store, counter:store.counter+1 , }
} else if (action.type==="DECREMENT"){
    return {...store,counter:store.counter-1,}
} else if (action.type==="null"){
    return{counter:store.counter = 0}
} else if (action.type==="Add"){
    return{...store,counter:store.counter + Number(action.payload.num), }
} else if (action.type==="SUBTRACT"){
    return{...store,counter:store.counter - Number(action.payload.num2), }
} else if (action.type==="PRIVACY"){
    return {...store,privacy:!store.privacy}
} 



    console.log("Action Received", action)
    return store;
}
}*/
