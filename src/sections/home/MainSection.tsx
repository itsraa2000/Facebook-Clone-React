//CSS
import "./style.css"
//Import
import React from 'react'
import CreatePost from "../../components/feed/post/CreatePost"
import StoryMain from "../../components/feed/stroy/StoryMain"
import NewsFeed from "../../components/feed/news/NewsFeed"

function MainSection() {
  return (
    <div role="main" className="ms-wrapper">
      <div className="st-wrapper">
        <div className="st-container">
          <StoryMain />
          <div className="ms-newsFeed">
            <div className="ms-feed">
              <CreatePost />
              <NewsFeed />
              <NewsFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
