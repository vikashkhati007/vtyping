import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="Footercontainer w-full absolute bottom-0 p-2 flex gap-3 justify-center items-center ">
        <div className="socialcontainer flex gap-1">
          <Link href={"https://github.com/vikashkhati007"}>
            <div className="iconcontainer border p-1 rounded-md border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                  <g fill="#fff">
                    <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                    <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                  </g>
                </mask>
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    stroke-dasharray="30"
                    stroke-dashoffset="30"
                    d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="30;0"
                    />
                  </path>
                  <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      values="10;0"
                    />
                    <animate
                      attributeName="d"
                      dur="3s"
                      repeatCount="indefinite"
                      values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                    />
                  </path>
                </g>
                <rect
                  width="8"
                  height="4"
                  x="8"
                  y="11"
                  fill="currentColor"
                  mask="url(#lineMdGithubLoop0)"
                >
                  <animate
                    attributeName="y"
                    dur="10s"
                    keyTimes="0;0.45;0.46;0.54;0.55;1"
                    repeatCount="indefinite"
                    values="11;11;7;7;11;11"
                  />
                </rect>
              </svg>
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/vikash-khati-564221265/"}>
            <div className="iconcontainer border p-1 rounded-md border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </div>
          </Link>

          <Link href={"https://www.instagram.com/vikashkhati007"}>
            <div className="iconcontainer border p-1 rounded-md border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9zm0 7c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm2.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2zM12 19c-3.9 0-7-3.1-7-7h3c0 2.2 1.8 4 4 4s4-1.8 4-4h3c0 3.9-3.1 7-7 7z"
                />
              </svg>
            </div>
          </Link>

          <Link href={"https://www.x.com/vikashkhati007"}>
            <div className="iconcontainer border p-1 rounded-md border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><mask id="ipTBigX0"><g fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path d="M33 6h11L15 42H4L33 6Z"/><path d="M15 6H4l29 36h11L15 6Z"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBigX0)"/></svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
