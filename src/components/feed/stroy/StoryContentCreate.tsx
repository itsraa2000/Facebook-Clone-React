import React from 'react'

function StoryContentCreate() {
    return (
        <div className="st-content-container">
            <div className="relative">
                <a aria-label="สร้างสตอรี่" className="st-content" role="link" tabIndex={0} >
                    <div className="st-create">
                        <div className="st-cover">
                            <img alt="" className="h-full w-full object-cover" src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/391710424_3622507571409556_1095526012264651521_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeG_yI-TBGAG8RvR7AtJV1l1vyVtUgWtuge_JW1SBa26B1pQ4ewhA5pWCrxJY-bmCHNqbPQS_M6zey4qPAfCCahf&_nc_ohc=W9qr0xfDogoAX8byb9Q&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfAtweDYstbwn58HJnj-kbXSpqozmOWdl4xrgTs74SGzqA&oe=65E46AB7" />
                        </div>
                        <div className="st-undercover">
                            <div className="st-button">
                                <div className="st-plus">
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" className=" text-[#ffffff] block cursor-pointer text-center"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
                                </div>
                            </div>
                            <span className="st-addition">
                                สร้างสตอรี่
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default StoryContentCreate
