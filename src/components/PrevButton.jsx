import { BiSkipPreviousCircle } from "react-icons/bi";

const PrevButton = ({ className, style, onClick }) => {
    return (
        <span
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <BiSkipPreviousCircle />
        </span>
    );
};
export default PrevButton;
