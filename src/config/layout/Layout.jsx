import React from "react";
import { Footer } from "../../component/common/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return(
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export {MainLayout};