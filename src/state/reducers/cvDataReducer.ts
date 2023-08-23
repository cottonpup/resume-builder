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

const intialStateSampleCV = {
    personal_detail: {
        job_title: 'Software Engineer',
        profile: '',
        first_name: 'Ramgee',
        last_name: 'Ramgee',
        email: 'Ramgee@gmail.com',
        phone: '123123123',
        country: '',
        city: '',
        address: 'Seoul',
        postal_code: '',
        driving_license: '',
        nationality: 'Korean',
        place_of_birth: '',
        date_of_birth: 'May 26, 2030',
    },
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
            {
                key: '3bt8v',
                text: 'NodeJS.',
                type: 'unordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
            {
                key: 'ack7p',
                text: 'Strong Typescript mindset.',
                type: 'unordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
            {
                key: 'fqjlg',
                text: 'Methodical problem solver.',
                type: 'unordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
            {
                key: 'furg7',
                text: 'Eager to deliver value',
                type: 'unordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
            {
                key: '4pq94',
                text: 'Transparent and over-communicative when working remote.',
                type: 'unordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
            {
                key: 'c7b9e',
                text: 'Used to work with people',
                type: 'unordered-list-item',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
        ],
        entityMap: {},
    } as RawDraftContentState,
    employment_history: [
        {
            id: '8888c05f-e071-4d4b-9b67-970ec6f32fb1',
            job_title: 'Software Engineer',
            employer: 'Lime',
            city: 'Greenland',
            description: {
                blocks: [
                    {
                        key: '9e8iv',
                        text: 'Citric =)',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2722,
            startMonth: 'Jan',
            endYear: 2522,
            endMonth: 'Jul',
        },
        {
            id: '9996c05f-e071-4d4b-9b67-970ec6f32fb1',
            job_title: 'Software Engineer',
            employer: 'PayPal',
            city: 'London, Italy',
            description: {
                blocks: [
                    {
                        key: '9e8iv',
                        text: 'Nos bas',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2622,
            startMonth: 'Jan',
            endYear: 2622,
            endMonth: 'Jul',
        },
        {
            id: '0646c05f-e071-4d4b-9b67-970ec6f32fb1',
            job_title: 'Software Engineer',
            employer: 'Naver',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: '9e8iv',
                        text: 'Gus.',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2022,
            startMonth: 'Jan',
            endYear: 2022,
            endMonth: 'Jul',
        },
        {
            id: '4ea4b3fb-4bd1-4a81-9dc9-13c07f21cf8b',
            job_title: 'Backend Developer',
            employer: 'Hello',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: '7quj',
                        text: 'bakabala.',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                    {
                        key: '40pkp',
                        text: 'balabaka.',
                        type: 'unordered-list-item',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                    {
                        key: 'fgi2n',
                        text: 'I have designed',
                        type: 'unordered-list-item',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                    {
                        key: 'c16ds',
                        text: 'I did blabaaa',
                        type: 'unordered-list-item',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2019,
            startMonth: 'Jul',
            endYear: 2021,
            endMonth: 'Oct',
        },
        {
            id: '57879277-7cab-467d-be38-c3c1f2f21296',
            job_title: 'Full-stack Developer',
            employer: 'IDOM',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: '3g7ft',
                        text: 'I designed ',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2018,
            startMonth: 'Oct',
            endYear: 2019,
            endMonth: 'Apr',
        },
        {
            id: 'ea49954b-bfbe-443d-a33e-de589abb7375',
            job_title: 'Backend Developer',
            employer: 'Kakao',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: '2r28p',
                        text: 'I developed a NodeJS API',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2018,
            startMonth: 'Feb',
            endYear: 2018,
            endMonth: 'Apr',
        },
        {
            id: 'b12df12d-b0f9-4fda-ab7e-116da43a973a',
            job_title: 'Full-stack Developer',
            employer: 'Telefonica Startups',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: 'eh72g',
                        text: 'I implemented blabla.',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2017,
            startMonth: 'Oct',
            endYear: 2018,
            endMonth: 'Jan',
        },
    ] as EmploymentElement[],
    education: [
        {
            id: 'baa4f9e5-f66f-4244-99c3-1261a04e1b21',
            school: 'University of Twitter',
            degree: 'Bachelor of Software Engineering',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: 'ec0di',
                        text: '',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2013,
            startMonth: 'Sep',
            endYear: 2018,
            endMonth: 'Sep',
        },
        {
            id: 'aaa4f9e6-f66f-4244-99c3-1261a04e1b21',
            school: 'Blabla UNI',
            degree: 'Bachelor of Software Engineering',
            city: 'Seoul, Korea',
            description: {
                blocks: [
                    {
                        key: 'ec0di',
                        text: '',
                        type: 'unstyled',
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {},
                    },
                ],
                entityMap: {},
            },
            startYear: 2413,
            startMonth: 'Sep',
            endYear: 2418,
            endMonth: 'Sep',
        },
    ] as EducationElement[],
    websites_social_links: [
        {
            id: '812e8838-b0ef-451a-995d-01dc4e324fa0',
            label: 'github.com/cottonpup',
            link: 'github.com/cottonpup',
        },
        {
            id: 'd599b9d2-52fd-4752-9e63-e540d927a28c',
            label: 'linkedin.com/in/cottonpup',
            link: '',
        },
    ] as WebsiteSocialElement[],
    skills: [
        {
            id: '261c7883-398c-46a6-b4b7-0cd8dce8fe44',
            skill: 'Bootstrap',
        },
        {
            id: '99d2cf5c-9045-469e-b574-c0e8d25be221',
            skill: 'CSS3',
        },
        {
            id: '55bf6497-99ae-456c-9f6b-b5839d228d06',
            skill: 'Adaptability',
        },
        {
            id: 'bf4f57e7-76e6-4315-ad12-9c12d640595c',
            skill: 'Business Strategy',
        },
        {
            id: '4aa484ce-80ce-4442-a2cb-3cb6dda5c60d',
            skill: 'Customer Service',
        },
        {
            id: '72b3c735-be1a-456d-b7d8-104b8e3461b9',
            skill: 'High Attention to Detail',
        },
    ] as SkillsElement[],
    languages: [
        {
            id: 'ac8992eb-5441-4a6b-8085-a145ef72b36e',
            language: 'English',
            level: 'Highly proficient',
            proficiency: 80,
        },
        {
            id: '172a4def-1b82-493b-905f-89be9b39132b',
            language: 'Korean',
            level: 'Native speaker',
            proficiency: 0,
        },
    ] as LanguagesElement[],
};

export type CVData = typeof initialState;

export const reducer = (state: CVData = intialStateSampleCV, action: Action) => {
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
