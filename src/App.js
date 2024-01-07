import Details from "./components/Details";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="flex flex-col sm:flex-row"
      style={{ fontFamily: "Roboto Slab" }}
    >
      <Sidebar />
      <Profile />
      <Details />
    </div>
  );
}

export default App;
