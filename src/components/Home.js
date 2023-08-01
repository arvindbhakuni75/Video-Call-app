import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState();
    const handelJoin = () => {
        navigate(`/room/${roomId}`)
    }

  return (
    <div className='homeDiv'>


    <div className="card ">
        <div className="card-body enterIdCard">
          <h5 className="card-title">Video Calling App</h5>
          <input className="form-control" placeholder='Enter Your Room Id' type='text' value={roomId} onChange={(e)=> setRoomId(e.target.value)} />
          <button class="btn btn-primary" onClick={handelJoin} >Join</button>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
