import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import {
    Header,
    RecommendedVideos,
    SearchPage,
    Sidebar,
    VideoPage
} from "./components"
import { ROUTES } from "./constants"

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path={`${ROUTES.SEARCH}/:item`}>
                        <div className="app__page">
                            <Sidebar />
                            <SearchPage />
                        </div>
                    </Route>
                    <Route path={`${ROUTES.WATCH}/:videoId`}>
                        <div className="app__page">
                            <VideoPage 
                                title="Cute and Funny Cat Videos to Keep You Smiling! 🐱"
                                views="4.5M views"
                                channel="Rufus"
                                url="https://www.youtube.com/watch?v=tpiyEe_CqB4"
                                likes="33K"
                                dislikes="474"
                            />
                        </div>
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <div className="app__page">
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default App
