import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { PostCards } from "../components/PostCards/PostCardList/PostCardList";
import { Post } from "../components/PostCards/PostCard/PostCard";
import { LogIn } from "../components/LogIn/LogIn";

import { ErrorPage } from "../components/ErrorPage/ErrorPage";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PostCards} exact />
        <Route path="/login" component={LogIn} exact />
        <Route path="/post/:postId" component={Post} exact />
        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </BrowserRouter>
  );
};
