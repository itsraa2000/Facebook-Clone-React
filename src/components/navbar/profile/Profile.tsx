import React from 'react'

function Profile() {
  return (
    <div className="pf-wrapper">
      <div aria-label="การควบคุมและการตั้งค่าบัญชี" className="pf-container" role="navigation">
        <span className="pf-style">
          <div className="pf-picturewrap">
            <div className="pf-frame" role="button" tabIndex={0}>
              <div className="pf-pt">
                <img aria-label="โปรไฟล์ของคุณ" className="pf-picture" role="img" src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-1/391710424_3622507571409556_1095526012264651521_n.jpg?stp=dst-jpg_p160x160&amp;_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=5740b7&amp;_nc_eui2=AeG_yI-TBGAG8RvR7AtJV1l1vyVtUgWtuge_JW1SBa26B1pQ4ewhA5pWCrxJY-bmCHNqbPQS_M6zey4qPAfCCahf&amp;_nc_ohc=UUWYkZZdtEIAX-v-QtV&amp;_nc_ht=scontent.fbkk29-7.fna&amp;oh=00_AfBNsSIhgiB_0U0QuKyVTRST3FLIQo8yXolh4MkJzZ9jIQ&amp;oe=65DE7BF7"></img>
                <div className="pf-addition">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className=".pf-downicon"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="pf-addmenu">
            <span className="pf-spanadd">
              <div className="pf-add">
                <a aria-label="การแจ้งเตือน" className="pf-icons" href="/" role="link" tabIndex={0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="pf-iconx"><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
                </a>
              </div>
            </span>
            <span className="pf-spanadd">
              <div className="pf-add">
                <a aria-label="การแจ้งเตือน" className="pf-icons" href="/" role="link" tabIndex={0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="pf-iconx"><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path></svg>
                </a>
              </div>
            </span>
            <span className="pf-spanadd">
              <div className="pf-add">
                <a aria-label="การแจ้งเตือน" className="pf-icons" href="/" role="link" tabIndex={0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="pf-iconx"><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                </a>
              </div>
            </span>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Profile
