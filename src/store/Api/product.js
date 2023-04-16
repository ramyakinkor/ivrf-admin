import axios from "axios";
import { CONSTANTS } from "./constants";

export default class Product {
  static getProducts() {
    return axios.get(CONSTANTS.GET_PRODUCTS);
  }

  static getImages() {
    return axios.get(CONSTANTS.GET_IMAGES);
  }

  static getVideos() {
    return axios.get(CONSTANTS.GET_VIDEOS);
  }

  static updateProduct(id, data) {
    const url = CONSTANTS.UPDATE_PRODUCT.replace(':id', id);
    return axios.put(url, data)
  }

  static deleteProduct(id) {
    const deleteUrl = CONSTANTS.DELETE_PRODUCT.replace(':id', id);
    return axios.delete(deleteUrl)
  }

  static createProduct(data) {
    return data.type === 'image' ? axios.post(CONSTANTS.CREATE_IMAGE, data) : axios.post(CONSTANTS.CREATE_VIDEO, data);
    
  }
}