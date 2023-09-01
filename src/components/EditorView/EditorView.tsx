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

    // NOTE: 플로팅 프로그래스 헤더 관련한 코드임.
    useEffect(() => {
        //  NOTE: Simple Resume 랑 Progress bar를 지나면 프로그래스 헤더를 띄어라!
        const TITLE_HEIGHT_PX = ref.current!.getBoundingClientRect().height;

        function scrollThenFix() {
            if (window.scrollY > TITLE_HEIGHT_PX && !shouldFixHeader) {
                setShouldFixHeader(true);
            } else if (window.scrollY <= TITLE_HEIGHT_PX && shouldFixHeader) {
                setShouldFixHeader(false);
            }
        }

        window.addEventListener('scroll', scrollThenFix);
        return () => {
            window.removeEventListener('scroll', scrollThenFix);
        };
    }, [shouldFixHeader]);

    return (
        // NOTE: If It's full preview, then hide the progress bar
        <section
            className={`flex-1 p-[48px] max-w-full xl:w-2/4 ${
                props.isFullPreview ? 'hidden' : ''
            }`}
        >
            <div className="max-w-[760px] m-auto xl:m-0 xl:max-w-full">
                <section ref={ref}>
                    <Title>Simple Resume</Title>
                    <section
                        // NOTE: FLOATING HEADER
                        // FIXME: 에디터가 풀 스크린일 때, 플로팅 헤더가 없어지지 않는다.
                        className={`${
                            shouldFixHeader
                                ? 'fixed top-0 w-[50%] px-[48px] left-0 pt-[20px] bg-white z-10'
                                : ''
                        }`}
                    >
                        <ProgressBar />
                    </section>
                </section>
                {/* <section> */}
                <PersonalDetail />
                {/* </section> */}
                {/* <section> */}
                <ProfessionalSummary />
                {/* </section> */}
                {/* <section> */}
                <EmploymentHistory />
                {/* </section> */}
                {/* <section> */}
                <Education />
                {/* </section> */}
                {/* <section> */}
                <WebsiteSocialLink />
                {/* </section> */}
                {/* <section className="flex flex-col"> */}
                <Skills />
                {/* </section> */}
                {/* <section> */}
                <Languages />
                {/* </section> */}
            </div>
        </section>
    );
}

export default EditorView;
