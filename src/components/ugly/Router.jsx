import React from "react";
import Collatz from "../pages/Collatz";

const Router = ({page}) => {

    const getContentForPage = (p) => {
        switch(p){
            case "collatz":
                return <Collatz/>
            default:
                return <h1>NotFound</h1>
        }
    }

    return (
        <>
        {getContentForPage(page)}
        </>
    );
}

export default Router;