import React from 'react';
import MenuSelect from "../MenuSelect";

const social = ['Twitter', 'Instagram', 'Facebook'];
const socialAdditional = ['Like', 'Share', 'Comment', 'Subscribers'];

function UserFacebook() {
    return (
        <div>
            <MenuSelect items={social}/>
            <MenuSelect items={socialAdditional}/>
        </div>
    );
}

export default UserFacebook;