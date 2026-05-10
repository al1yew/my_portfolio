const PrevButton = ({ className, style, onClick }) => {
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
                    d="M24 1L3 11.9999M3 11.9999H61M3 11.9999L24 22.9998"
                    strokeWidth="2"
                />
            </svg>
        </span>
    );
};
export default PrevButton;
