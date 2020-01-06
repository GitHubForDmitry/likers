import React from "react";
import MenuSelect from "../MenuSelect";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import {STORE_KEYS} from "../../stores";

const social = ["Twitter", "Instagram", "Facebook"];
const socialAdditional = ["Like", "Share", "Comment", "Subscribers"];

function UserFacebook({optMessenger, setMessengerOpt, isMsg}) {
  return (
    <div>
      <MenuSelect
        name="Messenger"
        options={optMessenger}
        isSet={isMsg}
        setOptions={setMessengerOpt}
        items={social}
      />
      <MenuSelect items={socialAdditional} />
    </div>
  );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(
        ({
             [STORE_KEYS.VIEWMODESTORE]: { optDistricts, isDsSet, setBuildingOpt, setIsDistrictSelected, isGradeSelected }
         }) => ({
            optDistricts,
            isDsSet,
            setBuildingOpt,
            setIsDistrictSelected,
            isGradeSelected
        })
    )
)(UserFacebook);