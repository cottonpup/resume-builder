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

function Editor() {
  const [shouldFixHeader, setShouldFixHeader] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const TITLE_HEIGHT_PX = ref.current!.getBoundingClientRect().height;

    function scrollThenFix() {
      console.log(TITLE_HEIGHT_PX, window.screenTop);
      if (window.scrollY > TITLE_HEIGHT_PX && !shouldFixHeader) {
        console.log('FIX HEADER!!');
        setShouldFixHeader(true);
      } else if (window.scrollY <= TITLE_HEIGHT_PX && shouldFixHeader) {
        console.log('UNFIX HEADER!!');
        setShouldFixHeader(false);
      }
    }

    window.addEventListener('scroll', scrollThenFix);
    return () => {
      window.removeEventListener('scroll', scrollThenFix);
    };
  }, [shouldFixHeader]);

  return (
    <section className="flex-1 p-[48px] max-w-full xl:w-2/4">
      <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
        <section ref={ref}>
          <Title>Simple Resume</Title>
          <section
            className={`${
              shouldFixHeader
                ? 'fixed top-0 w-[50%] px-[48px] left-0 pt-[20px] bg-white z-10'
                : ''
            }`}
          >
            <ProgressBar />
          </section>
        </section>
        <section>
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
