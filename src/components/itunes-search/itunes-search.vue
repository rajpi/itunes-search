<template src="./itunes-search.html"></template>
<script src="./itunes-search.js"></script>
<!-- <style src="./itunes-search.less" lang="less"></style> -->

<style lang="less">
/** break points **/
@screen-lg-min: 1200px;
@screen-md-min: 1200px;
@screen-sm-min: 768px;
@screen-xs-min: 360px;
/** colors **/
@primary-color: #32476e;
@secondary-color: #cecece;

/** sizes **/
@font-family-poppins: "Poppins", sans-serif;
@font-weight-regular: 400;
@font-size-h3: 21px;
@font-size-large: 16px;
@letter-spacing-default: 0.15px;

/** GLobal styles**/
body {
  font-family: @font-family-poppins;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button.favorite {
  display: block;
  outline: 0;
  padding: 0;
  border: none;
  background: none;
  overflow: visible;
  position: relative;
}

/* Itunes search page styles */
.itunes-search {
  background-color: antiquewhite;
  height: 100%;
  .md-subhead {
    color: darkblue;
  }
  .search-container {
    height: 300px;
    padding: 10px;
    margin-top: 50px;
    .category-results {
      min-height: 300px;
      padding: 10px;
      margin-bottom: 30px;
      .result-container {
        h3 {
          font-size: @font-size-large;
          letter-spacing: @letter-spacing-default;
          line-height: 19px;
          font-weight: @font-weight-regular;
          padding-left: 2%;

          @media (min-width: @screen-sm-min) {
            font-size: @font-size-h3;
            line-height: 25px;
          }

          @media (min-width: @screen-md-min) {
            padding-left: 3%;
          }
        }
        .result-slide {
          min-height: 300px;
          border: 2px solid black;
          .result {
            .result-artcover-container {
              margin: 0 auto;
              width: 80%;
              width: 144px;
              @media (min-width: @screen-sm-min) {
                width: 151px;
              }
              @media (min-width: @screen-md-min) {
                width: 215px;
                .result-artcover {
                  height: 150px;
                  width: 150px;
                  padding: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  /* Swiper Classes customization */
  .swiper-container {
    .swiper-wrapper {
      margin: 0 auto;
    }
    .swiper-slide {
      justify-content: center;
      .image-tile {
        img {
          margin: 0 auto;
          border: @secondary-color;
          padding: 24px;
        }
      }
    }
  }
}
</style>

