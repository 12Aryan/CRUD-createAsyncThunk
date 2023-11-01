import Navbar from "./shared/Navbar/Navbar";
import Create from "./features/users/components/create/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./shared/Error/Error-page";
import Read from "./features/users/components/Read/Read";
import Signup from "./features/Authentication/Signup/Signup";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Navbar />}>
            <Route path="/" element={<Create />} />
            <Route path="/users" element={<Read />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Signup /> */}
    </div>
  );
};

export default App;
