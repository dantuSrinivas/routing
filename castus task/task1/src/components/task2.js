/* eslint-disable no-undef */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Task2 = () => {
  let today = new Date()
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [data, setData] = useState('')

  async function apiCall() {
    try {
      const response = await axios.get("https://devapi.2gathers.com/api/events/list-events/?userId=5")
      setData(response.data.listOfHostEvents[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    apiCall()
  }, [])
  console.log("data=======>", data)

  return (
    <div className='mainDiv'>
      <div className='starting'>
        <img className='iconsSmall' src="data:image/png;base64,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" alt="" />
        <h5>event details</h5>
      </div>
      <div className='asideDiv'>
        <header>
          <div className='header'>
            <img src="https://www.promoteproductions.com/wp-content/uploads/2018/03/video-1364122_960_720-1.png" alt="hai" />
            <div>
              <h4>Event For Twilio Live X1</h4>
              <p>{date + time}</p>
            </div>
            <div className='verified'>
              <div className='verify'>
                <img src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="" className='iconsSmall' />
                <p>Active</p>
              </div>
              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GdAHjwFO5j6v5fCFLECOO6GyWj9ZD0VTOQ&usqp=CAU" alt="" className='iconsSmall' />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-_qTkNpaMLLQaoN7mnmWjtI9LeMb0i3mfA&usqp=CAU" alt="" className='iconsSmall' />
              </div>
            </div>
          </div>
        </header>
        <div className='labelsDiv'>
          <div>
            <label htmlFor="">Event Type</label>
            <p>{data.eventType}</p>
          </div>
          <div>
            <label htmlFor="">Category</label>
            <p>Conference</p>
          </div>
          <div>
            <label htmlFor="">Maximum Capacity</label>
            <p>12</p>
          </div>
          <div>
            <label htmlFor="">No.of Boxes</label>
            <p>3</p>
          </div>
          <div>
            <label htmlFor="">Public Event</label>
            <p>yes</p>
          </div>
          <div>
            <label htmlFor="">Location</label>
            <p>{data.location}</p>
          </div>
          <div>
            <label htmlFor="">Allow Users To Reserve Box</label>
            <p>{data.allowUsersToReserveBox}</p>
          </div>
          <div>
            <label htmlFor="">Guest Aollwed?</label>
            <p>yes</p>
          </div>
        </div>
        <div className='labelsDiv2'>
          <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="" className='imgggg' />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <p>sample desc</p>
          </div>
        </div>
      </div>
      <div className='mainDiv'>
        <button className='endEvent'>END EVENT</button>
        <button className='Green'>STREAMING</button>
        <button className='Green'>EDIT EVENT</button>
        <button className='Green'>RESERVE BOX</button>
        <button className='Green'>ADD PARTICIPANTS</button>
        <button className='Green'>VIEW PROMOCODES</button>
        <button className='Green'>VIEW INVITES</button>
        <button className='Green'>JOIN AS HOST</button>
      </div>
    </div>
  )
}

export default Task2