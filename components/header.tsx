import Image from "next/image";
import { Marmelad } from "next/font/google";
import { ModeToggle } from "./thememode/mode";
import GroupHoverButton from "./grouphoverbutton";
import User from "./authenticate/user";

const marmelad = Marmelad({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <div className="navcontainer flex justify-around items-center p-2 w-full h-20 ">
      <div className="flex justify-start items-center gap-3">
        <Image
          src={"/keyboardicon.png"}
          width={45}
          height={45}
          alt="keyboardicon"
          className=""
        />
        <h1 className={`${marmelad.className} text-3xl`}>vtyping</h1>
      </div>
      <div className="usercontainer flex justify-center items-center gap-5">
        {/* <div className="leaderboardcontainer">
          <GroupHoverButton
            svg={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M13.436 5.783a3 3 0 0 0-2.872 0L5.769 8.397a3 3 0 0 0-1.563 2.634v4.938a3 3 0 0 0 1.563 2.634l4.795 2.614a3 3 0 0 0 2.872 0l4.794-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634l-4.794-2.614ZM12 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.854-1.023Z"
                      clip-rule="evenodd"
                    />
                    <path d="M11 2h2c1.886 0 2.828 0 3.414.586C17 3.172 17 4.114 17 6v.018l-2.846-1.552a4.5 4.5 0 0 0-4.308 0L7 6.018V6c0-1.886 0-2.828.586-3.414C8.172 2 9.114 2 11 2Z" />
                  </g>
                </svg>
              </>
            }
            hovertext={"LeaderBoard"}
          />
        </div>
            <User/> */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
