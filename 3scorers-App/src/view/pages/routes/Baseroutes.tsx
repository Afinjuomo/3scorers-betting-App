import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../../components/common/ScrollToTop";
import Signup from "../Signup";



export const BaseRoute: React.FC = () => {
    return(
    <BrowserRouter>
    <ScrollToTop>
        <Routes>
        <Route path="/signup" element={<Signup />}/>
        </Routes>
    </ScrollToTop>
    </BrowserRouter>
    )
}