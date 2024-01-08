import Details from "./components/Details";
import Profile from "./components/Profile";
import RetirementStretagy from "./components/RetirementStrategy";
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
      <RetirementStretagy />
    </div>
  );
}

export default App;
