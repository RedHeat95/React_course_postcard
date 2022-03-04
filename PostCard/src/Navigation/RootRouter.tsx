import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { PostCards } from "../components/PostCards/PostCardList/PostCardList";
import { Post } from "../components/PostCards/PostCard/PostCard";
import { LogIn } from "../components/LogIn/LogIn";
import { ConfirmEmail } from "../components/ConfirmEmail/ConfirmEmail";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";

export const RootRouter = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PostCards} exact />
        <Route path="/post/:postId">
          {isLoggedIn ? <Post /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={LogIn} exact />

        <Route path="/confirm" component={ConfirmEmail} exact />

        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </BrowserRouter>
  );
};
