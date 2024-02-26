import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="sc-wrapper">
      <div className="sc-container">
        <a href="/" className="sc-banner">
        <svg viewBox="0 0 36 36" className=" block " fill="currentColor" height="40" width="40"><path className=" text-[#0866ff] " d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path><path className="text-white" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path></svg>
        </a>
        <div className="sc-blank"></div>
        <form className="sc-forminput">
          <div className="relative">
            <div className="sc-input-container">
              <svg
                className="w-4 h-4 text-gray-main"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              className="sc-input"
              placeholder="Search On Facebook"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
