import { useState } from 'react';
import Addition from '../UI/Addition';
import Header from '../UI/Header';
import InputFile from '../UI/InputFile';
import InputText from '../UI/InputText';
import Paragraph from '../UI/Paragraph';
import Skill from '../UI/Skill';
import Title from '../UI/Title';
import ProgressBar from './ProgressBar';

const Editor: React.FC = () => {
  const [hideDetail, setHideDetail] = useState(true);
  return (
    <section className="w-1/2 p-12">
      <Title>Simple Resume</Title>
      <ProgressBar />
      <Header>Personal Details</Header>
      <div className="mb-6 flex mt-4">
        <div className="mr-10">
          <InputText placeholder="e.g Teacher" label="Wanted Job Title" />
        </div>
        <InputFile />
      </div>
      <div className="mb-6 flex">
        <div className="mr-10">
          <InputText placeholder="" label="First Name" />
        </div>
        <InputText placeholder="" label="Last Name" />
      </div>
      <div className="mb-6 flex">
        <div className="mr-10">
          <InputText placeholder="" label="Email" />
        </div>
        <InputText placeholder="" label="Phone" />
      </div>

      <section
        className={`${
          hideDetail ? `opacity-0 h-0 overflow-hidden` : `opacity-100 h-full block`
        } transition-all`}
      >
        <div className="mb-6 flex">
          <div className="mr-10">
            <InputText placeholder="" label="Country" />
          </div>
          <InputText placeholder="" label="City" />
        </div>
        <div className="mb-6 flex">
          <div className="mr-10">
            <InputText placeholder="" label="Address" />
          </div>
          <InputText placeholder="" label="Postal Code" />
        </div>
        <div className="mb-6 flex">
          <div className="mr-10">
            <InputText placeholder="" label="Driving License" />
          </div>
          <InputText placeholder="" label="Nationality" />
        </div>
        <div className="mb-6 flex">
          <div className="mr-10">
            <InputText placeholder="" label="Place Of Birth" />
          </div>
          <InputText placeholder="" label="Date Of Birth" />
        </div>
      </section>
      <div
        className="flex items-center text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10 cursor-pointer"
        onClick={() => setHideDetail(!hideDetail)}
      >
        <p className="text-left">
          {hideDetail ? `Edit additional details` : `Hide additional details`}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          data-open="false"
          className={hideDetail ? `rotate-90` : `rotate-[270deg]`}
        >
          <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
        </svg>
      </div>
      <section className="mb-10">
        <Header>Professional Summary</Header>
        <Paragraph>
          Write 2-4 short & energetic sentences to interest the reader! Mention your role,
          experience & most importantly - your biggest achievements, best qualities and
          skills.
        </Paragraph>
        <textarea
          id="story"
          name="story"
          rows={10}
          cols={71}
          className="resize-none bg-slate-100 mt-4 rounded-sm"
        ></textarea>
      </section>
      <section className="mb-10">
        <Header>Employment History</Header>
        <Paragraph>
          Show your relevant experience (last 10 years). Use bullet points to note your
          achievements, if possible - use numbers/facts (Achieved X, measured by Y, by
          doing Z).
        </Paragraph>
        <Addition>Add employment</Addition>
      </section>
      <section className="mb-10">
        <Header>Education</Header>
        <Paragraph>
          A varied education on your resume sums up the value that your learnings and
          background will bring to job.
        </Paragraph>
        <Addition>Add education</Addition>
      </section>
      <section className="mb-10">
        <Header>Website & Social Links</Header>
        <Paragraph>
          You can add links to websites you want hiring managers to see! Perhaps It will
          be a link to your portfolio, LinkedIn profile, or personal website
        </Paragraph>
        <Addition>Add link</Addition>
      </section>
      <section className="mb-10">
        <Header>Skills</Header>
        <Paragraph>
          Choose 5 of the most important skills to show your talents! Make sure they match
          the keywords of the job listing if applying via an online system.
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
        <Addition>Add skill</Addition>
      </section>
    </section>
  );
};

export default Editor;
