import React from 'react'

function CreatePost() {
  return (
    <div className="cp-wrapper">
      <div aria-label="สร้างโพสต์" className="cp-container" role="region">
        <div className="cp-top">
          <div className="cp-profile">
                <img aria-label="โปรไฟล์ของคุณ" className="pf-picture" role="img" src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/391710424_3622507571409556_1095526012264651521_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeG_yI-TBGAG8RvR7AtJV1l1vyVtUgWtuge_JW1SBa26B1pQ4ewhA5pWCrxJY-bmCHNqbPQS_M6zey4qPAfCCahf&_nc_ohc=W9qr0xfDogoAX8byb9Q&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfAtweDYstbwn58HJnj-kbXSpqozmOWdl4xrgTs74SGzqA&oe=65E46AB7"></img>
          </div>
          <div className="cp-input">
            <div className=" w-full text-gray-main break-words hyphens-auto ">
              <span className="relative overflow-hidden text-xs	">คุณคิดอะไรอยู่ ?</span>
            </div>
          </div>
        </div>
        <div className="cp-bottom">
          <div className="cp-event" role="button" tabIndex={0}>
            <div className="cp-live">
            <span className="inline-flex grow-0 shrink-0 mr-2"><img height="24" width="24" alt="" className="object-fill" src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/epGAMnVkMsy.png?_nc_eui2=AeEf_JEX9hkzMUwtxm3NWk9_LvvaxKiLzcEu-9rEqIvNwX-xqjYhBYHpJ35vK2DCG-d7K6T91MpPrufuLdUp6kux" /></span>
            <span className="max-w-full break-word block text-sm font-semibold relative text-ellipsis	whitespace-nowrap text-gray-main">วีดีโอถ่ายทอดสด</span>
            </div>
          </div>
          <div className="cp-event" role="button" tabIndex={0}>
            <div className="cp-live">
            <span className="inline-flex grow-0 shrink-0 mr-2"><img height="24" width="24" alt="" className="object-fill" src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/74AG-EvEtBm.png?_nc_eui2=AeG59TNeFzHVHCTOfc_ns0w7jLWb3nZ8TcaMtZvednxNxpT_-UdwPaEen49OsNyYgq-9dF2sibSoxJim3NDWyPXd" /></span>
            <span className="max-w-full break-word block text-sm font-semibold relative text-ellipsis	whitespace-nowrap text-gray-main">รูปภาพ/วีดีโอ</span>
            </div>
          </div>
          <div className="cp-event" role="button" tabIndex={0}>
            <div className="cp-live">
            <span className="inline-flex grow-0 shrink-0 mr-2"><img height="24" width="24" alt="" className="object-fill" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/_RWOIsUgWGL.png?_nc_eui2=AeGDsDVjjcqtyKvylOczGQSvpRYQ3zWJHxilFhDfNYkfGPyUCdjYPUg4L_gzwq7iYrVOxNUNc3IR1Z8ui2WW2wjM" /></span>
            <span className="max-w-full break-word block text-sm font-semibold relative text-ellipsis	whitespace-nowrap text-gray-main">ความรู้สึกกิจกรรม</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
