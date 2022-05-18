import { combineReducers } from '@reduxjs/toolkit';
import cvDataReducer from './cvDataReducer';

const reducers = combineReducers({
  cvData: cvDataReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
