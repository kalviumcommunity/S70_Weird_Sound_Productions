import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Sidebar from './Components/sidebar'

function App() {
  return (
    <>   
     <div  className='bg-black text-white font-poppins'>
    <Header />
    <div className="flex" >
      <Sidebar/>
        <MainContent />
      </div>
  </div>
    </>
  )
}

export default App
