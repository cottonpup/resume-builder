const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex text-sm text-left text-slate-500">{children}</div>;
};

export default Paragraph;
