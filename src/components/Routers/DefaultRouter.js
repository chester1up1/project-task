import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import SignIn from "../Login/SignIn/SignIn";
import SignUp from "../Login/SignUp/SignUp";
import StartPage from "../Login/StartPage/StartPage";
import { connect } from "react-redux";
import { GetUser } from "../../firebase/actions";
import MainRouter from "../MainPage/Router/MainRouter";
import { Spinner } from "reactstrap";
export const DefaultRouter = (props) => {
  const { GetUser, user } = props;
  const [load, setload] = useState(false);
  useEffect(() => {
    GetUser();
    setTimeout(() => {
      setload(true);
    }, 2000);
  }, []);
  return (
    <Switch>
      {!user ? (
        !load ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
            }}
          >
            <Spinner style={{ width: 100, height: 100 }} color="info" />
          </div>
        ) : (
          <span>
            <Route exact path="/" component={StartPage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create-project" component={StartPage} />
            <Route path="/projects" component={StartPage} />
            <Route path="/projects/:name/:key" component={StartPage} />
            <Route path="/connect" component={StartPage} />
          </span>
        )
      ) : (
        <span>
          <Route path="/" component={MainRouter} />
        </span>
      )}
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = { GetUser };

export default connect(mapStateToProps, mapDispatchToProps)(DefaultRouter);
