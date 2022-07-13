import { AutoResizedPage } from "./AutoResizedPage";
import { usePagination } from "./hooks/usePagination";
import { PaginatedColumn } from "./PaginatedColumn";
import { PersonalDetailPreview } from "./content/PersonalDetailPreview";
import { ProfessionalSummaryPreview } from "./content/ProfessionalSummaryPreview";
import { EmploymentHistoryPreview } from "./content/EmploymentHistoryPreview";
import { EducationPreview } from "./content/EducationPreview";
import { AdditionalPersonalDetailPreview } from "./content/AdditionalPersonalDetailPreview";
import { WebsiteSocialLinkPreview } from "./content/WebsiteSocialLinkPreview";
import { SkillsPreview } from "./content/SkillsPreview";
import { LanguagePreview } from "./content/LanguagePreview";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

interface Props {
  isFullPreview: boolean;
  setIsFullPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PagesView(props: Props) {
  const [pagination, updatePagination] = usePagination();
  const pageId = "some-id";

  const layoutClassName = props.isFullPreview
    ? "bg-[#495163] h-screen w-[100%] flex flex-col z-0"
    : "xl:w-1/2 xl:visible invisible bg-slate-500 fixed right-0 top-0 h-screen flex flex-col items-center";

  return (
    <div className={layoutClassName}>
      <Header
        isFullPreview={props.isFullPreview}
        setIsFullPreview={props.setIsFullPreview}
        pagination={pagination}
        updatePagination={updatePagination}
      />

      <AutoResizedPage
        id={pageId}
        isFullPreview={props.isFullPreview}
        setIsFullPreview={props.setIsFullPreview}
      >
        <PaginatedColumn
          id="left-column"
          pageId={pageId}
          className="flex-[3_3_0%] mr-5"
          pagination={pagination}
          updatePagination={updatePagination}
        >
          <PersonalDetailPreview />
          <ProfessionalSummaryPreview />
          <EmploymentHistoryPreview />
          <EducationPreview />
        </PaginatedColumn>

        <PaginatedColumn
          id="right-column"
          pageId={pageId}
          className="flex-1"
          pagination={pagination}
          updatePagination={updatePagination}
        >
          <AdditionalPersonalDetailPreview />
          <WebsiteSocialLinkPreview />
          <SkillsPreview />
          <LanguagePreview />
        </PaginatedColumn>
      </AutoResizedPage>

      <Footer
        isFullPreview={props.isFullPreview}
        pagination={pagination}
        updatePagination={updatePagination}
      />
    </div>
  );
}
