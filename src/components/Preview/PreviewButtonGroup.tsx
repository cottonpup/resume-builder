import { useState } from 'react';

export function PreviewButtonGroup() {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  return (
    <div className="p-4 text-white fill-white flex items-center justify-between mt-3 w-[30rem]">
      <div className="flex items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1"
        >
          <path d="M5.5 5.5v4h4v-4h-4zM11 4v7H4V4h7zm3.5 1.5v4h4v-4h-4zM20 4v7h-7V4h7zM5.5 14.5v4h4v-4h-4zM11 13v7H4v-7h7zm3.5 1.5v4h4v-4h-4zM20 13v7h-7v-7h7z"></path>
        </svg>

        <div className="cursor-pointer">Select template</div>
      </div>
      <div className="flex items-center">
        <button className="py-[13px] px-6 bg-[#1a91f0] rounded-md mr-2 font-bold">
          <p>Download PDF</p>
        </button>
        <div className="relative">
          <button
            className="py-[13px] px-6 bg-[#1a91f0] rounded-md"
            onClick={() => setShowOptionsModal(!showOptionsModal)}
          >
            <div className="mr-[8px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5,14 C5.67157288,14 5,13.3284271 5,12.5 C5,11.6715729 5.67157288,11 6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 Z M12.5,14 C11.6715729,14 11,13.3284271 11,12.5 C11,11.6715729 11.6715729,11 12.5,11 C13.3284271,11 14,11.6715729 14,12.5 C14,13.3284271 13.3284271,14 12.5,14 Z M18.5,14 C17.6715729,14 17,13.3284271 17,12.5 C17,11.6715729 17.6715729,11 18.5,11 C19.3284271,11 20,11.6715729 20,12.5 C20,13.3284271 19.3284271,14 18.5,14 Z"></path>
              </svg>
            </div>
          </button>
          <div
            className={`absolute z-[1] bg-white py-[10px] left-auto right-0 bottom-[100%] rounded-[4px] mb-[8px] text-black fill-[#1a91f0] whitespace-nowrap ${
              showOptionsModal ? '' : 'hidden'
            }`}
            style={{
              boxShadow:
                'rgb(23 68 130 / 20%) 0px 0px 1px, rgb(23 68 130 / 15%) 0px 2px 14px',
            }}
          >
            <div className="flex items-center py-[6px] px-[16px] cursor-pointer">
              <div className="mr-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 19V7.82843L14.1716 5H7v14h10zm1 2H6c-.55228 0-1-.4477-1-1V4c0-.55228.44772-1 1-1h8.5858c.2652 0 .5196.10536.7071.29289l3.4142 3.41422c.1875.18753.2929.44189.2929.7071V20c0 .5523-.4477 1-1 1z M10.5169 12.8175L9.66292 10H8l1.75281 5h1.30339L12 12.2222 12.9438 15h1.3034L16 10h-1.6629l-.854 2.8175L12.5393 10h-1.0786l-.9438 2.8175z"></path>
                </svg>
              </div>
              <div>Export to DOCX</div>
            </div>
            <div className="flex items-center py-[6px] px-[16px] cursor-pointer">
              <div className="mr-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 19V7.87116L14.1643 5H7v14h10zm1 2H6c-.55228 0-1-.4477-1-1V4c0-.55228.44772-1 1-1h8.5821c.2674 0 .5236.10707.7115.2973l3.4179 3.46058c.1848.18717.2885.43963.2885.7027V20c0 .5523-.4477 1-1 1z M15 10H9v2h2v4h2v-4h2v-2z"></path>
                </svg>
              </div>
              <div>Export to TXT</div>
            </div>
            <div className="flex items-center py-[6px] px-[16px] cursor-pointer">
              <div className="mr-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.636 11.646l1.945-1.944 1.414 1.414-1.945 1.945a2.75 2.75 0 103.89 3.889l1.944-1.945 1.414 1.414-1.944 1.945a4.75 4.75 0 11-6.718-6.718zM16.95 10.94l-1.945 1.944 1.414 1.414 1.945-1.944a4.75 4.75 0 00-6.718-6.718L9.702 7.581l1.414 1.414 1.945-1.945a2.75 2.75 0 013.889 3.89z M9.313 13.273a.7.7 0 000 .99l.424.424a.7.7 0 00.99 0l3.96-3.96a.7.7 0 000-.99l-.424-.424a.7.7 0 00-.99 0l-3.96 3.96z"></path>
                </svg>
              </div>
              <div>Share a link</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
