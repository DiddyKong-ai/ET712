import './App.css';
import User from "./comments"
import "./index.css"
import User_feedback from './feedback'
import Modalwindow from "./modalwindow"
// import images
import papermario from "./images/paper_mario.png"
import boo from "./images/boo.png"
import luma from "./images/luma.png"

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User_feedback/><User image={papermario} username="Mario" date="04/10/25" usercomment="Good Job!"/><User_feedback/>
        <User_feedback/><User image={boo} username="Boo" date="04/5/25" usercomment="Super!"/><User_feedback/>
        <User_feedback/><User image={luma} username="Luma" date="04/24/25" usercomment="Excellent!"/><User_feedback/>
      </main>

    
    
    </>
  );
}

export default App;
