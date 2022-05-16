import type { EditorState } from 'draft-js';
import { ChangeEvent, useState } from 'react';
import DraftEditor from '../UI/DraftEditor';
import Header from '../UI/Header';
import InputFile from '../UI/InputFile';
import InputText from '../UI/InputText';
import Paragraph from '../UI/Paragraph';
import Skill from '../UI/Skill';
import TextAddition from '../UI/TextAddition';
import Title from '../UI/Title';
import ProgressBar from './ProgressBar';

interface Props {
  setFileItem: (args: { url: string | undefined; isUploaded: boolean }) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fileItem: { url?: string; isUploaded: boolean };
  progressPercent: number;
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

function Editor(props: Props) {
  const [hideDetail, setHideDetail] = useState(true);

  return (
    <section className="flex-1 p-[48px] max-w-full xl:w-2/4">
      <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
        <Title>Simple Resume</Title>
        <ProgressBar progressPercent={props.progressPercent} />
        <Header>Personal Details</Header>
        <div className="mb-6 flex mt-4">
          <InputText
            placeholder="e.g Teacher"
            label="Wanted Job Title"
            reference="job_title"
            handleInputChange={props.handleInputChange}
          />
          <div className="mr-10"></div>
          <InputFile setFileItem={props.setFileItem} fileItem={props.fileItem} />
        </div>
        <div className="mb-6 flex">
          <InputText
            placeholder=""
            label="First Name"
            reference="first_name"
            handleInputChange={props.handleInputChange}
          />
          <div className="mr-10"></div>
          <InputText
            placeholder=""
            label="Last Name"
            reference="last_name"
            handleInputChange={props.handleInputChange}
          />
        </div>
        <div className="mb-6 flex">
          <InputText
            placeholder=""
            label="Email"
            reference="email"
            handleInputChange={props.handleInputChange}
          />
          <div className="mr-10"></div>
          <InputText
            placeholder=""
            label="Phone"
            reference="phone"
            handleInputChange={props.handleInputChange}
          />
        </div>

        <section
          className={`${
            hideDetail ? `opacity-0 h-0 overflow-hidden` : `opacity-100 h-full block`
          } transition-all`}
        >
          <div className="mb-6 flex">
            <InputText
              placeholder=""
              label="Country"
              reference="country"
              handleInputChange={props.handleInputChange}
            />
            <div className="mr-10"></div>
            <InputText
              placeholder=""
              label="City"
              reference="city"
              handleInputChange={props.handleInputChange}
            />
          </div>
          <div className="mb-6 flex">
            <InputText
              placeholder=""
              label="Address"
              reference="address"
              handleInputChange={props.handleInputChange}
            />
            <div className="mr-10"></div>
            <InputText
              placeholder=""
              label="Postal Code"
              reference="postal_code"
              handleInputChange={props.handleInputChange}
            />
          </div>
          <div className="mb-6 flex">
            <InputText
              placeholder=""
              label="Driving License"
              reference="driving_license"
              handleInputChange={props.handleInputChange}
            />
            <div className="mr-10"></div>
            <InputText
              placeholder=""
              label="Nationality"
              reference="nationality"
              handleInputChange={props.handleInputChange}
            />
          </div>
          <div className="mb-6 flex">
            <InputText
              placeholder=""
              label="Place Of Birth"
              reference="place_of_birth"
              handleInputChange={props.handleInputChange}
            />
            <div className="mr-10"></div>
            <InputText
              placeholder=""
              label="Date Of Birth"
              reference="date_of_birth"
              handleInputChange={props.handleInputChange}
            />
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
            Write 2-4 short & energetic sentences to interest the reader! Mention your
            role, experience & most importantly - your biggest achievements, best
            qualities and skills.
          </Paragraph>
          <DraftEditor
            editorState={props.editorState}
            setEditorState={props.setEditorState}
          />
        </section>
        <section className="mb-10">
          <Header>Employment History</Header>
          <Paragraph>
            Show your relevant experience (last 10 years). Use bullet points to note your
            achievements, if possible - use numbers/facts (Achieved X, measured by Y, by
            doing Z).
          </Paragraph>
          <TextAddition>Add employment</TextAddition>
        </section>

        <section className="mb-10">
          <Header>Education</Header>
          <Paragraph>
            A varied education on your resume sums up the value that your learnings and
            background will bring to job.
          </Paragraph>
          <TextAddition>Add education</TextAddition>
        </section>
        <section className="mb-10">
          <Header>Website & Social Links</Header>
          <Paragraph>
            You can add links to websites you want hiring managers to see! Perhaps It will
            be a link to your portfolio, LinkedIn profile, or personal website
          </Paragraph>
          <TextAddition>Add link</TextAddition>
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
          <TextAddition>Add skill</TextAddition>
        </section>
        <section>
          <Header>Languages</Header>
          <TextAddition>Add languages</TextAddition>
        </section>
      </div>
    </section>
  );
}

export default Editor;
