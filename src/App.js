import { useLocation, Switch, Route } from "react-router-dom";
import {
  CreatePartyPage,
  LoginPage,
  PartyListingPage,
  RegisterPage,
} from "./pages";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  let location = useLocation();
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0">
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={200} classNames="page">
            <Switch location={location}>
              <Route path="/parties/create" component={CreatePartyPage} />
              <Route path="/parties" component={PartyListingPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/" component={LoginPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
