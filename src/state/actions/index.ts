import { ActionType } from './../action-types/index';

export interface UpdatePersonalDetailAction {
  type: ActionType.UPDATE_PERSONAL_DETAIL_DATA;
  payload: {
    key: string;
    value: string;
  };
}

export interface UpdateProfessionalSummaryAction {
  type: ActionType.UPDATE_PROFESSIONAL_SUMMARY_DATA;
  payload: [];
}

export interface AddEmploymentHistoryDataAction {
  type: ActionType.ADD_EMPLOYMENT_HISTORY_DATA;
  payload: string;
}

export type Action =
  | UpdatePersonalDetailAction
  | UpdateProfessionalSummaryAction
  | AddEmploymentHistoryDataAction;
