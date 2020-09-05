import React from 'react'
import './App.css'
import Header from "./components/Header"
import RecommendedVideos from "./components/RecommendedVideos"
import Sidebar from "./components/Sidebar"

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
            </div>
        </div>
    )
}

export default App
