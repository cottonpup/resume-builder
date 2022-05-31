import { AdditionalPersonalDetailPreview } from '../Preview/AdditionalPersonalDetailPreview';
import { EducationPreview } from '../Preview/EducationPreview';
import { EmploymentHistoryPreview } from '../Preview/EmploymentHistoryPreview';
import { LanguagePreview } from '../Preview/LanguagePreview';
import { PersonalDetailPreview } from '../Preview/PersonalDetailPreview';
import { PreviewWrapper } from '../Preview/PreviewWrapper';
import { ProfessionalSummaryPreview } from '../Preview/ProfessionalSummaryPreview';
import { SkillsPreview } from '../Preview/SkillsPreview';
import { WebsiteSocialLinkPreview } from '../Preview/WebsiteSocialLinkPreview';
import { FullScreenController } from './FullScreenController';
import { NavBar } from './NavBar';
interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function FullScreen(props: Props) {
  return (
    <div className={`bg-[#495163] h-screen fixed w-[100%] flex flex-col z-0`}>
      <NavBar isFullScreen={props.isFullScreen} setIsFullScreen={props.setIsFullScreen} />
      {/* <div className=" overflow-y-auto"> */}
      <PreviewWrapper
        isFullScreen={props.isFullScreen}
        setIsFullScreen={props.setIsFullScreen}
      >
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
      </PreviewWrapper>
      {/* </div> */}
      <FullScreenController />
    </div>
  );
}
