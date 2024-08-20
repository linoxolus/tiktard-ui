import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        const Layout =
                            publicRoute.layout === null
                                ? Fragment
                                : publicRoute.layout || DefaultLayout;

                        return (
                            <Route
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <publicRoute.component />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
