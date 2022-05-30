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

export interface DeleteEmploymentHistoryDataAction {
  type: ActionType.DELETE_EMPLOYMENT_HISTORY_DATA;
  payload: string;
}

export interface MoveEmploymentHistoryDataAction {
  type: ActionType.MOVE_EMPLOYMENT_HISTORY_DATA;
  payload: {
    insertLocation: number;
    removeLocation: number;
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
export interface DeleteEducationAction {
  type: ActionType.DELETE_EDUCATION_DATA;
  payload: string;
}

export interface MoveEducationDataAction {
  type: ActionType.MOVE_EDUCATION_DATA;
  payload: {
    insertLocation: number;
    removeLocation: number;
  };
}

export interface AddWebsitesSocialLinksAction {
  type: ActionType.ADD_WEBSITES_SOCIAL_LINKS_DATA;
  payload: string;
}

export interface UpdateWebsitesSocialLinksAction {
  type: ActionType.UPDATE_WEBSITES_SOCIAL_LINKS_DATA;
  payload: {
    id: string;
    key: string;
    value: string;
  };
}

export interface DeleteWebsitesSocialLinksAction {
  type: ActionType.DELETE_WEBSITES_SOCIAL_LINKS_DATA;
  payload: string;
}

export interface MoveWebsitesSocialLinksAction {
  type: ActionType.MOVE_WEBSITES_SOCIAL_LINKS_DATA;
  payload: {
    insertLocation: number;
    removeLocation: number;
  };
}

export interface AddSkillsAction {
  type: ActionType.ADD_SKILLS_DATA;
  payload: string;
}

export interface UpdateSkillsAction {
  type: ActionType.UPDATE_SKILLS_DATA;
  payload: {
    id: string;
    key: string;
    value: string;
  };
}

export interface DeleteSkillsAction {
  type: ActionType.DELETE_SKILLS_DATA;
  payload: string;
}

export interface MoveSkillsAction {
  type: ActionType.MOVE_SKILLS_DATA;
  payload: {
    insertLocation: number;
    removeLocation: number;
  };
}

export interface AddLanguagesAction {
  type: ActionType.ADD_LANGUAGES_DATA;
  payload: string;
}

export interface UpdateLanguagesAction {
  type: ActionType.UPDATE_LANGUAGES_DATA;
  payload: {
    id: string;
    key: string;
    value: string | number;
  };
}
export interface DeleteLanguagesAction {
  type: ActionType.DELETE_LANGUAGES_DATA;
  payload: string;
}

export interface MoveLanguagesAction {
  type: ActionType.MOVE_LANGUAGES_DATA;
  payload: {
    insertLocation: number;
    removeLocation: number;
  };
}

export type Action =
  | UpdatePersonalDetailAction
  | UpdateProfessionalSummaryAction
  | AddEmploymentHistoryDataAction
  | UpdateEmploymentHistoryDataAction
  | DeleteEmploymentHistoryDataAction
  | MoveEmploymentHistoryDataAction
  | AddEducationAction
  | UpdateEducationAction
  | MoveEducationDataAction
  | DeleteEducationAction
  | AddWebsitesSocialLinksAction
  | UpdateWebsitesSocialLinksAction
  | DeleteWebsitesSocialLinksAction
  | MoveWebsitesSocialLinksAction
  | AddSkillsAction
  | UpdateSkillsAction
  | DeleteSkillsAction
  | MoveSkillsAction
  | AddLanguagesAction
  | UpdateLanguagesAction
  | MoveLanguagesAction
  | DeleteLanguagesAction;
