import { BiSkipNextCircle } from "react-icons/bi";

const NextButton = ({ className, style, onClick }) => {
    return (
        <span
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <BiSkipNextCircle />
        </span>
    );
};
export default NextButton;
