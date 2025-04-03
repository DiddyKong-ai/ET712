import './App.css';
import beachimg from './images/beach.jpg'

function App() {
  // variable
  const msg = "Welcome to ReactJS"
  // function
  function printsomething(){
    return "Hello from function"
  }
  return (
    <div>
      <h1 style ={{color:"aqua", textAlign:"center"}}>Dillon Robertson</h1>
      <p>This is my first ReactJS app</p>
      <p>Bucket list</p>
      <ol>
        <li>It gives you things to look forward to</li>
        <li>It makes life more meaningful</li>
      </ol>
      <h2>Inline styling</h2>
      <label for="email">Enter email:</label>
      <input type="text" id="email" placeholder="Enter a email address..." style={{padding:"10px" , backgroundColor:"blue"}}/>
      <button type="submit" style={{backgroundColor:"crimson", padding:"10px 20px"}}>Submit</button>
      <hr/>
      <img src={beachimg} style={{width:"500px", display:"block",margin:"auto", border:"groove 10px red"}}/>
      <h2 className='subtitle'>Variables in JSX</h2>
      <p>Calling variable msg = {msg}</p>
      <p>Calling function printsomething = {printsomething()}</p>
    </div>
  );
}

export default App;
