import {observable, action} from 'mobx';

class AuthStore {
    @observable values = {
        email: '',
        password: '',
        checkIn: false,
    };

    @action.bound setEmail = (value) => {
        this.email = value;
    };
    @action.bound setPassword = (value) => {
        this.password = value;
    };
    @action.bound setCheckIn = (value) => {
        this.checkIn = value;
    };

    @action.bound login() {
        if (this.email && this.password && this.checkIn) {
            console.log(`Email:${this.email} Password: ${this.password} CheckIn: ${this.checkIn ? "Welcome": "U don't accept"} `)
            return true;
        }
    }

    @action.bound handleEmailChange = e => {
        this.setEmail(e.target.value);
    };

    @action.bound handlePasswordChange = e => {
         this.setPassword(e.target.value);
    };

    @action.bound handleCheckInChange = (e) => {
        this.setCheckIn(e.target.checked);
    };

    @action.bound handleSubmitForm = e => {
        e.preventDefault();
        if (this.email && this.password && this.checkIn) {
            console.log(`Email:${this.email} Password: ${this.password} CheckIn: ${this.checkIn ? "Welcome": "U don't accept"} `)
        }
    };
}

export default () => {
    const store = new AuthStore();
    return store;
};
