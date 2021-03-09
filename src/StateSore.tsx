import { createStore } from "redux";

// //
// function counterReducer(state: IState_Store = {}, action: Eaction) {
//   switch (action.type) {
//     case "counter/incremented":
//       return { value: state.value + 1 };
//     default:
//       return state;
//   }
// }

// let store = createStore(counterReducer);
// store.subscribe(() => console.log(store.getState()));
// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/decremented" });

// interface IState_Store {
// }
// enum Eaction {}
