import { Action, EAtions } from "./Actions";
import { IISSData, fetchCurrentISSData } from "./../ISSData";

export interface ReducerState {
  ISSData?: IISSData;
}

const initState: ReducerState = {};

export const Reducer = (state: ReducerState = initState, action: Action) => {
  switch (action.type) {
    case EAtions.ISSData: {
      fetchCurrentISSData().then((newIssData) => (state.ISSData = newIssData));
      return { ...state, ISSData: state.ISSData };
    }
    default:
      return state;
  }
};
