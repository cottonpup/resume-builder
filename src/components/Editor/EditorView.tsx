import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import Skill from '../UI/Skill';
import Title from '../UI/Title';
import ProgressBar from '../UI/ProgressBar';
import PersonalDetail from './PersonalDetail';
// import { actionCreators, State } from '../../state';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { EmploymentHistory } from './EmploymentHistory';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Education } from './Education';

function Editor() {
  // const state = useSelector((state: State) => state.cvData);
  // const dispatch = useDispatch();

  return (
    <section className="flex-1 p-[48px] max-w-full xl:w-2/4">
      <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
        <section className="mb-10">
          <Title>Simple Resume</Title>
          <ProgressBar />
          <PersonalDetail />
        </section>
        <section className="mb-10">
          <ProfessionalSummary />
        </section>
        <section className="mb-10">
          <EmploymentHistory />
        </section>
        <section className="mb-10">
          <Education />
        </section>
        <section className="mb-10">
          <Header>Website & Social Links</Header>
          <Paragraph>
            You can add links to websites you want hiring managers to see! Perhaps It will
            be a link to your portfolio, LinkedIn profile, or personal website
          </Paragraph>
          {/* <TextAddition listItems={state.websites_social_links}>Add link</TextAddition> */}
        </section>
        <section className="flex flex-col mb-10">
          <Header>Skills</Header>
          <Paragraph>
            Choose 5 of the most important skills to show your talents! Make sure they
            match the keywords of the job listing if applying via an online system.
          </Paragraph>
          <div className="flex flex-wrap">
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
