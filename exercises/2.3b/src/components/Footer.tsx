import { FooterProps } from "../types";

const Footer = (text: FooterProps) => {
    return (
        <div>
            <p>
                {text.text}
            </p>
        </div>
    )
}

export default Footer;