import {
  swiper,
  swiperSlide,
} from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';
import ItunesService from '../services/itunes-service';

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
      itunesService: new ItunesService(),
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
        }
      },
    }
  },
  methods: {
    searchDataHandler(response) {
      if (response.data && response.data) {
        // console.log(response.data.data.mediaResults);
        this.searchResults = response.data.data.mediaResults;
        console.log(this.searchResults);
      }

    },
    searchDataErrorHandler(err) {
      console.log("search returned error", err);
    },
    searchData() {
      console.log("calling Mounted");
      const requestConfig = {};
      //let searchTerm = 'art';
      this.itunesService.getSearchData(requestConfig, this.searchDataHandler,
        this.searchDataErrorHandler, this.searchTerm);
    }
  },
  mounted() {

  },
  created() {


  },
  render() {

  },
}

export default itunesSearch;
