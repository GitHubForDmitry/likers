import React from "react";
import MenuSelect from "../MenuSelect";
import TextForm from "../TextForm/TextForm";
import SimpleTabs from "../TabPanel";
import ButtonIcon from "../Button";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";

import { STORE_KEYS } from "../../stores";

const social = ["Twitter", "Instagram", "Facebook"];
const socialAdditional = ["Like", "Share", "Comment", "Subscribers"];
const UserTwitter = () => {
  return (
    <div>
      <MenuSelect name="Twitter" items={social} label="Messenger" value={1}/>
      <MenuSelect
        name="ActionTwitter"
        items={socialAdditional}
        label="Action"
      />
      <TextForm name="text" label="url" />
      <SimpleTabs slow={8} normal={10} fast={14} name="points" label="points" />
      <ButtonIcon name="points" label="points" />
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: {} }) => ({}))
)(UserTwitter);
