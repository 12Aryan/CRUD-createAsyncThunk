import Navbar from "./shared/Navbar/Navbar";
import Create from "./features/users/components/create/create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./shared/Error/Error-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*"  element={<ErrorPage/>} />
        <Route element={<Navbar />}>
        
          <Route path="/" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
