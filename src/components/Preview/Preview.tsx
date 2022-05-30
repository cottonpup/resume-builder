import './PreviewEditor.css';
import { PreviewController } from './PreviewController';
import { PreviewView } from './PreviewView';
import { PersonalDetailPreview } from './PersonalDetailPreview';
import { ProfessionalSummaryPreview } from './ProfessionalSummaryPreview';
import { EmploymentHistoryPreview } from './EmploymentHistoryPreview';
import { EducationPreview } from './EducationPreview';
import { AdditionalPersonalDetailPreview } from './AdditionalPersonalDetailPreview';
import { PreviewButtonGroup } from './PreviewButtonGroup';
import { WebsiteSocialLinkPreview } from './WebsiteSocialLinkPreview';
import { SkillsPreview } from './SkillsPreview';
import { LanguagePreview } from './LanguagePreview';

const Preview = () => {
  return (
    <div className="xl:w-1/2 xl:visible invisible bg-slate-500 fixed right-0 top-0 h-screen flex flex-col items-center">
      <PreviewController />
      <PreviewView>
        <PersonalDetailPreview />
        <section className="flex mt-4">
          <div className={`flex-[3_3_0%] mr-5`}>
            <ProfessionalSummaryPreview />
            <EmploymentHistoryPreview />
            <EducationPreview />
          </div>
          <div className="flex-1">
            <AdditionalPersonalDetailPreview />
            <WebsiteSocialLinkPreview />
            <SkillsPreview />
            <LanguagePreview />
          </div>
        </section>
      </PreviewView>
      <PreviewButtonGroup />
    </div>
  );
};

export default Preview;
