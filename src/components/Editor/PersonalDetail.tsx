import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import Header from '../UI/Header';
import InputFile from '../UI/InputFile';
import InputText from '../UI/InputText';

function PersonalDetail() {
  const [hideDetail, setHideDetail] = useState(true);

  const dispatch = useDispatch();
  const { update_personal_detail_data } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <Header>Personal Details</Header>
      <div className="mb-6 flex mt-4">
        <InputText
          placeholder="e.g Teacher"
          label="Wanted Job Title"
          reference="job_title"
          updateData={update_personal_detail_data}
        />
        <div className="mr-10"></div>
        <InputFile />
      </div>
      <div className="mb-6 flex">
        <InputText
          placeholder=""
          label="First Name"
          reference="first_name"
          updateData={update_personal_detail_data}
        />
        <div className="mr-10"></div>
        <InputText
          placeholder=""
          label="Last Name"
          reference="last_name"
          updateData={update_personal_detail_data}
        />
      </div>
      <div className="mb-6 flex">
        <InputText
          placeholder=""
          label="Email"
          reference="email"
          updateData={update_personal_detail_data}
        />
        <div className="mr-10"></div>
        <InputText
          placeholder=""
          label="Phone"
          reference="phone"
          updateData={update_personal_detail_data}
        />
      </div>

      <section
        className={`${
          hideDetail ? `opacity-0 h-0 overflow-hidden` : `opacity-100 h-full block`
        } transition-all`}
      >
        <div className="mb-6 flex">
          <InputText
            placeholder=""
            label="Country"
            reference="country"
            updateData={update_personal_detail_data}
          />
          <div className="mr-10"></div>
          <InputText
            placeholder=""
            label="City"
            reference="city"
            updateData={update_personal_detail_data}
          />
        </div>
        <div className="mb-6 flex">
          <InputText
            placeholder=""
            label="Address"
            reference="address"
            updateData={update_personal_detail_data}
          />
          <div className="mr-10"></div>
          <InputText
            placeholder=""
            label="Postal Code"
            reference="postal_code"
            updateData={update_personal_detail_data}
          />
        </div>
        <div className="mb-6 flex">
          <InputText
            placeholder=""
            label="Driving License"
            reference="driving_license"
            updateData={update_personal_detail_data}
          />
          <div className="mr-10"></div>
          <InputText
            placeholder=""
            label="Nationality"
            reference="nationality"
            updateData={update_personal_detail_data}
          />
        </div>
        <div className="mb-6 flex">
          <InputText
            placeholder=""
            label="Place Of Birth"
            reference="place_of_birth"
            updateData={update_personal_detail_data}
          />
          <div className="mr-10"></div>
          <InputText
            placeholder=""
            label="Date Of Birth"
            reference="date_of_birth"
            updateData={update_personal_detail_data}
          />
        </div>
      </section>
      <div
        className="flex items-center text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10 cursor-pointer"
        onClick={() => setHideDetail(!hideDetail)}
      >
        <p className="text-left">
          {hideDetail ? `Edit additional details` : `Hide additional details`}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          data-open="false"
          className={hideDetail ? `rotate-90` : `rotate-[270deg]`}
        >
          <path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
        </svg>
      </div>
    </>
  );
}
export default PersonalDetail;
