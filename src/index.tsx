import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configure } from "mobx";
import createStore from "./stores/ListToDoStore";
import { Provider } from "mobx-react";

configure({ enforceActions: "always" });

ReactDOM.render(
  <Provider store={createStore()}>
    {/* Provider should be added at the very top, so that all the app uses them. */}
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
