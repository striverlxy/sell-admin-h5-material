import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import routes from './config'

const AppRouter = () => {
    return (
        <Router>
            {
                routes.length > 0 &&
                <Switch>
                    <Suspense fallback={<div />}>
                    {
                        routes.map((item, index) => {
                            return (
                                <Route exact path={item.path} key={item.path || index} component={item.component}></Route>
                            )
                        })
                    }
                    </Suspense>
                </Switch>
            }
        </Router>
    )
}

export default AppRouter