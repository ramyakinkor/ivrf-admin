import axios from "axios";
import { CONSTANTS } from "./constants";

export default class Admin {
  static login(credential) {
    return axios.post(CONSTANTS.LOGIN_ADMIN, credential);
  }

  static async getProfile() {
    return axios.get(CONSTANTS.GET_PROFILE);
  }

  static logout() {
    return axios.post(CONSTANTS.LOGOUT_ADMIN);
  }
}