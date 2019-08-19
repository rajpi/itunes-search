// More details regarding config object can be found on https://github.com/axios/axios
import axios from 'axios';
import {
  globalEventBus
} from '../../modules/event-bus';

class RootService {
  constructor() {
    const headerData = {};
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

  generateRequest(requestConfig, successCallback, errorCallback) {
    return this.service(requestConfig)
      .then(
        response => successCallback(response),
        (error) => {
          if (!(error.response && error.response.status === httpStatusCodes.unauthorized)) {
            // Do something
          }
          if (!error.response || !error.response.data) {
            globalEventBus.$emit('service-error');
          }
          errorCallback(error);
        },
      );
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
