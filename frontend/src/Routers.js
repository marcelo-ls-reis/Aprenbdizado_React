import React from "react"
import Header from "./components/header/Header.js"
import { Route, Routes } from "react-router-dom"
import Main from "./components/main/Main.js"
import Body from "./components/Body/body.js"

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/body" element={<Body />} />
        </Routes>
    )
}

export default Routers