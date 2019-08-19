import RootService from './root-service';

class ItunesService extends RootService {

  getSearchData(requestConfig, successCallback, errorCallback, searchTerm) {
    const config = requestConfig;
    const endpoint = 'https://itunes-service.herokuapp.com/search?term=';
    config.url = endpoint + encodeURI(searchTerm);
    // alert(config.url);
    this.get(config, successCallback, errorCallback);
  }
}
export {
  ItunesService as
  default
};
