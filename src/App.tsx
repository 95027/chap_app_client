import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col pb-5">
      <Header />
      <div className="flex-1">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
