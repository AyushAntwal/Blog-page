import Home from './pages/home';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from './database/configDB'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
      const getBlogs = async () => {
          const dbrefrence = collection(db , 'blogs');
          const temp = await getDocs(dbrefrence);
          setData(temp.docs.map((doc)=>({...doc.data(), id: doc.id})));
      }
      getBlogs();
  }, [])
  return (
    <div className="App">
      <Home data= {data}/>
    </div>
  );
}

export default App;
