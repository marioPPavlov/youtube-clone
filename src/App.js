import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import {
    Header,
    RecommendedVideos,
    SearchPage,
    Sidebar
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
                    <Route path="/">
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
