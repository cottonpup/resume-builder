import { combineReducers } from '@reduxjs/toolkit';
import { reducer as cvDataReducer, CVData } from './cvDataReducer';

const reducers = combineReducers({
  cvData: cvDataReducer,
});

export default reducers;
export type State = {
  cvData: CVData;
};
