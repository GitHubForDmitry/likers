import React from 'react';
import MenuSelect from "../MenuSelect";
import TextForm from "../TextForm/TextForm";
import SimpleTabs from "../TabPanel";
import ButtonIcon from "../Button";
const social = ['Twitter', 'Instagram', 'Facebook'];
const socialAdditional = ['Like', 'Share', 'Comment', 'Subscribers'];

const UserTwitter = (props) => {
    return (
        <div>
            <MenuSelect items={social} label="Messenger"/>
            <MenuSelect items={socialAdditional} label="Action"/>
            <TextForm />
            <SimpleTabs slow={8} normal={10} fast={14}/>
            <ButtonIcon />
        </div>

    );
}

export default UserTwitter;