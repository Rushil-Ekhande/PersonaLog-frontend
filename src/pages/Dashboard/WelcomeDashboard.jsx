import React, {useContext} from 'react'
import userContext from '../../contexts/userContext.js';


function WelcomeDashboard() {
  const { client } = useContext(userContext);
  return (
    <div className='w-full'>
        <p className='text-4xl font-bold'>Welcome Back {client ? `, ${client.username}` : ""}</p>
        <div className="p-[1px] bg-black my-4"></div>
    </div>
  )
}

export default WelcomeDashboard;