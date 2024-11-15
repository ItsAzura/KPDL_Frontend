import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'w-[100%] flex items-center text-white p-2 rounded gap-2 transition-transform duration-300 group bg-blue-400 relative'
      : 'w-full flex items-center text-gray-900 p-2 rounded gap-2 transition-transform duration-300 group relative';
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className="h-auto w-64 bg-gray-100 border flex flex-col justify-between p-4 mt-4 ml-4 sm:w-20 md:w-64 lg:w-64 xl:w-64 fixed rounded shadow-lg "
    >
      <div className="mb-14">
        <div className="text-blue-500 ml-3 text-3xl font-bold  mb-6 sm:text-xl md:text-2xl lg:text-3xl">
          <Link to={`/`}>Weather Forecast</Link>
        </div>
        <div className=" flex flex-col space-y-6 ">
          {/* Pattern 1 */}
          <Link to={`/pattern1`} className={getLinkClass('/pattern1')}>
            <div className="w-[100%] flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"
                  />
                </svg>
                <span className="hidden sm:hidden md:hidden lg:inline font-semibold">
                  Pattern 1
                </span>
              </div>
            </div>
          </Link>

          {/* Pattern 2 */}
          <Link to={`/pattern2`} className={getLinkClass('/pattern2')}>
            <div className="w-[100%] flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z"
                  />
                </svg>
                <span className="hidden sm:hidden md:hidden lg:inline font-semibold">
                  Pattern 2
                </span>
              </div>
            </div>
          </Link>

          {/* Pattern 3 */}
          <Link to={`/pattern3`} className={getLinkClass('/pattern3')}>
            <div className="w-[100%] flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="m19 9l-5 5l-4-4l-3 3" />
                  </g>
                </svg>
                <span className="hidden sm:hidden md:hidden lg:inline font-semibold">
                  Pattern 3
                </span>
              </div>
            </div>
          </Link>

          {/* Pattern 4 */}
          <Link to={`/pattern4`} className={getLinkClass('/pattern4')}>
            <div className="w-[100%] flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M22.775 8A9 9 0 0 1 23 10h-9V1a9 9 0 0 1 8.775 7m-2.067 0A7 7 0 0 0 16 3.292V8z" />
                    <path d="M1 14a9 9 0 0 1 11-8.775V12h6.775A9 9 0 1 1 1 14m15.804 0H10V7.196A6.804 6.804 0 1 0 16.804 14" />
                  </g>
                </svg>
                <span className="hidden sm:hidden md:hidden lg:inline font-semibold">
                  Pattern 4
                </span>
              </div>
            </div>
          </Link>

          {/* Pattern 5 */}
          <Link to={`/pattern5`} className={getLinkClass('/pattern5')}>
            <div className="w-[100%] flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12 4V2L8 0L4 2v1L0 5v5l12 6l4-2V6zm-8 6.88l-3-1.5v-3.3l3 1.53zm0-4.39l-2.34-1.2L4 4.12zm4 6.39l-3-1.5V3.07l3 1.54zM5.66 2.29L8 1.12l2.34 1.17L8 3.49zM12 14.88l-3-1.5V7.07l3 1.54zm0-7.39l-2.34-1.2L12 5.12l2.34 1.17z"
                  />
                </svg>
                <span className="hidden sm:hidden md:hidden lg:inline font-semibold">
                  Pattern 5
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
