import React from 'react';

const Skill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="flex items-center rounded-[4px] bg-[#eff2f9] mr-4 my-2 text-sm py-[6px] pr-[6px] pl-[10px] transition-all">
      {children}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 5H9v4H5v2h4v4h2v-4h4V9h-4V5z"></path>
      </svg>
    </button>
  );
};

export default Skill;
