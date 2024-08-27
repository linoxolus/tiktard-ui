import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { MainLayout } from "~/layouts";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((publicRoute, index) => {
            const Layout =
              publicRoute.layout === null
                ? Fragment
                : publicRoute.layout || MainLayout;

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
