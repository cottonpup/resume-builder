import {
  DispatchUpdateEducation,
  DispatchUpdateEmploymentHistory,
} from '../../../state/action-creators';
import {
  EmploymentElement,
  EducationElement,
} from '../../../state/reducers/cvDataReducer';
import { DateInput } from './DateInput';

interface Props {
  updateData: DispatchUpdateEmploymentHistory | DispatchUpdateEducation;
  item: EmploymentElement | EducationElement;
}

export function RangeDateInput(props: Props) {
  return (
    <div className="flex-[0_0_calc(50%_-_20px)]">
      <label className="flex text-sm text-slate-500 mb-1 text-left">
        Start & End Date
      </label>
      <div className="flex">
        <DateInput
          month={props.item.startMonth}
          year={props.item.startYear}
          onMonthChange={(month) => {
            props.updateData({
              id: props.item.id,
              key: 'startMonth',
              value: month,
            });
          }}
          onYearChange={(year) => {
            props.updateData({
              id: props.item.id,
              key: 'startYear',
              value: year,
            });
          }}
        />

        <DateInput
          month={props.item.endMonth}
          year={props.item.endYear}
          onMonthChange={(month) => {
            props.updateData({
              id: props.item.id,
              key: 'endMonth',
              value: month,
            });
          }}
          onYearChange={(year) => {
            props.updateData({
              id: props.item.id,
              key: 'endYear',
              value: year,
            });
          }}
        />
      </div>
    </div>
  );
}
