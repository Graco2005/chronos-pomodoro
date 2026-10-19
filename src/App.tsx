import { useState } from "react";
import { Home } from "./pages/Home";
import type { TaskStateModel } from "./models/TaskStateModel";

import "./styles/global.css";
import "./styles/theme.css";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSeccondsReamaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);
  const numero = 1;

  console.log('APP', state)

  return <Home state={state} setState={setState} />;
}
