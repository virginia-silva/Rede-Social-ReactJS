import React from "react";
import Stories from "./stories/stories";
import UserInfo from "./userinfo/userinfo";

const Sidebar = () => {

  return (
    <div>
      <UserInfo />
      <Stories />
    </div>
  )
}

export default Sidebar