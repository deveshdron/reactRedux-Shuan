const redux = require("redux");
const createStore= redux.createStore;

const initialState={
counter:0
}


//reducer
//default state is 1, provided in es6
const rootReducer =(state=initialState,action)=>{
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());




//dispatching an action

//subscription