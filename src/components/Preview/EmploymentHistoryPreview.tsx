import { State } from '../../state';
import { useSelector } from 'react-redux';
import { convertFromRaw, Editor, EditorState } from 'draft-js';

export function EmploymentHistoryPreview() {
  const state = useSelector((state: State) => state.cvData);
  return (
    <section id={'preview'}>
      {state.employment_history.length > 0 &&
        state.employment_history.map((item, i) => (
          <div key={item.id}>
            {i === 0 && (
              <div className="flex items-center mt-2">
                <i className="fa-solid fa-briefcase mr-1"></i>
                <h2 className="text-left text-[17px] font font-bold">
                  Employment History
                </h2>
              </div>
            )}
            <h3 className={`text-left text-[15px] font-medium ${i > 0 ? 'mt-2' : ''}`}>
              {`
              ${item.job_title ? item.job_title : ''}
              ${item.employer && item.job_title ? `at ${item.employer}` : item.employer}${
                (item.employer || item.job_title) && item.city
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
            {item.description.blocks[0].text && (
              <Editor
                editorState={EditorState.createWithContent(
                  convertFromRaw(item.description),
                )}
                onChange={() => {}}
                readOnly
              />
            )}
          </div>
        ))}
    </section>
  );
}
