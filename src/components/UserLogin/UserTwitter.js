import React from "react";
import MenuSelect from "../MenuSelect";
import TextForm from "../TextForm/TextForm";
import SimpleTabs from "../TabPanel";
import ButtonIcon from "../Button";
import {useHistory} from "react-router";
import TodoApp from "../AddComments/TodoApp";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import {STORE_KEYS} from "../../stores";

const social = ["Twitter", "Instagram", "Facebook"];
const socialAdditional = ["Like", "Share", "Comment", "Subscribers"];
const UserTwitter = ({isMessengerSelected}) => {
    const path = useHistory();
    const commentsUrl = path.location.pathname;
        console.log(path.location.pathname);
  return (
    <div>
      <MenuSelect name="Twitter" items={social} label="Messenger" error={isMessengerSelected} />
      <MenuSelect
        name="ActionTwitter"
        items={socialAdditional}
        label="Action"
      />
      <TextForm name="text" label="url" />
      <SimpleTabs slow={8} normal={10} fast={14} name="points" label="Points" />
        {commentsUrl === "/user/comment" && <TodoApp />}
        <ButtonIcon name="points" label="points" isMessengerSelected/>
    </div>
  );
};
export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery, isMessengerSelected, setIsMessengerSelected} }) => ({
        setPostQuery, isMessengerSelected, setIsMessengerSelected
    }))
)(UserTwitter);