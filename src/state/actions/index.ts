import { ActionType } from './../action-types/index';

export interface UpdatePersonalDetail {
  type: ActionType.UPDATE_PERSONAL_DETAIL_DATA;
  payload: {
    key: string;
    value: string;
  };
}

export interface UpdateProfessionalSummary {
  type: ActionType.UPDATE_PROFESSIONAL_SUMMARY_DATA;
  payload: string;
}

export type Action = UpdatePersonalDetail | UpdateProfessionalSummary;
