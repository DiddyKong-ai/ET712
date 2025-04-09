import './App.css';
import User from "./comments"
import "./index.css"
// import images
import papermario from "./images/paper_mario.png"
import boo from "./images/boo.png"
import luma from "./images/luma.png"

function App() {
  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User image={papermario} username="PaperMario" date="04/01/25" usercomment="Great Job!"/>
        <User image={boo} username="Boo" date="04/11/25" usercomment="Super!"/>
        <User image={luma} username="Luma" date="04/01/25" usercomment="Excellent!"/>  
      </main>
      
    
    </>
  );
}

export default App;
