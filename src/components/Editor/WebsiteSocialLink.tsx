import Header from '../UI/Header';
import Paragraph from '../UI/Paragraph';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators, State } from '../../state';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { WebsiteSocialElement } from '../../state/reducers/cvDataReducer';
import InputText from '../UI/InputText';
import { AdditionWrapper } from '../UI/AdditionWrapper';

export function WebsiteSocialLink() {
  const state = useSelector((state: State) => state.cvData);
  const dispatch = useDispatch();
  const { add_websites_social_links_data } = bindActionCreators(actionCreators, dispatch);
  const { update_websites_social_links_data } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  const { delete_websites_social_links_data } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  return (
    <>
      <Header>Website & Social Links</Header>
      <Paragraph>
        You can add links to websites you want hiring managers to see! Perhaps It will be
        a link to your portfolio, LinkedIn profile, or personal website
      </Paragraph>
      {state.websites_social_links.map((item: WebsiteSocialElement) => {
        return (
          <AdditionWrapper
            deleteItem={delete_websites_social_links_data}
            target={state.websites_social_links}
            id={item.id}
            key={item.id}
            titleText={item.label}
            extraText={item.link}
          >
            <div className="px-[20px] pt-[4px] pb-[24px]">
              <div className="flex flex-[0_0_calc(50%_-_20px)] mb-[20px]">
                <InputText
                  placeholder=""
                  label="Label"
                  reference="label"
                  updateData={update_websites_social_links_data}
                  group_name={'website_social_link'}
                  identifier={item.id}
                />
                <div className="mr-[40px]"></div>
                <InputText
                  placeholder=""
                  label="Link"
                  reference="link"
                  updateData={update_websites_social_links_data}
                  group_name={'website_social_link'}
                  identifier={item.id}
                />
              </div>
            </div>
          </AdditionWrapper>
        );
      })}
      <button
        className={`flex items-center py-[6px] px-[14px] text-[#1a91f0] fill-[#1a91f0] font-bold text-sm mb-10 mt-5`}
        onClick={() => add_websites_social_links_data(uuidv4())}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
        </svg>
        <p className="text-left">Add Link</p>
      </button>
    </>
  );
}
