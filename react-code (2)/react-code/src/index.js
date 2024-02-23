import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FuncWithoutReturn from "./3-ProjectFiles/1-FuncWithoutReturn";
import AppFunc from "./5-Components/AppFunc";
import ArrowFunc from "./1-ReactBasics/3-ArrowFunc";
import AppClass from "./5-Components/2-AppClass";
import UseState from "./7-Hooks-useState-useEffect/1-UseState";
import UseEffect from "./7-Hooks-useState-useEffect/2-UseEffect";
import Parent from "./8-Hooks-useContext-useReducer/1-Parent";
import App from "./App";
// import ChildComponent from "./Components/ChildComponent";
// import ParentComponent from "./Components/ParentComponent ";
import StateComponent from "./11-12-LifeCycle Methods-I-II/2-StateComponent";
import EventHandle from "./11-12-LifeCycle Methods-I-II/EventHandle";
import ConstructorExample from "./11-12-LifeCycle Methods-I-II/1-ConstructorExample";
import UseEffectDependencies from "./7-Hooks-useState-useEffect/3-UseEffectDependencies";
import UseEffectCondition from "./10-Hooks-Rules-ShortAnswer/2-UseEffectCondition";
import Child from "./8-Hooks-useContext-useReducer/1-Child";
import UseStateR from "./7-Hooks-useState-useEffect/UseStateR";
import UseReducer from "./8-Hooks-useContext-useReducer/2-UseReducer";
import UseCallbackParent from "./9-Hooks-useCallback-useMemo-useRef-useLayoutEffect/1-UseCallbackParent";
import UseRef from "./9-Hooks-useCallback-useMemo-useRef-useLayoutEffect/3-UseRef";
import UseLayoutEffect from "./9-Hooks-useCallback-useMemo-useRef-useLayoutEffect/4-UseLayoutEffect";
import UseCustomHookUse from "./10-Hooks-Rules-ShortAnswer/3-UseCustomHookUse";
import UseLayoutEffectUse from "./9-Hooks-useCallback-useMemo-useRef-useLayoutEffect/5-UseLayoutEffectUse";
import CounterComponent from "./16-17-18-19-Redux/3-CounterComponent";

// index.js
import { Provider } from "react-redux";
import store from "./16-17-18-19-Redux/4-store";
import PropGrandChild from "./5-Components/1-PropGrandChild";
import PropParent from "./5-Components/1-PropPrarent";

// index.js
import AppRoute from "./6-Routing/1-AppRoute";
import { BrowserRouter as Router } from "react-router-dom";
import AppForm from "./15-React-Others/AppForm";
import AppInlineStyle from "./15-React-Others/2-AppInlineStyle";
import HocUse from "./15-React-Others/1-HocUse";
import hoc from "./15-React-Others/1-HocLogger";

import ParentComponent from "./15-React-Others/5-ParentComponent";
import ControlledInput from "./13-Controlled/1-Controlled";
import Uncontrolled from "./13-Controlled/2-UnControlled";
import Component from "./1-ReactBasics/1-ReactComponent";

// index.js
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AppRoute />
  </Router>
);
