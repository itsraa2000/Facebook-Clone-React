//CSS
import '../../assets/css/global.css'
//Import
import React from 'react'
import MainSection from '../../sections/home/MainSection'
import LeftSection from '../../sections/home/LeftSection'
import RightSection from '../../sections/home/RightSection'

function HomePage() {
    return (
        <div className="hp-wrapper">
            <div className="hp-wrap">
                <div className="hp-container">
                    <div className="hp-style height-main">
                        <LeftSection />
                        <MainSection />
                        <RightSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
