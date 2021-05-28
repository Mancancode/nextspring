import React from "react"
import { Body } from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import Metrics from "./Metrics"
import Navbar from './Navbar'
import NoMore from "./NoMore"

export default function Layout ({children}) {
    return (
        <div >
            <Navbar/>
            <Header/>
            <Body/>
            <Metrics/>
            <NoMore/>
            <Footer/>
            {children}
        </div>
    )
}
