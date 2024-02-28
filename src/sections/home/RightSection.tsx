//css
import './style.css'
//Import
import React from 'react'
import Birthday from '../../components/birhday/Birthday'
import Messenger from '../../components/messenger/Messenger'

function RightSection() {
  return (
    <div role="complementary" className="rs-wrapper height-main">
        <div className="rs-contain" data-pagelet="RightRail">
            <Birthday />
            <Messenger />
        </div>
    </div>
  )
}

export default RightSection
