import {
  swiper,
  swiperSlide,
} from 'vue-awesome-swiper';

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
      itunesService: new ItunesService(),
      favoriteService: new FavoriteService(),
      msg: 'Search application',
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      sliderOptions: {
        desktop: {
          slides: 4,
          spaceAllowed: 0,
        },
        tablet: {
          slides: 4,
          spaceAllowed: 16,
        },
        mobile: {
          slides: 2,
          spaceAllowed: 16,
        },
      },
    }
  },
  methods: {
    searchDataHandler(response) {
      if (response.data && response.data) {
        this.searchResults = response.data.data.mediaResults;

        for (var key in this.searchResults) {
          this.searchResults[key].forEach(searchItem => {
            this.favoriteItems.forEach(favItem => {
              console.log(searchItem.id === favItem.id);
              if (searchItem.id === favItem.id) {
                searchItem.isActive = true;
              }
            })

          });
        }
      }

    },
    searchDataErrorHandler(err) {
      console.log("search returned error", err);
    },
    searchData() {
      const requestConfig = {};
      this.itunesService.getSearchData(requestConfig, this.searchDataHandler,
        this.searchDataErrorHandler, this.searchTerm);
    },
    toggleFavorite(item) {
      item.isActive = !item.isActive;
      console.log("item", item);
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
