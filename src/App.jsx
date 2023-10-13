import Navbar from "./shared/Navbar/Navbar";
import Create from "./features/users/components/create/create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./shared/Error/Error-page";
import Users from "./features/users/components/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Create />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
