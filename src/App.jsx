import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
