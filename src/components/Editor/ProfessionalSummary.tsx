import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import RichTextEditor from '../UI/RichTextEditor/RichTextEditor';
import { useDispatch } from 'react-redux';

export function ProfessionalSummary() {
  const dispatch = useDispatch();
  const { update_professional_summary_data } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return (
    <>
      <Header>Professional Summary</Header>
      <Paragraph>
        Write 2-4 short & energetic sentences to interest the reader! Mention your role,
        experience & most importantly - your biggest achievements, best qualities and
        skills.
      </Paragraph>
      <RichTextEditor
        updateData={update_professional_summary_data}
        placeholder="e.g. Passionate science teacher with 8+ years of experience and a track record of ..."
      />
    </>
  );
}
