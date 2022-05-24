import { EmploymentElement, EducationElement } from './../reducers/cvDataReducer';
import { RawDraftContentState } from 'draft-js';
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
  payload: RawDraftContentState;
}

export interface AddEmploymentHistoryDataAction {
  type: ActionType.ADD_EMPLOYMENT_HISTORY_DATA;
  payload: string;
}

export interface UpdateEmploymentHistoryDataAction {
  type: ActionType.UPDATE_EMPLOYMENT_HISTORY_DATA;
  payload: {
    id: string;
    key: string;
    value: EmploymentElement[keyof EmploymentElement];
  };
}

export interface AddEducationAction {
  type: ActionType.ADD_EDUCATION_DATA;
  payload: string;
}

export interface UpdateEducationAction {
  type: ActionType.UPDATE_EDUCATION_DATA;
  payload: {
    id: string;
    key: string;
    value: EducationElement[keyof EducationElement];
  };
}

export type Action =
  | UpdatePersonalDetailAction
  | UpdateProfessionalSummaryAction
  | AddEmploymentHistoryDataAction
  | UpdateEmploymentHistoryDataAction
  | AddEducationAction
  | UpdateEducationAction;
