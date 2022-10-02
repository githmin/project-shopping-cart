import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'


function Index() {
  return (
    <div className='indexMain'>
        <div className="btnGrid">
           <div className='middle'>
                <img className='meg' src="https://storage-asset.msi.com/global/picture/image/feature/PC-Case/MEG_PROSPECT_700RL/images/logo.png"/>
                <p>THE REVELATION OF LEGEND</p>
                <img className='invert model' src="https://storage-asset.msi.com/global/picture/image/feature/mb/Z790/MEG-Z790-ACE/icon-meg-name.png" alt="" />
                <Link className='mainBtn' to='/shop'>Shop Now</Link>
           </div>
        </div>
    </div>
  )
}

export default Index