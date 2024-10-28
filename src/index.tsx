import { render } from "preact";
import { LocationProvider, Router, Route, lazy } from "preact-iso";

import { Header } from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "@/constants/routes";
import { NotFound } from "@/pages/_404";

import "./style.css";

const queryClient = new QueryClient();

const Home = lazy(() =>
  import("@/pages/home").then((module) => module.Home),
);
const Balance = lazy(() =>
  import("@/pages/balance").then((module) => module.Balance),
);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Home path={routes.home} />
            <Balance path={routes.balance} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </LocationProvider>
    </QueryClientProvider>
  );
}

render(<App />, document.getElementById("app"));
