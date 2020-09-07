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
import { videos } from "./data"

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path={`${ROUTES.SEARCH}/:item`}>
                        <div className="app__page">
                            <Sidebar />
                            <SearchPage videos={videos}/>
                        </div>
                    </Route>
                    <Route path={`${ROUTES.WATCH}/:id`}>
                        <div className="app__page">
                            <VideoPage videos={videos} />
                        </div>
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <div className="app__page">
                            <Sidebar />
                            <RecommendedVideos videos={videos} />
                        </div>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default App
