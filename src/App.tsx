import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
