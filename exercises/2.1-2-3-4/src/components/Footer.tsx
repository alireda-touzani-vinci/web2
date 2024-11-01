import "./Footer.css";

interface FooterProps {
  pictureUrl: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <img src={props.pictureUrl} alt="picture" className="logo"/>
      <div>{props.children}</div>
    </footer>
  );
};

export default Footer;
