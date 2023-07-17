import './video.css';

function Video({title, id, channelName, isVerified, view, time}) {

    
    // console.log('Video Render');

    const imgURL = `https://picsum.photos/id/${id}/300/200`;


    const verifiedIcon = <img src='https://lh3.googleusercontent.com/bYIJ8qC96iMlCN8uR-uv9qdShzc30A6HECSrtvNlj16cQDYaByanFeyfcqBhkkpT5Q=h36' alt='verified icon' /> ;

    return (
        <>
            
                <div className="video-container">

                        <img className='poster' src={imgURL} alt="poster"/>
                    
                    <p className="title">{title}</p>
                    <p className="channelName">{channelName}
                    <span className="verified">{isVerified ? verifiedIcon : null}</span>
                    </p>
                    <div className="video-content">
                        <p className="view">{view}</p>
                        <p className="time">{time}</p>
                    </div>
                </div>
            
        </>
    )
}

export default Video;