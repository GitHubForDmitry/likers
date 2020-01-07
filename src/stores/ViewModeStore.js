import {
  decorate,
  observable,
  action,
} from "mobx";


class ViewModeStore {

  postQuery = {};

  optMessenger = [];
  isMsgSet = false;

  isMessengerSelected = false;

  isActionSelected = false;

  setIsMessengerSelected = (value) => {
    this.isMessengerSelected = value;
  };

  setIsActionSelected = (value) => {
    this.isActionSelected = value;
  };

  setMessengerOpt(value) {
    this.optMessenger = [...value];
  }

  handleChange = (event) => {
    return event.target.value;
  };
  handleChangeCount = (event) => {
    return event.target.value;
  };
  handleChangePoints = (event) => {
    return event.target.value;
  };

  setPostQuery(name, value) {
    this.postQuery = {
      ...this.postQuery,
      [name]: value
    };
  }
}


decorate(ViewModeStore, {
  handleChangePoints : action.bound,
  handleChangeCount : action.bound,
  handleChange: action.bound,
  setPostQuery: action.bound,
  postQuery: observable,
  isMessengerSelected: observable,
  isActionSelected: observable,
  setIsMessengerSelected: action,
  setIsActionSelected: action
});

export default () => new ViewModeStore();
