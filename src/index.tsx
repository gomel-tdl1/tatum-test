import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/header/index.js";
import { Home } from "./pages/home/index.js";
import { Balance } from "./pages/balance/index.js";
import { NotFound } from "./pages/_404.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "./constants/routes.js";

import "./style.css";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Route path={routes.home} component={Home} />
            <Route path={routes.balance} component={Balance} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </LocationProvider>
    </QueryClientProvider>
  );
}

render(<App />, document.getElementById("app"));
