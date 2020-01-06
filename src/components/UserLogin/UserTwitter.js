import React from "react";
import MenuSelect from "../MenuSelect";
import TextForm from "../TextForm/TextForm";
import SimpleTabs from "../TabPanel";
import ButtonIcon from "../Button";
import {useHistory} from "react-router";
import TodoApp from "../AddComments/TodoApp";

const social = ["Twitter", "Instagram", "Facebook"];
const socialAdditional = ["Like", "Share", "Comment", "Subscribers"];
const UserTwitter = () => {
    const path = useHistory();
    const commentsUrl = path.location.pathname;
  return (
    <div>
      <MenuSelect name="Twitter" items={social} label="Messenger" value={1}/>
      <MenuSelect
        name="ActionTwitter"
        items={socialAdditional}
        label="Action"
      />
      <TextForm name="text" label="url" />
      <SimpleTabs slow={8} normal={10} fast={14} name="points" label="Points" />
        {commentsUrl === "/user/comment" && <TodoApp />}
        <ButtonIcon name="points" label="points" />
    </div>
  );
};
export default UserTwitter;
