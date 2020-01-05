import {
  decorate,
  observable,
  action,
} from "mobx";


class ViewModeStore {
  val = '';

  handleChange = (event) => {
    this.val = event.target.value;
  };
  handleChangeCount = (event) => {
    return event.target.value;
  };
  handleChangePoints = (event) => {
    return event.target.value;
  };
}

decorate(ViewModeStore, {
  handleChangePoints : action.bound,
  handleChangeCount : action.bound,
  handleChange: action.bound,

});

export default () => new ViewModeStore();
