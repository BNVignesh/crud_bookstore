import { BrowserRouter,Route,Routes } from "react-router-dom";
import Books from "./Books";
import Addbook from "./Addbook"
import Updatebook from "./updatebook";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<Books/>} />
          <Route path="/addbook"  element={<Addbook/>} />
          <Route path="/updatebook/:id" element={<Updatebook/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
