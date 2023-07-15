import React from "react";
import Footer from "../Footer";
import MyCards from "../MyCards";
import MyCarousel from "../MyCarousel";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";

export function Home(){
    return(
        <>
    <NavBar  />
    <MyCarousel />
    <MyCards/>
    <Footer /> 
    <Outlet/>
 </>
)}


