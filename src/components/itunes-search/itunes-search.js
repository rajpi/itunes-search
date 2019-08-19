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
      swiperSlides: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    searchDataHandler(data) {
      alert(data);
    },
    searchDataErrorHandler(err) {
      console.log("search returned error", err);
    }
  },
  mounted() {
    console.log("calling Mounted");
    const requestConfig = {};
    let searchTerm = 'Titanic';
    alert(searchTerm);
    this.itunesService.getSearchData(requestConfig, this.searchDataHandler,
      this.searchDataErrorHandler, searchTerm);
    // // this.swiperSlides.push();
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
