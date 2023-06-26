import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <main>
            <Helmet>
                <title>Error! Return back.</title>
            </Helmet>

            <section className="errorpage">
                <div className="container">
                    <div className="row all">
                        <h1>Error! Return to the Main page?</h1>
                        <Link to="/">Go to main page</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default ErrorPage;
