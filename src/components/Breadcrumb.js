import React from 'react'

function Breadcrumb() {
  return (
    <div className='Breadcrumb'>
         <Breadcrumb>
    <Breadcrumb.Item href="#" active style={{color:"rgba(138, 143, 156, 1)"}}>Home</Breadcrumb.Item>

    <Breadcrumb.Item href="#" active style={{color:"rgba(34, 34, 34, 1)"}}>Data</Breadcrumb.Item>
</Breadcrumb>
</div>
  )
}

export default Breadcrumb