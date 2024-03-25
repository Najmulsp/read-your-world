import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-28 space-y-2">
            <h2 className="text-6xl space-y-2">Oops!!!</h2>
            <h3 className="text-4xl p-3">Page not found</h3>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;