import React from "react";

function QuickMenu() {
  return (
    <div>
      <div className="qm-headder">
        <span className="qm-title">ทางลัดของคุณ</span>
      </div>
      <ul>
          <li>
            <div className="px-2 block">
              <div className="ls-profile">
                <div className="ls-avatar">
                  <div className="ls-picture">
                    <img
                      className=" w-full h-full rounded-xl "
                      src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/429648497_1133076551448069_1161213026345151924_n.jpg?stp=c166.0.628.628a_cp0_dst-jpg_s75x225&_nc_cat=100&ccb=1-7&_nc_sid=f22548&_nc_eui2=AeF67asBYbzGJcTNG_uBxf-VRE-NdUALZYpET411QAtlirUAqckDICMch0KzE6a3tMij9kWgcwYPkDOpq306tDOV&_nc_ohc=S9QFai8n2qsAX9IJOUX&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfDW8neKDBxRbFwW0VkfzdQWlW2orsfL5zNml4bTuf673A&oe=65E2A9C3"
                    />
                  </div>
                </div>
                <div className="ls-username">
                  <span className="ls-name">Macbook มือ2</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="px-2 block">
              <div className="ls-profile">
                <div className="ls-avatar">
                  <div className="ls-picture">
                    <img
                      className=" w-full h-full rounded-xl "
                      src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/362682231_308066978344966_1724146244213594038_n.jpg?stp=c113.0.675.675a_cp0_dst-jpg_s75x225&_nc_cat=1&ccb=1-7&_nc_sid=f22548&_nc_eui2=AeEk8ldgCdyDkVVGOxG95jms8TDi7S1km8rxMOLtLWSbylmeJXmI20rjzoO6VxBqjpc-9Ka--uD5YCbhAD6wHO1N&_nc_ohc=mL9kRINSeRIAX-SwVR9&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfBlG-XeD7_aI7FWVxBJ1aV-34jtFw-kn3lmCAKovdPuHw&oe=65E199A6"
                    />
                  </div>
                </div>
                <div className="ls-username">
                  <span className="ls-name">BYD</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="px-2 block">
              <div className="ls-profile">
                <div className="ls-avatar">
                  <div className="ls-picture">
                    <img
                      className=" w-full h-full rounded-xl "
                      src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.2081-6/11057107_483504688467002_1460985830_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=101&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeGvnxE9KBIKCcs46N59ZTNFKoke__Hub3sqiR7_8e5vex7dElVaPE0kQaNs5Ehu02U8R6czlOS8Xk3sQ506VQOK&_nc_ohc=03Xmy4uDk5gAX-3o3qW&_nc_oc=AQkMkpjFU2LESEXPLJHspjGJA40Gj3yXeZrw98YjvQQrXro4Tc8OSADslb0bBwKy_70&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCOT5IssVtD3kjqoytHn_Vp0g4mUi2tmvr5jaEOHwJTYg&oe=65E28415"
                    />
                  </div>
                </div>
                <div className="ls-username">
                  <span className="ls-name">Gin</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="px-2 block">
          <div className="ls-profile">
            <div className="ls-avatar">
              <div className="ls-icon">
                <img
                  className=" w-5 h-5 flex justify-center items-center "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGZpbGw9IiMxMzI3M2QiPjxwYXRoIGQ9Ik0yMy45ODUgMzdhMS45OTQgMS45OTQgMCAwIDEtMS40MTQtLjU4Nkw4LjU1NyAyMi40YTIgMiAwIDEgMSAyLjgyOC0yLjgyOGwxMi42IDEyLjYwMSAxMi42MDEtMTIuNmEyIDIgMCAxIDEgMi44MjggMi44MjdMMjUuNCAzNi40MTRjLS4zOS4zOS0uOTAyLjU4Ni0xLjQxNC41ODZ6IiBmaWxsPSIjZTRlNmViIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMTMyNzNkIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTIzLjk4NSAzNmEuOTk3Ljk5NyAwIDAgMS0uNzA3LS4yOTNMOS4yNjQgMjEuNjkyYTEgMSAwIDEgMSAxLjQxNC0xLjQxNGwxMy4zMDcgMTMuMzA4IDEzLjMwOC0xMy4zMDhhMSAxIDAgMSAxIDEuNDE0IDEuNDE0TDI0LjY5MyAzNS43MDdhLjk5Ny45OTcgMCAwIDEtLjcwNy4yOTN6IiBmaWxsPSIjZTRlNmViIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMTMyNzNkIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                />
              </div>
            </div>
            <div className="ls-username">
              <span className="ls-name">ดูเพิ่มเติม</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default QuickMenu;
