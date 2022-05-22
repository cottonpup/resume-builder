import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export interface EmploymentElement {
  id: string;
  job_title: string;
  job_title_label: string;
  employer: string;
  employer_label: string;
  startYear: number;
  startMonth: string;
  startDateSelected: boolean;
  endYear: number;
  endMonth: string;
  endDateSelected: boolean;
  city: string;
  city_label: string;
  description: string;
}

export interface EmploymentUpdateElement {
  id: string;
  key: string;
  value: string | number | boolean;
}

export interface DraftContentElement {
  key: string;
  text: string;
  type: string;
  depth: number;
  inlineStyleRanges: [];
  entityRanges: [];
  data: object;
}

export interface EducationElement {
  id: string;
  school: string;
  school_label: string;
  degree: string;
  degree_label: string;
  startYear: number;
  startMonth: string;
  startDateSelected: boolean;
  endYear: number;
  endMonth: string;
  endDateSelected: boolean;
  city: string;
  city_label: string;
  description: string;
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
  professional_summary: [] as DraftContentElement[],
  // TODO: Make a reducer func to update details
  employment_history: [] as EmploymentElement[],
  education: [] as EducationElement[],
  websites_social_links: [
    // { id: 0, label: '', link: '' }
  ],
  skills: [],
  language: [],
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
            job_title_label: 'Job title',
            job_title: '',
            employer_label: 'Employer',
            employer: '',
            startYear: new Date().getFullYear(),
            startMonth: '',
            endYear: new Date().getFullYear(),
            endMonth: '',
            startDateSelected: false,
            endDateSelected: false,
            city_label: 'City',
            city: '',
            description: '',
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
            school_label: 'School',
            degree: '',
            degree_label: 'Degree',
            startYear: new Date().getFullYear(),
            startMonth: '',
            endYear: new Date().getFullYear(),
            startDateSelected: false,
            city: '',
            city_label: 'City',
            description: '',
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

    default:
      return state;
  }
};
