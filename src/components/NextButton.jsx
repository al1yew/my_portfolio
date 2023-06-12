import { BiSkipNextCircle } from "react-icons/bi";

const NextButton = ({ className, style, onClick }) => {
    return (
        <span
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <svg
                viewBox="0 0 61 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M37 1L58 11.9999M58 11.9999H0M58 11.9999L37 22.9998"
                    strokeWidth="2"
                />
            </svg>
        </span>
    );
};
export default NextButton;
