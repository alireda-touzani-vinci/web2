import "./Header.css";

interface HeaderProps {
  pictureUrl: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <img src={props.pictureUrl} alt="logo" className="logo" />
      <div>{props.children}</div>
    </header>
  );
};

export default Header;
