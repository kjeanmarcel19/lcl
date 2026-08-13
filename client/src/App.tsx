import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BalanceVisibilityProvider } from "./contexts/BalanceVisibilityContext";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Synthese from "./pages/Synthese";
import SyntheseCredit from "./pages/SyntheseCredit";
import Virement from "./pages/Virement";
import Cartes from "./pages/Cartes";
import Conseiller from "./pages/Conseiller";
import Actus from "./pages/Actus";
import Notifications from "./pages/Notifications";
import Beneficiaires from "./pages/Beneficiaires";
import DetailCarte from "./pages/DetailCarte";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/connexion"} component={Connexion} />
      <Route path={"/synthese"} component={Synthese} />
      <Route path={"/synthese/credit"} component={SyntheseCredit} />
      <Route path={"/virement"} component={Virement} />
      <Route path="/cartes" component={Cartes} />
      <Route path="/conseiller" component={Conseiller} />
      <Route path="/actus" component={Actus} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/beneficiaires" component={Beneficiaires} />
      <Route path="/carte-detail" component={DetailCarte} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <BalanceVisibilityProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </BalanceVisibilityProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
