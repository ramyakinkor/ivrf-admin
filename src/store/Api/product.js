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
    return data.get('type') === 'image' ? axios.post(CONSTANTS.CREATE_IMAGE, data, { "Content-Type": "multipart/form-data" }) : axios.post(CONSTANTS.CREATE_VIDEO, data, { "Content-Type": "multipart/form-data" });
    
  }

  static addCategory(data) {
    return axios.post(CONSTANTS.CREATE_CATEGORY, data, { "Content-Type": "multipart/form-data" })
  }

  static getCategory() {
    return axios.get(CONSTANTS.GET_CATEGORY)
  }

  static deleteProductCategory(id) {
    const deleteUrl = CONSTANTS.DELETE_CATEGORY.replace(':id', id);
    return axios.delete(deleteUrl);
  }

}