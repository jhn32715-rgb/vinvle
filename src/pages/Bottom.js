import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Bottom() {
  return (
    <div className='wrap'>
      <p className='sub_title02'>BOTTOM</p>
      <Outlet/>
    </div>
  )
}
