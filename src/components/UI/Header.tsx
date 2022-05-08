const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-xl text-left font-semibold">{children}</h2>;
};

export default Header;
