import RootService from './root-service';
import globals from './globals';

class FavoriteService extends RootService {

  getFavoriteData() {
    return globals.storage.getData('favItems') || [];
  }
  saveFavorite(favItem) {
    globals.storage.setData('favItems', favItem, true);
  }
  removeFavorite(unfavItem) {
    var favItems = globals.storage.getData('favItems');
    if (favItems) {
      favItems.forEach((favItem, indx) => {
        if (favItem.id === unfavItem.id) {
          favItems.splice(indx, 1);
          globals.storage.setData('favItems', favItems);
          return;
        }
      });
    }
  }
}
export {
  FavoriteService as
  default
};
