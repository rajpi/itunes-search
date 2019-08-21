/**
 * Common variables and global methods
 */

const globals = {

  storage: {
    getData(key) {
      const data = JSON.parse(localStorage.getItem(key));
      return data;
    },
    setData(key, data, isExisting) {
      if (isExisting) {
        let itemsArray = [];
        const storageData = JSON.parse(localStorage.getItem(key));
        if (!storageData) {
          itemsArray.push(data);
          localStorage.setItem(key, JSON.stringify(itemsArray));
        } else {
          storageData.push(data);
          localStorage.setItem(key, JSON.stringify(storageData));
        }
      } else {
        localStorage.setItem(key, JSON.stringify(data));
      }
    },
    removeData(key) {
      localStorage.removeItem(key);
    }
  }
}

export default globals;
