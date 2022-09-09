import { useEffect,  useRef,  useState } from "react";
import Header from "../components/header";
import Posts from "../components/posts";
import SearchBar from "../components/searchBar";


const Home = ({data}) => {
    let lastFilter = useRef(data);
    let temp ;
    const [filtereddata,setfilterData] = useState([]);
    useEffect(()=>{
        setfilterData([...data]);
        // console.log(filtereddata);
    },[data])
    const tagFilter = (event)=> {
         temp = data;
        if(!event.target.value.includes('all'))
        temp = temp.filter(e=>e.Tag.toLowerCase().includes(event.target.value.toLowerCase()));
        setfilterData(temp);
        lastFilter = temp;
        // console.log(temp);
    }

    const titleFilter = ((event)=>{
        event.preventDefault();
        temp = filtereddata;
        if(event.target.search.value)
        {
            temp = temp.filter(e=>e.Title.toLowerCase().includes(event.target.search.value.toLowerCase()));
            setfilterData(temp);
        }
        else setfilterData(data);
        // console.log(event.target.search.value);
    })
    return (
        <div className="conatiner" >
            <Header />
            <SearchBar tagFilter={tagFilter} titleFilter={titleFilter} data={data} />
            <Posts data={filtereddata} />
        </div>
    );
}
export default Home;