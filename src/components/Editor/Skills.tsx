import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators, State } from '../../state';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../UI/InputText';
import Skill from '../UI/Skill';
import { SkillsElement } from '../../state/reducers/cvDataReducer';
import { useState } from 'react';

export function Skills() {
  const state = useSelector((state: State) => state.cvData);
  const dispatch = useDispatch();
  const { add_skills_data } = bindActionCreators(actionCreators, dispatch);
  const { update_skills_data } = bindActionCreators(actionCreators, dispatch);
  const [skillSuggestions, setSkillSuggestions] = useState([
    'Interpersonal Communication',
    'Complex Problem Solving',
    'Microsoft Office',
    'Public Speaking',
    'Critical thinking and problem solving',
    'Adaptability',
    'Customer Service Skills',
    'Analytical Skills',
    'Analytical Thinking Skills',
    'Data Analysis',
    'Interpersonal Communication Skills',
    'Excellent Customer Service Skills',
    'Ability to Learn Quickly',
    'Project Management Skills',
    'Critical Thinking Skills',
  ]);

  return (
    <>
      <Header>Skills</Header>
      <Paragraph>
        Choose 5 of the most important skills to show your talents! Make sure they match
        the keywords of the job listing if applying via an online system.
      </Paragraph>
      <div className="flex flex-wrap">
        {skillSuggestions.map((skill, i) => {
          return <Skill key={skill}>{skill}</Skill>;
        })}
      </div>
      {state.skills.map((item: SkillsElement) => {
        return (
          <div
            className={`my-4 ${
              state.skills.length > 0 ? '' : 'hidden'
            } border-[1px] border-[#e7eaf4]`}
            key={item.id}
          >
            <div className="flex justify-between items-center py-[15px] px-[20px] rounded-[4px] h-[70px]">
              <div className=" text-sm font-semibold">(Not specified)</div>

              <div className="rotate-90 fill-[#9fa6bb]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
                </svg>
              </div>
            </div>
            <div className="px-[20px] pt-[4px] pb-[24px]">
              <div className="flex flex-[0_0_calc(50%_-_20px)] mb-[20px]">
                <InputText
                  placeholder=""
                  label="Skill"
                  reference="skill"
                  updateData={update_skills_data}
                  group_name={'skills'}
                  identifier={item.id}
                />
              </div>
            </div>
          </div>
        );
      })}
      <button
        className={`flex items-center py-[6px] px-[14px] text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10 mt-5`}
        onClick={() => add_skills_data(uuidv4())}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
        </svg>
        <p className="text-left">Add skill</p>
      </button>
    </>
  );
}
