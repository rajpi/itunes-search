// More details regarding config object can be found on https://github.com/axios/axios
import axios from 'axios';


class RootService {
  constructor() {
    const headerData = globals.getHeaders() || {};
    const service = axios.create({
      headers: headerData,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  static handleSuccess(response) {
    return response;
  }

  static handleError(error) {
    return error;
  }

  delete(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'delete';
    this.generateRequest(config, successCallback, errorCallback);
  }

  get(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'get';
    this.generateRequest(config, successCallback, errorCallback);
  }

  patch(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'patch';
    this.generateRequest(config, successCallback, errorCallback);
  }

  post(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'post';
    this.generateRequest(requestConfig, successCallback, errorCallback);
  }

  put(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'put';
    this.generateRequest(requestConfig, successCallback, errorCallback);
  }
}

export {
  RootService as
  default,
};
