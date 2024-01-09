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
      <div className="w-screen m-0 relative top-36 sm:hidden z-20">
        <button className="bg-blue-700 w-full text-white rounded-xl p-2 flex justify-center items-center">
          Update
        </button>
      </div>
    </div>
  );
}

export default App;
