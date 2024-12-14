import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-slate-100 h-screen flex flex-col pb-5">
      <Header />
      <div className="flex-1 overflow-hidden">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
