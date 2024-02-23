import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="sc-wrapper">
      <div className="sc-container">
        <a href="/" className="sc-banner">
          <img
            className="img-logo"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZmlsbD0iIzE4NzdmMiIgZD0iTTUxMiAyNTZjMCAxMjcuNzgtOTMuNjIgMjMzLjY5LTIxNiAyNTIuODlWMzMwaDU5LjY1TDM2NyAyNTZoLTcxdi00OC4wMmMwLTIwLjI1IDkuOTItMzkuOTggNDEuNzItMzkuOThIMzcwdi02M3MtMjkuMy01LTU3LjMxLTVjLTU4LjQ3IDAtOTYuNjkgMzUuNDQtOTYuNjkgOTkuNlYyNTZoLTY1djc0aDY1djE3OC44OUM5My42MiA0ODkuNjkgMCAzODMuNzggMCAyNTYgMCAxMTQuNjIgMTE0LjYyIDAgMjU2IDBzMjU2IDExNC42MiAyNTYgMjU2eiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzE4NzdmMiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNTUuNjUgMzMwIDM2NyAyNTZoLTcxdi00OC4wMjFjMC0yMC4yNDUgOS45MTgtMzkuOTc5IDQxLjcxOS0zOS45NzlIMzcwdi02M3MtMjkuMjk2LTUtNTcuMzA1LTVDMjU0LjIxOSAxMDAgMjE2IDEzNS40NCAyMTYgMTk5LjZWMjU2aC02NXY3NGg2NXYxNzguODg5YzEzLjAzNCAyLjA0NSAyNi4zOTIgMy4xMTEgNDAgMy4xMTFzMjYuOTY2LTEuMDY2IDQwLTMuMTExVjMzMHoiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9zdmc+"
          />
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
