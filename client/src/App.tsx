import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsContainer from "./containers/NewsContainer";
import NotesContainer from "./containers/NotesContainer";
import SearchForm from "./components/SearchForm";
import "fontsource-roboto";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

interface Props {
  history: RouteComponentProps["history"];
}

const App: React.FC<Props> = ({ history }) => {
  const [news, setNews] = useState("null");
  const [category, setCategory] = useState("general");
  const [user, setUser] = useState({ id: 0, name: "" });

  const getNews = (category: string) => {
    fetch(`/api/news/${category}`)
      .then((result) => result.json())
      .then((res) => setNews(res));
  };

  useEffect(() => {
    getNews(category);
  }, [category]);

  const handleLogin = (name: string) => {
    fetch("/api/users")
      .then((r) => r.json())
      .then((users) => {
        const loggedInUser = users.find(
          (user: { id: number; name: string }) =>
            user.name.toLowerCase() === name.toLowerCase()
        );
        if (loggedInUser) {
          setUser(loggedInUser);
          history.push("/");
          localStorage.setItem("id", loggedInUser.id);
        } else {
          alert("Please try again!");
        }
      });
  };

  const handleSignup = (name: string) => {
    if (name !== "") {
      fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      })
        .then((r) => r.json())
        .then((user) => setUser(user));
      history.push("/");
    } else {
      alert("Name must exist to sign up!");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Switch>
        <Route
          path="/login"
          render={() => <LoginForm handleLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          render={() => <Signup handleSignup={handleSignup} />}
        />
        <Route
          path="/"
          render={() => (
            <>
              <SearchForm setCategory={setCategory} />
              <NewsContainer news={news} />

              <NotesContainer user={user} />
            </>
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
