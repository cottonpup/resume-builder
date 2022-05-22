import type {
  UpdatePersonalDetailAction,
  UpdateProfessionalSummaryAction,
  AddEmploymentHistoryDataAction,
  AddEducationAction,
  UpdateEmploymentHistoryDataAction,
  UpdateEducationAction,
} from './../actions/index';
import { ActionType } from '../action-types';
import type { Dispatch } from 'redux';

export const update_personal_detail_data = (
  updatedInput: UpdatePersonalDetailAction['payload'],
) => {
  return (dispatch: Dispatch<UpdatePersonalDetailAction>) => {
    dispatch({
      type: ActionType.UPDATE_PERSONAL_DETAIL_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdatePersonalDetailData = typeof update_personal_detail_data;

export const update_professional_summary_data = (
  updatedInput: UpdateProfessionalSummaryAction['payload'],
) => {
  return (dispatch: Dispatch<UpdateProfessionalSummaryAction>) => {
    dispatch({
      type: ActionType.UPDATE_PROFESSIONAL_SUMMARY_DATA,
      payload: updatedInput,
    });
  };
};

export const add_employment_history_data = (
  updatedInput: AddEmploymentHistoryDataAction['payload'],
) => {
  return (dispatch: Dispatch<AddEmploymentHistoryDataAction>) => {
    dispatch({
      type: ActionType.ADD_EMPLOYMENT_HISTORY_DATA,
      payload: updatedInput,
    });
  };
};
export type AddEmploymentHistoryData = typeof add_employment_history_data;

export const update_employment_history_data = (
  updatedInput: UpdateEmploymentHistoryDataAction['payload'],
) => {
  console.log({ updatedInput });
  return (dispatch: Dispatch<UpdateEmploymentHistoryDataAction>) => {
    dispatch({
      type: ActionType.UPDATE_EMPLOYMENT_HISTORY_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdateEmploymentHistoryData = typeof update_employment_history_data;

export const add_education_data = (updatedInput: AddEducationAction['payload']) => {
  return (dispatch: Dispatch<AddEducationAction>) => {
    dispatch({
      type: ActionType.ADD_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type AddEducationData = typeof add_education_data;

export const update_education_data = (updatedInput: UpdateEducationAction['payload']) => {
  console.log({ updatedInput });
  return (dispatch: Dispatch<UpdateEducationAction>) => {
    dispatch({
      type: ActionType.UPDATE_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdateEducationData = typeof update_education_data;
