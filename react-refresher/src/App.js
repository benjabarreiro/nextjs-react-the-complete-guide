import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
