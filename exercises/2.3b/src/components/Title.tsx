import { TitleProps } from "../types";

const PageTitle = (title : TitleProps) => {
    return (
        <div>
            <h1>{title.title}</h1>
        </div>
    )
};

export default PageTitle;