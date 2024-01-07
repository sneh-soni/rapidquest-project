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
    </div>
  );
}

export default App;
