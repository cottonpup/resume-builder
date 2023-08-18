import { State } from '../../../state';
import { useSelector } from 'react-redux';
import { convertFromRaw, Editor, EditorState } from 'draft-js';

import './DraftJSStyles.css';

export function EducationPreview() {
    const state = useSelector((state: State) => state.cvData);

    return (
        <section id={'education'}>
            {state.education.map((item, i) => (
                <div key={item.id}>
                    {i === 0 && (
                        <div className="flex items-center mt-2 " key={item.id}>
                            <i className="fa-solid fa-graduation-cap mr-1"></i>
                            <h2 className="text-left text-[17px] font font-bold">
                                Education
                            </h2>
                        </div>
                    )}
                    <h3
                        className={`text-left text-[15px] font-medium ${
                            i > 0 ? 'mt-2' : ''
                        }`}
                    >
                        {`
              ${item.school ? item.school : ''}
              ${item.degree && item.school ? `at ${item.degree}` : item.degree}${
                            (item.degree || item.school) && item.city
                                ? `, ${item.city}`
                                : item.city
                        }
              `}
                    </h3>
                    <p className="text-left text-[12px]">
                        {`${item.startMonth ? `${item.startMonth} ` : ''}`}
                        {`${item.startYear ? item.startYear : ''}`}
                        {`${item.startYear && item.endYear ? ' - ' : ''}`}
                        {`${item.endMonth ? `${item.endMonth} ` : ''}`}
                        {`${item.endYear ? item.endYear : ''}`}
                    </p>
                    <Editor
                        editorState={EditorState.createWithContent(
                            convertFromRaw(item.description),
                        )}
                        onChange={() => {}}
                        readOnly
                    />
                </div>
            ))}
        </section>
    );
}
