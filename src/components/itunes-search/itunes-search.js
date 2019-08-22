import {
  swiper,
  swiperSlide,
} from 'vue-awesome-swiper';
import Vue from 'vue';
import 'swiper/dist/css/swiper.css';
import ItunesService from '../services/itunes-service';
import FavoriteService from '../services/favorite-service';

const itunesSearch = {
  name: 'itunes-search',
  props: {},
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      searchResults: {},
      searchTerm: '',
      isActive: false,
      favoriteItems: [],
      showSpinner: false,
      itunesService: new ItunesService(),
      favoriteService: new FavoriteService(),
      heading: 'Itunes Sweet Search',
      subHeading: 'Search something today',
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
        // loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          // when window width is <= 320
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 767
          767: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is <= 1024
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  methods: {
    /**
     * Search response handler
     * @param  {Object} response response object
     */
    searchDataHandler(response) {
      if (response.data && response.data) {
        this.showSpinner = false;
        this.searchResults = response.data.data.mediaResults;

        // Getting favroites that user has selected previously
        for (var key in this.searchResults) {
          this.searchResults[key].forEach(searchItem => {
            for (let favItem of this.favoriteItems) {
              if (searchItem.id === favItem.id) {
                // searchItem.isActive = true;
                this.$set(searchItem, 'isActive', true);
                break;
              } else {
                // searchItem.isActive = false;
                this.$set(searchItem, 'isActive', false);
              }
            }
          });
        }
      }

    },

    /**
     * Search Response Error handler
     * @param  {[type]} err [description]
     * @return {[type]}     [description]
     */
    searchDataErrorHandler(err) {
      console.log("search returned error", err);
    },
    /**
     * Search button handler
     * @return {[type]} [description]
     */
    searchData() {
      const requestConfig = {};
      this.showSpinner = true;
      this.itunesService.getSearchData(requestConfig, this.searchDataHandler,
        this.searchDataErrorHandler, this.searchTerm);
    },

    /**
     * Toggle Favorite handler
     * @param  {Object} item Search result item
     */
    toggleFavorite(item) {
      item.isActive = !item.isActive;
      // Changing the state
      this.$set(item, 'isActive', item.isActive);
      if (item.isActive) {
        this.favoriteService.saveFavorite(item);
      } else {
        this.favoriteService.removeFavorite(item);
      }
    },
  },

  mounted() {
    this.favoriteItems = this.favoriteService.getFavoriteData();
  },
  created() {


  },
  render() {

  },
}

export default itunesSearch;
