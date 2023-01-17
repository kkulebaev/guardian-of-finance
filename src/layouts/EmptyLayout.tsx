import React from 'react'
import { Outlet } from 'react-router-dom'

function EmptyLayout() {
  return (
    <div className="grid place-items-center h-screen">
      <Outlet />
    </div>
  )
}

export default EmptyLayout
