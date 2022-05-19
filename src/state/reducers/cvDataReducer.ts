import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export interface EmploymentElement {
  id: string;
  job_title: string;
  employer: string;
  start_date: string;
  end_date: string;
  city: string;
  description: string;
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
  employment_history: [] as EmploymentElement[],
  education: [
    // {
    //   id: 0
    //   school: '',
    //   degree: '',
    //   start_date: '',
    //   end_date: '',
    //   city: '',
    //   description: '',
    // },
  ],
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
      // let objIndex = state.employment_history.findIndex((obj) => obj.id === );
      return {
        ...state,
        employment_history: [
          ...state.employment_history,
          {
            id: action.payload,
            job_title: '',
            employer: '',
            start_date: '',
            end_date: '',
            city: '',
            description: '',
          },
        ],
      };

    default:
      return state;
  }
};
