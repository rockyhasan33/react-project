import './addVideo.css'
function AddVideo({setVideo, video}) {

    
    let obj = {
        
    }

    function addFromInput(e) {
    //    ([...video, {...obj, [e.currentTarget.name]: e.currentTarget.value}])

          obj =   [{...obj, [e.currentTarget.name]: e.currentTarget.value, id: video.length}]
    }

    // console.log(video)


    function VideoAdd(e) {
        e.preventDefault()
        setVideo([...video, obj]);
        console.log(video)
        
    }

    return (
        <form>
            <input onChange={(e) => addFromInput(e)} type='text' name='title' placeholder='enter video title'/>
            <input onChange={(e) => addFromInput(e)} type='text' name='channelName' placeholder='enter channelName'/>
            <input onChange={(e) => addFromInput(e)} type='text' name='isVarified' placeholder='enter isVerified'/>
            <input onChange={(e) => addFromInput(e)} type='text' name='view' placeholder='enter video view'/>
            <input onChange={(e) => addFromInput(e)} type='text' name='time' placeholder='enter video time'/>
            <button onClick={VideoAdd} className='add-btn'>Add Video</button>
        </form>
    )
}

export default AddVideo;