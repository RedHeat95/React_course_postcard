import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { IState } from "../redux/store";

import { Header } from "../components/Header/Header";
import { PostCards } from "../components/PostCards/PostCardList/PostCardList";
import { Post } from "../components/PostCards/PostCard/PostCard";
import { AddPost } from "../components/AddPost/AddPost";

import { LogIn } from "../components/LogIn/LogIn";
import { ConfirmEmail } from "../components/ConfirmEmail/ConfirmEmail";

import { ErrorPage } from "../components/ErrorPage/ErrorPage";

export const RootRouter = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PostCards} exact />
        <Route path="/post/:postId">
          {isLoggedIn ? <Post /> : <Redirect to="/login" />}
        </Route>
        <Route path="/addpost">
          {isLoggedIn ? <AddPost /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login" component={LogIn} exact />
        <Route path="/confirm" component={ConfirmEmail} exact />

        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </BrowserRouter>
  );
};
