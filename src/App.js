import './App.css';
import Video from './component/video';
import data from './component/data/data';
import { useState } from 'react';
import AddVideo from './component/addVideo';


function App() {

  // console.log('App Render')

 const [video, setVideo] = useState(data);

  



 

  return (
    <>
        <div className='container'>

        <AddVideo setVideo={setVideo} video={video}></AddVideo>
        

      {video.map(videos => {

        return <Video
        id={videos.id}
        key={videos.id}
        title={videos.title}
        channelName={videos.channelName}
        isVerified={videos.isVerified}
        view={videos.view}
        time={videos.time}
        ></Video>
        
      })}
      
    </div>
    
    </>
    
    
  );
}

export default App;
