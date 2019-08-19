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
      itunesService: new ItunesService(),
      msg: 'Search application',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
    }
  },
  mounted() {
    console.log("calling Mounted");
    const requestConfig = {};
    let searchTerm = 'Titanic';
    this.itunesService.getSearchData(requestConfig, this.searchDataHandler,
      this.searchDataErrorHandler, searchTerm);
    // this.swiperSlides.push();
  },
  created() {


  },
  render() {
    // if (!this.loaded) {
    //   return this.$slots.loading[0]
    // }

    // return this.$scopedSlots.default({
    //   response: {},
    // })
  },
}

export default itunesSearch;
