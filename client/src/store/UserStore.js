import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._role = "ADMIN";
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setRole(role) {
        this._role = role
    }

    get isRole() {
        return this._isrole
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
      
        return this._user
    }
}