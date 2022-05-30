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
  DeleteSkillsAction,
  DeleteLanguagesAction,
  DeleteWebsitesSocialLinksAction,
  DeleteEducationAction,
  DeleteEmploymentHistoryDataAction,
  MoveEmploymentHistoryDataAction,
  MoveWebsitesSocialLinksAction,
  MoveEducationDataAction,
  MoveLanguagesAction,
  MoveSkillsAction,
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
export type DispatchUpdatePersonalDetail = typeof update_personal_detail_data;

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
export type DispatchUpdateProfessionalSummary = typeof update_professional_summary_data;

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
export type DispatchAddEmploymentHistory = typeof add_employment_history_data;

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
export type DispatchUpdateEmploymentHistory = typeof update_employment_history_data;

export const delete_employment_history_data = (
  updatedInput: DeleteEmploymentHistoryDataAction['payload'],
) => {
  return (dispatch: Dispatch<DeleteEmploymentHistoryDataAction>) => {
    dispatch({
      type: ActionType.DELETE_EMPLOYMENT_HISTORY_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchDeleteEmploymentHistory = typeof delete_employment_history_data;

export const move_employment_history_data = (
  updatedInput: MoveEmploymentHistoryDataAction['payload'],
) => {
  return (dispatch: Dispatch<MoveEmploymentHistoryDataAction>) => {
    dispatch({
      type: ActionType.MOVE_EMPLOYMENT_HISTORY_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchMoveEmploymentHistory = typeof move_employment_history_data;

export const add_education_data = (updatedInput: AddEducationAction['payload']) => {
  return (dispatch: Dispatch<AddEducationAction>) => {
    dispatch({
      type: ActionType.ADD_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchAddEducation = typeof add_education_data;

export const update_education_data = (updatedInput: UpdateEducationAction['payload']) => {
  return (dispatch: Dispatch<UpdateEducationAction>) => {
    dispatch({
      type: ActionType.UPDATE_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchUpdateEducation = typeof update_education_data;

export const delete_education_data = (updatedInput: DeleteEducationAction['payload']) => {
  return (dispatch: Dispatch<DeleteEducationAction>) => {
    dispatch({
      type: ActionType.DELETE_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchDeleteEducation = typeof delete_education_data;

export const move_education_data = (updatedInput: MoveEducationDataAction['payload']) => {
  return (dispatch: Dispatch<MoveEducationDataAction>) => {
    dispatch({
      type: ActionType.MOVE_EDUCATION_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchMoveEducation = typeof move_education_data;

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
export type DispatchAddWebsitesSocialLinks = typeof add_websites_social_links_data;

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
export type DispatchUpdateWebsitesSocialLinks = typeof update_websites_social_links_data;

export const delete_websites_social_links_data = (
  updatedInput: DeleteWebsitesSocialLinksAction['payload'],
) => {
  return (dispatch: Dispatch<DeleteWebsitesSocialLinksAction>) => {
    dispatch({
      type: ActionType.DELETE_WEBSITES_SOCIAL_LINKS_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchDeleteWebsitesSocialLinks = typeof delete_websites_social_links_data;

export const move_websites_social_links_data = (
  updatedInput: MoveWebsitesSocialLinksAction['payload'],
) => {
  return (dispatch: Dispatch<MoveWebsitesSocialLinksAction>) => {
    dispatch({
      type: ActionType.MOVE_WEBSITES_SOCIAL_LINKS_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchMoveWebsitesSocialLinks = typeof move_websites_social_links_data;

export const add_languages_data = (updatedInput: AddLanguagesAction['payload']) => {
  return (dispatch: Dispatch<AddLanguagesAction>) => {
    dispatch({
      type: ActionType.ADD_LANGUAGES_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchAddLanguages = typeof add_languages_data;

export const update_languages_data = (updatedInput: UpdateLanguagesAction['payload']) => {
  return (dispatch: Dispatch<UpdateLanguagesAction>) => {
    dispatch({
      type: ActionType.UPDATE_LANGUAGES_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchUpdateLanguages = typeof update_languages_data;

export const delete_languages_data = (updatedInput: DeleteLanguagesAction['payload']) => {
  return (dispatch: Dispatch<DeleteLanguagesAction>) => {
    dispatch({
      type: ActionType.DELETE_LANGUAGES_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchDeleteLanguages = typeof delete_languages_data;

export const move_languages_data = (updatedInput: MoveLanguagesAction['payload']) => {
  return (dispatch: Dispatch<MoveLanguagesAction>) => {
    dispatch({
      type: ActionType.MOVE_LANGUAGES_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchMoveLanguages = typeof move_languages_data;

export const add_skills_data = (updatedInput: AddSkillsAction['payload']) => {
  return (dispatch: Dispatch<AddSkillsAction>) => {
    dispatch({
      type: ActionType.ADD_SKILLS_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchAddSkills = typeof add_skills_data;

export const update_skills_data = (updatedInput: UpdateSkillsAction['payload']) => {
  return (dispatch: Dispatch<UpdateSkillsAction>) => {
    dispatch({
      type: ActionType.UPDATE_SKILLS_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchUpdateSkills = typeof update_skills_data;

export const delete_skills_data = (updatedInput: DeleteSkillsAction['payload']) => {
  return (dispatch: Dispatch<DeleteSkillsAction>) => {
    dispatch({
      type: ActionType.DELETE_SKILLS_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchDeleteSkills = typeof delete_skills_data;

export const move_skills_data = (updatedInput: MoveSkillsAction['payload']) => {
  return (dispatch: Dispatch<MoveSkillsAction>) => {
    dispatch({
      type: ActionType.MOVE_SKILLS_DATA,
      payload: updatedInput,
    });
  };
};
export type DispatchMoveSkills = typeof move_skills_data;
