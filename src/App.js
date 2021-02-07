import React , {useState , useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
function App() {

  const [images , setImages] = useState([])
 

  useEffect(() => {
   fetchImages()

  }, [])

const fetchImages = ()=>{
  const api="https://api.unsplash.com/"
  axios.get(`${api}/photos/random?client_id=SMjQTxuSnEFigxlJ0Tz09Ik6TubRDGF6cZKIjm8Qhmc&count=20`)
  .then(res=> setImages([...images , ...res.data]))
}
  return (
    <div>
      <center>
      <h1>Photo Gallary App</h1>
      </center>
    <InfiniteScroll
    dataLength={images.length}
    next ={fetchImages}
    hasMore={true}
    loader={<div className="loader"></div>}
    >
    {
       images.map(image=>{
         return <img key={image.id} src={image.urls.thumb}></img>
       })
     }
    </InfiniteScroll>
   
    </div>
  );
}

export default App;
