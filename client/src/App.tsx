import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import TrustedTimestamping from "@/pages/products/trusted-timestamping";
import VerifiableRegistry from "@/pages/products/verifiable-registry";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/trusted-timestamping" component={TrustedTimestamping} />
      <Route path="/products/verifiable-registry" component={VerifiableRegistry} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;