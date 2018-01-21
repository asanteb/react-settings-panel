import { computed, autorun, observable, action } from "mobx";

class Workstore {
  @observable settingsData = {};

  @action
  submit() {

  }
}

const store = window.store = new Workstore();

export default store;
