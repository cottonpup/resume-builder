import Title from '../UI/Title';
import { ProgressBar } from '../UI/ProgressBar';
import PersonalDetail from './PersonalDetail';
import { EmploymentHistory } from './EmploymentHistory';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Education } from './Education';
import { WebsiteSocialLink } from './WebsiteSocialLink';
import { Skills } from './Skills';
import { Languages } from './Languages';
import { useEffect, useRef, useState } from 'react';
interface Props {
  isFullPreview: boolean;
}

function EditorView(props: Props) {
  const [shouldFixHeader, setShouldFixHeader] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title 까지의 길이
    const TITLE_HEIGHT_PX = ref.current!.getBoundingClientRect().height;

    function scrollThenFix() {
      // 윈도우 스크롤이 타이틀을 지나면 && shouldFixHeader 가 false 일 때
      if (window.scrollY > TITLE_HEIGHT_PX) {
        setShouldFixHeader(true);
      } else if (window.scrollY <= TITLE_HEIGHT_PX) {
        setShouldFixHeader(false);
      }
    }

    window.addEventListener('scroll', scrollThenFix);
    return () => {
      window.removeEventListener('scroll', scrollThenFix);
    };
  }, [shouldFixHeader]);

  return (
    <section
      className={`flex-1 p-[48px] max-w-full xl:w-2/4 ${
        props.isFullPreview ? 'hidden' : ''
      }`}
    >
      <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
        <section ref={ref}>
          <Title>Simple Resume</Title>
          <section
            className={`${
              shouldFixHeader
                ? `fixed top-0 xl:w-[50%] xl:left-0 w-[760px] xl:translate-x-[0%] xl:px-[48px]  left-[50%] -translate-x-[50%] pt-[20px] bg-white z-10`
                : ''
            }`}
          >
            <ProgressBar />
          </section>
        </section>
        <PersonalDetail />
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
        <WebsiteSocialLink />
        <Skills />
        <Languages />
      </div>
    </section>
  );
}

export default EditorView;
