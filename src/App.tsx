import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Card from "./components/Card";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cards" element={<Cards />} /> */}
          <Route path="/card/:cardId" element={<Card />}>
            <Route path="contacts" element={<Contacts />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
