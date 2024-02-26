import React from 'react'
import StoryContentCreate from './StoryContentCreate'
import StoryElse from './StoryElse'

function StoryMain() {
  return (
    <div className="st-core">
      <div aria-label="สตอรี่" className="st-wrapper" >
        <div className="st-wrap">
          <div aria-label="ถาด" className="st-contain">
            <div className="st-container">
              <div className="st-style">
                <StoryContentCreate />
                <StoryElse />
                <StoryElse />
                <StoryElse />
                <StoryElse />
                <StoryElse />
                <StoryElse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryMain
