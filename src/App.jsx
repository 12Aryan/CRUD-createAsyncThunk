import Navbar from "./shared/Navbar/Navbar";
import Create from "./features/users/components/create/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./shared/Error/Error-page";
import Read from "./features/users/components/Read/Read";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Create />} />
          <Route path="/users" element={<Read />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
