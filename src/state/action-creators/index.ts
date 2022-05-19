import type {
  UpdatePersonalDetailAction,
  UpdateProfessionalSummaryAction,
  AddEmploymentHistoryDataAction,
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
