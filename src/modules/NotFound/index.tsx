import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </button>
        </div>
    );
};

export default NotFound;
