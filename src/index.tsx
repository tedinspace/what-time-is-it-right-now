import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Grommet } from "grommet";
import { POP0, POP1, POP2, TED } from "./functions/colors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Grommet
      theme={{
        global: {
          active:{
            background:{color:"#C5CBD3",opacity:1}
          },
          selected:{
           background:{color:POP0}
          },
          hover:{
            background:{color:POP2}
          },
          focus: {
            border: {
              color: TED,
            },
          },
        },
        select:{icons:{color:POP2}},
        clock: {
          analog: {
            hour: {
              color: TED,
            },
            minute: {
              color: POP1,
            },
            second: {
              color: POP2,
            },
          },
        },
      }}
    >
      <App />
    </Grommet>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
