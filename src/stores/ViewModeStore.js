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
  
  isUrlSelected = false;

  isPointSelected = false;

  isUserName = '';

  setIsUserName = (value) => this.isUserName = value;

  setIsMessengerSelected = (value) => {
    this.isMessengerSelected = value;
  };

  setIsActionSelected = (value) => {
    this.isActionSelected = value;
  };

  setIsUrlSelected = (value) => {
    this.isUrlSelected = value;
  };

  setIsPointSelected = (value) => {
    this.isPointSelected = value;
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
  isUrlSelected: observable,
  isPointSelected: observable,
  isUserName: observable,
  setIsMessengerSelected: action.bound,
  setIsActionSelected: action.bound,
  setIsUrlSelected: action.bound,
  setIsPointSelected: action.bound,
  setIsUserName: action.bound
});

export default () => new ViewModeStore();
