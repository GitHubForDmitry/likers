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
const UserTwitter = ({isMessengerSelected, isActionSelected, isUrlSelected}) => {
    const path = useHistory();
    const commentsUrl = path.location.pathname;
    return (
        <div>
            <MenuSelect name="Twitter" items={social} label="Messenger" error={isMessengerSelected} />
            <MenuSelect
                name="ActionTwitter"
                items={socialAdditional}
                label="Action"
                error={isActionSelected}
            />
            <TextForm name="text" label="Url" error={isUrlSelected}/>
            <SimpleTabs slow={8} normal={10} fast={14} name="points" label="Points" />
            {commentsUrl === "/user/comment" && <TodoApp />}
            <ButtonIcon name="points" label="points" />
        </div>
    );
};
export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery, isMessengerSelected, isActionSelected, setIsMessengerSelected, isUrlSelected} }) => ({
        setPostQuery, isMessengerSelected, isActionSelected, setIsMessengerSelected, isUrlSelected
    }))
)(UserTwitter);