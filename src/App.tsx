import "./App.css";
import RoutesApp from "./routes/RoutesApp";
import {BrowserRouter} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <main>
          <RoutesApp/>
        </main>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
