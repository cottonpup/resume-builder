import type { UpdatePersonalDetail, UpdateProfessionalSummary } from './../actions/index';
import { ActionType } from '../action-types';
import type { Dispatch } from 'redux';

export const update_personal_detail_data = (
  updatedInput: UpdatePersonalDetail['payload'],
) => {
  return (dispatch: Dispatch<UpdatePersonalDetail>) => {
    dispatch({
      type: ActionType.UPDATE_PERSONAL_DETAIL_DATA,
      payload: updatedInput,
    });
  };
};

export const update_professional_summary_data = (
  updatedInput: UpdateProfessionalSummary['payload'],
) => {
  return (dispatch: Dispatch<UpdateProfessionalSummary>) => {
    dispatch({
      type: ActionType.UPDATE_PROFESSIONAL_SUMMARY_DATA,
      payload: updatedInput,
    });
  };
};

export type UpdatePersonalDetailData = typeof update_personal_detail_data;
