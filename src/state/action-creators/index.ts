import type {
  UpdatePersonalDetailAction,
  UpdateProfessionalSummaryAction,
  AddEmploymentHistoryDataAction,
  AddEducationAction,
  UpdateEmploymentHistoryDataAction,
  UpdateEducationAction,
  AddWebsitesSocialLinksAction,
  UpdateWebsitesSocialLinksAction,
  AddLanguagesAction,
  UpdateLanguagesAction,
  UpdateSkillsAction,
  AddSkillsAction,
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
export type UpdateProfessionalSummaryData = typeof update_professional_summary_data;

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
  return (dispatch: Dispatch<UpdateEducationAction>) => {
    dispatch({
      type: ActionType.UPDATE_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdateEducationData = typeof update_education_data;

export const add_websites_social_links_data = (
  updatedInput: AddWebsitesSocialLinksAction['payload'],
) => {
  return (dispatch: Dispatch<AddWebsitesSocialLinksAction>) => {
    dispatch({
      type: ActionType.ADD_WEBSITES_SOCIAL_LINKS_DATA,
      payload: updatedInput,
    });
  };
};
export type AddWebsitesSocialLinksData = typeof update_education_data;

export const update_websites_social_links_data = (
  updatedInput: UpdateWebsitesSocialLinksAction['payload'],
) => {
  return (dispatch: Dispatch<UpdateWebsitesSocialLinksAction>) => {
    dispatch({
      type: ActionType.UPDATE_WEBSITES_SOCIAL_LINKS_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdateWebsitesSocialLinksData = typeof update_education_data;

export const add_languages_data = (updatedInput: AddLanguagesAction['payload']) => {
  return (dispatch: Dispatch<AddLanguagesAction>) => {
    dispatch({
      type: ActionType.ADD_LANGUAGES_DATA,
      payload: updatedInput,
    });
  };
};
export type AddLanguagesData = typeof add_languages_data;

export const update_languages_data = (updatedInput: UpdateLanguagesAction['payload']) => {
  return (dispatch: Dispatch<UpdateLanguagesAction>) => {
    dispatch({
      type: ActionType.UPDATE_LANGUAGES_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdateLanguagesData = typeof update_languages_data;

export const add_skills_data = (updatedInput: AddSkillsAction['payload']) => {
  return (dispatch: Dispatch<AddSkillsAction>) => {
    dispatch({
      type: ActionType.ADD_SKILLS_DATA,
      payload: updatedInput,
    });
  };
};
export type AddSkillsData = typeof add_skills_data;

export const update_skills_data = (updatedInput: UpdateSkillsAction['payload']) => {
  return (dispatch: Dispatch<UpdateSkillsAction>) => {
    dispatch({
      type: ActionType.UPDATE_SKILLS_DATA,
      payload: updatedInput,
    });
  };
};
export type UpdateSkillsData = typeof update_skills_data;
