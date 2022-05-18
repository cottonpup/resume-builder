import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const initialState = {
  personal_detail: {
    job_title: '',
    profile: '',
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
  professional_summary: '',
  employment_history: [
    {
      job_title: '',
      employer: '',
      start_date: '',
      end_date: '',
      city: '',
      description: '',
    },
  ],
  education: [
    {
      school: '',
      degree: '',
      start_date: '',
      end_date: '',
      city: '',
      description: '',
    },
  ],
  websites_social_links: [{ label: '', link: '' }],
  skills: [],
  language: [],
};

type CVData = typeof initialState;

const reducer = (state: CVData = initialState, action: Action) => {
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

    default:
      return state;
  }
};

export default reducer;
