import React from "react";
import "./Home.scss"

const Home = () => {
    return(
        <div> 
            <div className="container">
                <div className="container-app-image">
                    <img src="/asset/images/app-image.png" alt="app" />
                </div>
                <div className="container-content">
                    <div className="container-content-subcontainer">
                    <h1> REVOULUTIONIZING TRADING !! </h1>
                    <h3> Trade with us </h3>
                    </div>
                    <button> Learn more </button>
                </div>
            </div>

            <img src="/asset/images/divider.png" alt="divider" className="divider" />

        </div>
    )
}

export default Home;