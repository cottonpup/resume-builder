import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators, State } from '../../state';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../UI/Inputs/InputText';
import Skill from '../UI/Skill';
import { SkillsElement } from '../../state/reducers/cvDataReducer';
import { useEffect, useState } from 'react';
import { AdditionWrapper } from '../UI/Inputs/AdditionWrapper';
import { defaultSkillSuggestions } from './defaultSkillSuggestions';

export function Skills() {
    const state = useSelector((state: State) => state.cvData);
    const dispatch = useDispatch();
    const { add_skills_data } = bindActionCreators(actionCreators, dispatch);
    const { update_skills_data } = bindActionCreators(actionCreators, dispatch);
    const { move_skills_data } = bindActionCreators(actionCreators, dispatch);
    const { delete_skills_data } = bindActionCreators(actionCreators, dispatch);
    const [draggingIndex, setDraggingIndex] = useState<number | undefined>(undefined);
    const [skillSuggestions, setSkillSuggestions] = useState(defaultSkillSuggestions);

    const shuffle_suggestions = () => {
        Array.from(new Set(skillSuggestions)).sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        // NOTE: 화살표 함수로 안하면 setState를 안하면 오류가 뜸.
        // 기존 상태를 참조하는 의존성이 생기면 dependency array에 넣어줘야 한다.
        // 따라서 화살표 함수로 하지 않고 그냥 함수로 따로 빼서 호출하자.
        // setSkillSuggestions((skillSuggestions) =>
        shuffle_suggestions();
        // );
    }, [skillSuggestions.length]);

    return (
        <section className="flex flex-col">
            <Header>Skills</Header>
            <Paragraph>
                Choose 5 of the most important skills to show your talents! Make sure they
                match the keywords of the job listing if applying via an online system.
            </Paragraph>
            <div className="flex flex-wrap">
                {skillSuggestions.map((skill, i) => {
                    return (
                        i < 5 && (
                            <div
                                key={skill}
                                onClick={() => {
                                    setSkillSuggestions(
                                        skillSuggestions.filter((ele) => ele !== skill),
                                    );
                                    let identifier = uuidv4();
                                    add_skills_data(identifier);
                                    update_skills_data({
                                        id: identifier,
                                        key: 'skill',
                                        value: skill,
                                    });
                                }}
                            >
                                <Skill>{skill}</Skill>
                            </div>
                        )
                    );
                })}
            </div>
            <section onDragOver={(e) => e.preventDefault()}>
                {state.skills.map((item: SkillsElement, i: number) => {
                    return (
                        <AdditionWrapper
                            moveItem={move_skills_data}
                            index={i}
                            draggingIndex={draggingIndex}
                            setDraggingIndex={setDraggingIndex}
                            target={state.skills}
                            id={item.id}
                            titleText={item.skill}
                            key={item.id}
                            deleteItem={delete_skills_data}
                        >
                            <div className="px-[20px] pt-[4px] pb-[24px]">
                                <div className="flex flex-[0_0_calc(50%_-_20px)] mb-[20px]">
                                    <InputText
                                        placeholder=""
                                        label="Skill"
                                        reference="skill"
                                        value={item.skill}
                                        updateData={update_skills_data}
                                        group_name={'skills'}
                                        identifier={item.id}
                                    />
                                </div>
                            </div>
                        </AdditionWrapper>
                    );
                })}
            </section>
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
        </section>
    );
}
