import Title from '../UI/Title';
import ProgressBar from '../UI/ProgressBar';
import PersonalDetail from './PersonalDetail';
import { EmploymentHistory } from './EmploymentHistory';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Education } from './Education';
import { WebsiteSocialLink } from './WebsiteSocialLink';
import { Skills } from './Skills';
import { Languages } from './Languages';

function Editor() {
  return (
    <section className="flex-1 p-[48px] max-w-full xl:w-2/4">
      <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
        <section>
          <Title>Simple Resume</Title>
          <ProgressBar />
          <PersonalDetail />
        </section>
        <section>
          <ProfessionalSummary />
        </section>
        <section>
          <EmploymentHistory />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <WebsiteSocialLink />
        </section>
        <section className="flex flex-col">
          <Skills />
        </section>
        <section>
          <Languages />
        </section>
      </div>
    </section>
  );
}

export default Editor;
