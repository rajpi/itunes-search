<!--
Itunes-search component provides search input for the user to enter and search results
Itegration with custom Itunes service
-->

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
  background: #f1f2f4;
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
  color: #32476e;
}

.heading-section {
  background-color: @primary-color;
  padding-left: 30px;
  color: @secondary-color;
  margin-top: -20px;
  padding: 20px;
  margin-bottom: 30px;
  .page-heading {
    font-size: 32px;
    color: white;
  }
  .page-subheading {
    font-size: 21px;
    margin: -0px;
    //padding: 10px;
  }
}

button.fav {
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
  height: 100%;

  .search-input-holder {
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    display: inline-block;
    .form-control {
      // width: 60%;
    }
  }
  .search-container {
    height: 300px;
    padding: 10px;
    .result-notification {
      padding-left: 20px;
    }
    .category-results {
      min-height: 300px;
      padding: 10px;
      margin-bottom: 30px;
      .category-heading {
        padding: 5px;
        text-transform: capitalize;
      }
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
          // border: 2px solid black;
          .result {
            .tile-icon {
              float: right;
              .fav {
                position: absolute;
                bottom: 0;
                left: 0;
                top: 0;
                margin-bottom: 0;
                height: 50px;
                line-height: 16px;
                border-radius: 0 0 4px 4px;
                max-height: 30px;
                width: 30px;
                margin-top: 10px;
                margin-left: 15px;
              }
              .fav.active svg #fill {
                position: absolute;
                z-index: 10;
                transform-origin: 20% 20%;
                animation: heartBeat 0.5s 1 cubic-bezier(0.16, 1.32, 0.91, 1.26);
                animation-fill-mode: none;
                animation-fill-mode: forwards;
                fill: @primary-color;
              }
            }
            .tile-icon svg.heart {
              fill: #dcd8d5;
            }
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
                  height: 200px;
                  width: 200px;
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
      text-align: center;
      background: white;
      border-radius: 4px;
      padding: 10px;
      padding-top: 20px;
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

