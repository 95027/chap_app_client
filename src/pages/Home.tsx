import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center">
      <div className="bg-red-400 w-full max-w-xs"><Sidebar/></div>
      <div className="bg-green-700 flex-1">home</div>
    </div>
  )
}

export default Home
