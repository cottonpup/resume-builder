import { State } from '../../state';
import { useSelector } from 'react-redux';
import { convertFromRaw, Editor, EditorState } from 'draft-js';

export function ProfessionalSummaryPreview() {
  const state = useSelector((state: State) => state.cvData);

  return (
    <section
      className={`${state.professional_summary.blocks[0].text ? 'block' : 'hidden'} `}
      id={'preview'}
    >
      <div className={`flex items-center`}>
        <i className="fa-solid fa-user mr-1"></i>
        <h2 className="text-left text-[17px] font font-bold">Profile</h2>
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
