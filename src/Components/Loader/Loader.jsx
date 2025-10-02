    export default function WhatsAppSpinner({
    size = 40,
    color = 'rgb(84, 121, 202)'
    }) {
    return (
        <div className="flex items-center justify-center">
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="70 200"
            strokeDashoffset="0"
            >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
            />
            </circle>
        </svg>
        </div>
    );
    }