import { State } from '../../../state';
import { useSelector } from 'react-redux';
import { convertFromRaw, Editor, EditorState } from 'draft-js';

import './DraftJSStyles.css';

export function ProfessionalSummaryPreview() {
    const state = useSelector((state: State) => state.cvData);

    return (
        <section
            className={`${
                state.professional_summary.blocks[0].text ? 'block' : 'hidden'
            } professional_summary`}
            id={'professional_summary'}
        >
            <div className={`flex items-center mt-4`}>
                <i className="fa-solid fa-user mr-1"></i>
                <h2 className="text-left text-[17px] font font-bold ">Profile</h2>
            </div>

            <Editor
                editorState={EditorState.createWithContent(
                    convertFromRaw(state.professional_summary),
                )}
                onChange={() => {}}
                readOnly
            />
        </section>
    );
}
