import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
// import Avatar from "./components/Avatar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode=(darkThemeColor,lightThemecolor)=>{
    setMode(mode==='dark'?'light':'dark');
    document.title = `TextUtils - ${mode==='dark'?'light':'dark'} Mode`;
    document.body.style.backgroundColor = (mode==='dark'?lightThemecolor:darkThemeColor);
    // #15143d
    document.body.style.color = (mode==='dark'?'black':'white');
    showAlert(`${mode==='dark'?'light':'dark'} mode has been enabled`,"success");
  }

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      <Router>
      <Navbar title="HiReact!" aboutText="Explore me :)" url="https://react.dev/" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert}/>}></Route>

          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}


export default App;






























































// pratcice code
// export default function Profile() {
//   return (
//     <>
//     <div className="container d-flex">
//     <Avatar 
//       album={
//         {name : 'MAP OF SOUL 7',ImgUrl: 'https://i.scdn.co/image/ab67616d0000b2738afcb7dd182cffe8d53b781e'}
//       }
//       size={200}
//     />

//     <Avatar 
//       album={
//         {name : 'LOVE YOURSELF',ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3p_YEm24zxN2N6d2BpXaqocc8wVXxXVbpRQ&s'}
//       }
//       size={300}
//     />
//   <Avatar 
//       album={
//         {name : 'BTS BUTTER',ImgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/BTS_-_Butter_CD.png/220px-BTS_-_Butter_CD.png'}
//       }
//       size={200}
//     />

//     <Avatar 
//       album={
//         {name : 'PERSONA',ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsn5d5gMQMw1LxMLS9WEgUDh2sehwGeJFMw&s'}
//       }
//       size={300}
//     />
    
//     </div>
//     </>
//   );
// }