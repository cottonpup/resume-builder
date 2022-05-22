import { EditorState } from 'draft-js';
import { useState } from 'react';
import DraftEditor from '../UI/DraftEditor';
import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import Skill from '../UI/Skill';
import TextAddition from '../UI/TextAddition';
import Title from '../UI/Title';
import ProgressBar from './ProgressBar';
import PersonalDetail from './PersonalDetail';
import { actionCreators, State } from '../../state';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

function Editor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const state = useSelector((state: State) => state.cvData);
  const dispatch = useDispatch();
  const { add_employment_history_data } = bindActionCreators(actionCreators, dispatch);
  const { update_employment_history_data } = bindActionCreators(actionCreators, dispatch);
  const { add_education_data } = bindActionCreators(actionCreators, dispatch);
  const { update_education_data } = bindActionCreators(actionCreators, dispatch);

  return (
    <section className="flex-1 p-[48px] max-w-full xl:w-2/4">
      <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
        <Title>Simple Resume</Title>
        <ProgressBar />
        <PersonalDetail />
        <section className="mb-10">
          <Header>Professional Summary</Header>
          <Paragraph>
            Write 2-4 short & energetic sentences to interest the reader! Mention your
            role, experience & most importantly - your biggest achievements, best
            qualities and skills.
          </Paragraph>
          <DraftEditor editorState={editorState} setEditorState={setEditorState} />
        </section>
        <section className="mb-10">
          <Header>Employment History</Header>
          <Paragraph>
            Show your relevant experience (last 10 years). Use bullet points to note your
            achievements, if possible - use numbers/facts (Achieved X, measured by Y, by
            doing Z).
          </Paragraph>
          <TextAddition
            listItems={state.employment_history}
            addData={add_employment_history_data}
            group_name={'employment_history'}
            updateData={update_employment_history_data}
          >
            Add employment
          </TextAddition>
        </section>

        <section className="mb-10">
          <Header>Education</Header>
          <Paragraph>
            A varied education on your resume sums up the value that your learnings and
            background will bring to job.
          </Paragraph>
          <TextAddition
            listItems={state.education}
            addData={add_education_data}
            group_name={'education'}
            updateData={update_education_data}
          >
            Add education
          </TextAddition>
        </section>
        <section className="mb-10">
          <Header>Website & Social Links</Header>
          <Paragraph>
            You can add links to websites you want hiring managers to see! Perhaps It will
            be a link to your portfolio, LinkedIn profile, or personal website
          </Paragraph>
          {/* <TextAddition listItems={state.websites_social_links}>Add link</TextAddition> */}
        </section>
        <section className=" flex flex-col">
          <Header>Skills</Header>
          <Paragraph>
            Choose 5 of the most important skills to show your talents! Make sure they
            match the keywords of the job listing if applying via an online system.
          </Paragraph>
          <div className="flex flex-wrap mt-3">
            <Skill>Interpersonal Communication</Skill>
            <Skill>Complex Problem Solving</Skill>
            <Skill>Microsoft Office</Skill>
            <Skill>Public Speaking</Skill>
            <Skill>Critical thinking and problem solving</Skill>
            <Skill>Adaptability</Skill>
            <Skill>Customer Service Skills</Skill>
            <Skill>Analytical Skills</Skill>
            <Skill>Analytical Thinking Skills</Skill>
            <Skill>Data Analysis</Skill>
          </div>
          {/* <TextAddition listItems={state.skills}>Add skill</TextAddition> */}
        </section>
        <section>
          <Header>Languages</Header>
          {/* <TextAddition listItems={state.language}>Add languages</TextAddition> */}
        </section>
      </div>
    </section>
  );
}

export default Editor;
