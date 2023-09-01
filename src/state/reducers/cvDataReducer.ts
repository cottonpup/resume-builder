import { EditorState, convertToRaw, RawDraftContentState } from 'draft-js';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export interface EmploymentElement {
    id: string;
    job_title: string;
    employer: string;
    startYear?: number;
    startMonth?: string;
    endYear?: number;
    endMonth?: string;
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
    startYear?: number;
    startMonth?: string;
    endYear?: number;
    endMonth?: string;
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
    // skillSuggestions: string;
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

const initialStateSampleCV = {
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
    // FIXME Why can't I remove this?
    professional_summary: {
        blocks: [
            {
                key: '1vn6k',
                text: 'Software engineer.',
                type: 'unstyled',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
        ],
        //  TODO: What was entityMap?
        entityMap: {},
    } as RawDraftContentState,
    employment_history: [] as EmploymentElement[],
    education: [] as EducationElement[],
    websites_social_links: [] as WebsiteSocialElement[],
    skills: [] as SkillsElement[],
    languages: [] as LanguagesElement[],
};

export type CVData = typeof initialState;

export const reducer = (state: CVData = initialStateSampleCV, action: Action) => {
    switch (action.type) {
        case ActionType.UPDATE_PERSONAL_DETAIL_DATA: {
            return {
                ...state,
                personal_detail: {
                    ...state.personal_detail,
                    [action.payload.key]: action.payload.value,
                },
            };
        }
        case ActionType.UPDATE_PROFESSIONAL_SUMMARY_DATA: {
            return {
                ...state,
                professional_summary: action.payload,
            };
        }
        case ActionType.ADD_EMPLOYMENT_HISTORY_DATA: {
            return {
                ...state,
                employment_history: [
                    ...state.employment_history,
                    {
                        id: action.payload,
                        job_title: '',
                        employer: '',
                        city: '',
                        description: convertToRaw(
                            EditorState.createEmpty().getCurrentContent(),
                        ),
                    },
                ],
            };
        }
        case ActionType.UPDATE_EMPLOYMENT_HISTORY_DATA: {
            return {
                ...state,
                employment_history: state.employment_history.map((ele) => {
                    if (ele.id === action.payload.id) {
                        return { ...ele, [action.payload.key]: action.payload.value };
                    }
                    return ele;
                }),
            };
        }
        case ActionType.DELETE_EMPLOYMENT_HISTORY_DATA: {
            return {
                ...state,
                employment_history: state.employment_history.filter(
                    (ele) => ele.id !== action.payload,
                ),
            };
        }
        case ActionType.MOVE_EMPLOYMENT_HISTORY_DATA: {
            let _employment_history = state.employment_history.slice();
            const item = _employment_history[action.payload.removeLocation];
            _employment_history.splice(action.payload.removeLocation, 1);
            _employment_history.splice(action.payload.insertLocation, 0, item);
            return {
                ...state,
                employment_history: [..._employment_history],
            };
        }
        case ActionType.ADD_EDUCATION_DATA: {
            return {
                ...state,
                education: [
                    ...state.education,
                    {
                        id: action.payload,
                        school: '',
                        degree: '',
                        city: '',
                        description: convertToRaw(
                            EditorState.createEmpty().getCurrentContent(),
                        ),
                    },
                ],
            };
        }
        case ActionType.UPDATE_EDUCATION_DATA: {
            return {
                ...state,
                education: state.education.map((ele) => {
                    if (ele.id === action.payload.id) {
                        return { ...ele, [action.payload.key]: action.payload.value };
                    }
                    return ele;
                }),
            };
        }
        case ActionType.DELETE_EDUCATION_DATA: {
            return {
                ...state,
                education: state.education.filter((ele) => ele.id !== action.payload),
            };
        }
        case ActionType.MOVE_EDUCATION_DATA: {
            let _education = state.education.slice();
            const item = _education[action.payload.removeLocation];
            _education.splice(action.payload.removeLocation, 1);
            _education.splice(action.payload.insertLocation, 0, item);
            return {
                ...state,
                education: [..._education],
            };
        }
        case ActionType.ADD_WEBSITES_SOCIAL_LINKS_DATA: {
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
        }
        case ActionType.UPDATE_WEBSITES_SOCIAL_LINKS_DATA: {
            return {
                ...state,
                websites_social_links: state.websites_social_links.map((ele) => {
                    if (ele.id === action.payload.id) {
                        return { ...ele, [action.payload.key]: action.payload.value };
                    }
                    return ele;
                }),
            };
        }
        case ActionType.MOVE_WEBSITES_SOCIAL_LINKS_DATA: {
            let _websites_social_links = state.websites_social_links.slice();
            const item = _websites_social_links[action.payload.removeLocation];
            _websites_social_links.splice(action.payload.removeLocation, 1);
            _websites_social_links.splice(action.payload.insertLocation, 0, item);
            return {
                ...state,
                websites_social_links: [..._websites_social_links],
            };
        }
        case ActionType.DELETE_WEBSITES_SOCIAL_LINKS_DATA: {
            return {
                ...state,
                websites_social_links: state.websites_social_links.filter(
                    (ele) => ele.id !== action.payload,
                ),
            };
        }
        case ActionType.ADD_LANGUAGES_DATA: {
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
        }
        case ActionType.UPDATE_LANGUAGES_DATA: {
            return {
                ...state,
                languages: state.languages.map((ele) => {
                    if (ele.id === action.payload.id) {
                        return { ...ele, [action.payload.key]: action.payload.value };
                    }
                    return ele;
                }),
            };
        }
        case ActionType.DELETE_LANGUAGES_DATA: {
            return {
                ...state,
                languages: state.languages.filter((ele) => ele.id !== action.payload),
            };
        }
        case ActionType.MOVE_LANGUAGES_DATA: {
            let _languages = state.languages.slice();
            const item = _languages[action.payload.removeLocation];
            _languages.splice(action.payload.removeLocation, 1);
            _languages.splice(action.payload.insertLocation, 0, item);
            return {
                ...state,
                languages: [..._languages],
            };
        }
        case ActionType.ADD_SKILLS_DATA: {
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
        }
        case ActionType.UPDATE_SKILLS_DATA: {
            return {
                ...state,
                skills: state.skills.map((ele) => {
                    if (ele.id === action.payload.id) {
                        return { ...ele, [action.payload.key]: action.payload.value };
                    }
                    return ele;
                }),
            };
        }
        case ActionType.DELETE_SKILLS_DATA: {
            return {
                ...state,
                skills: state.skills.filter((ele) => ele.id !== action.payload),
            };
        }
        case ActionType.MOVE_SKILLS_DATA: {
            let _skills = state.skills.slice();
            const item = _skills[action.payload.removeLocation];
            _skills.splice(action.payload.removeLocation, 1);
            _skills.splice(action.payload.insertLocation, 0, item);
            return {
                ...state,
                skills: [..._skills],
            };
        }
        default: {
            return state;
        }
    }
};
