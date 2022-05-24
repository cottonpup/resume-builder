import { EditorState, convertToRaw, RawDraftContentState } from 'draft-js';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export interface EmploymentElement {
  id: string;
  job_title: string;
  employer: string;
  startYear: number;
  startMonth: string;
  startDateSelected: boolean;
  endYear: number;
  endMonth: string;
  endDateSelected: boolean;
  city: string;
  description: RawDraftContentState;
}

export interface EmploymentUpdateElement {
  id: string;
  key: string;
  value: string | number | boolean;
}

export interface EducationElement {
  id: string;
  school: string;
  degree: string;
  startYear: number;
  startMonth: string;
  startDateSelected: boolean;
  endYear: number;
  endMonth: string;
  endDateSelected: boolean;
  city: string;
  description: RawDraftContentState;
}

export interface WebsiteSocialElement {
  id: string;
  label: string;
  link: string;
}
export interface SkillsElement {
  id: string;
  skill: string;
}

export interface LanguagesElement {
  id: string;
  language: string;
  level: string;
  proficiency: number;
}

const initialState = {
  personal_detail: {
    job_title: '',
    profile: ``,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    postal_code: '',
    driving_license: '',
    nationality: '',
    place_of_birth: '',
    date_of_birth: '',
  },
  professional_summary: convertToRaw(EditorState.createEmpty().getCurrentContent()),
  employment_history: [] as EmploymentElement[],
  education: [] as EducationElement[],
  websites_social_links: [] as WebsiteSocialElement[],
  skills: [] as SkillsElement[],
  languages: [] as LanguagesElement[],
};

export type CVData = typeof initialState;

export const reducer = (state: CVData = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_PERSONAL_DETAIL_DATA:
      return {
        ...state,
        personal_detail: {
          ...state.personal_detail,
          [action.payload.key]: action.payload.value,
        },
      };
    case ActionType.UPDATE_PROFESSIONAL_SUMMARY_DATA:
      return {
        ...state,
        professional_summary: action.payload,
      };
    case ActionType.ADD_EMPLOYMENT_HISTORY_DATA:
      return {
        ...state,
        employment_history: [
          ...state.employment_history,
          {
            id: action.payload,
            job_title: '',
            employer: '',
            startYear: new Date().getFullYear(),
            startMonth: '',
            endYear: new Date().getFullYear(),
            endMonth: '',
            startDateSelected: false,
            endDateSelected: false,
            city: '',
            description: convertToRaw(EditorState.createEmpty().getCurrentContent()),
          },
        ],
      };
    case ActionType.UPDATE_EMPLOYMENT_HISTORY_DATA:
      return {
        ...state,
        employment_history: state.employment_history.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, [action.payload.key]: action.payload.value };
          }
          return ele;
        }),
      };
    case ActionType.ADD_EDUCATION_DATA:
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: action.payload,
            school: '',
            degree: '',
            startYear: new Date().getFullYear(),
            startMonth: '',
            endYear: new Date().getFullYear(),
            startDateSelected: false,
            city: '',
            description: convertToRaw(EditorState.createEmpty().getCurrentContent()),
          },
        ],
      };
    case ActionType.UPDATE_EDUCATION_DATA:
      return {
        ...state,
        education: state.education.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, [action.payload.key]: action.payload.value };
          }
          return ele;
        }),
      };
    case ActionType.ADD_WEBSITES_SOCIAL_LINKS_DATA:
      return {
        ...state,
        websites_social_links: [
          ...state.websites_social_links,
          {
            id: action.payload,
            label: '',
            link: '',
          },
        ],
      };
    case ActionType.UPDATE_WEBSITES_SOCIAL_LINKS_DATA:
      return {
        ...state,
        websites_social_links: state.websites_social_links.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, [action.payload.key]: action.payload.value };
          }
          return ele;
        }),
      };
    case ActionType.ADD_LANGUAGES_DATA:
      return {
        ...state,
        languages: [
          ...state.languages,
          {
            id: action.payload,
            language: '',
            level: '',
            proficiency: 0,
          },
        ],
      };
    case ActionType.UPDATE_LANGUAGES_DATA:
      return {
        ...state,
        languages: state.languages.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, [action.payload.key]: action.payload.value };
          }
          return ele;
        }),
      };
    case ActionType.ADD_SKILLS_DATA:
      return {
        ...state,
        skills: [
          ...state.skills,
          {
            id: action.payload,
            skill: '',
          },
        ],
      };

    case ActionType.UPDATE_SKILLS_DATA:
      return {
        ...state,
        skills: state.skills.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, [action.payload.key]: action.payload.value };
          }
          return ele;
        }),
      };

    default:
      return state;
  }
};
