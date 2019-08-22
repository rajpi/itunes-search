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
@primary-color: #2d2d2d;
@secondary-color: #cecece;
@fav-icon-fill-color: #dc143c;

/** sizes **/
@font-family-poppins: "Poppins", sans-serif;
@font-weight-regular: 400;
@font-size-h3: 18px;
@font-size-large: 16px;
@letter-spacing-default: 0.15px;

/** GLobal styles**/
body {
  font-family: @font-family-poppins;
  background: #fafafa;
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
  color: #2d2d2d;
}

.header-section {
  .header-top-section {
    background-color: @primary-color;
    height: 50px;
    // margin-top: -20px;
    margin-bottom: 30px;
    width: 100%;
    .header-logo {
      margin-left: 30px;
      // width: 16px;
      // height: 20px;
      // background-color: red;
    }
  }
  .page-heading {
    margin-left: 30px;
    font-size: 28px;
    color: #474747;
  }
  .page-subheading {
    margin-left: 30px;
    font-size: 21px;
    margin: 0px;
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

.loader {
  width: 70px;
  height: 70px;
  margin: 40px auto;
  opacity: 1;
}
.loader p {
  font-size: 16px;
  color: @primary-color;
}
.loader .loader-inner {
  display: inline-block;
  width: 15px;
  border-radius: 15px;
  background: @primary-color;
}
.loader .loader-inner:nth-last-child(1) {
  -webkit-animation: loading 1s 1s infinite;
  animation: loading 1s 1s infinite;
}
.loader .loader-inner:nth-last-child(2) {
  -webkit-animation: loading 0.6s 0.5s infinite;
  animation: loading 0.6s 0.5s infinite;
}
.loader .loader-inner:nth-last-child(3) {
  -webkit-animation: loading 0.8s 0s infinite;
  animation: loading 0.8s 0s infinite;
}
@-webkit-keyframes loading {
  0% {
    height: 15px;
  }
  50% {
    height: 35px;
  }
  100% {
    height: 15px;
  }
}
@keyframes loading {
  0% {
    height: 15px;
  }
  50% {
    height: 35px;
  }
  100% {
    height: 15px;
  }
}

.loader-container {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(47, 47, 47, 0.1);
  top: 0;
  padding-top: 250px;
  z-index: 999;
}

.loader-container.active {
  display: block;
}

/* Itunes search page styles */
.itunes-search {
  height: 100%;

  .search-input-holder {
    width: 100%;
    padding: 15px;
    margin: 0 auto;
    display: inline-block;
    .search-btn {
      background-color: @primary-color;
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
                animation-fill-mode: forwards;
                fill: @fav-icon-fill-color;
              }
              .fav.active svg #heart-outline {
                stroke: @fav-icon-fill-color;
              }
            }
            .tile-icon svg.heart {
              // fill: #dcd8d5;
            }
            .result-artcover-container {
              margin: 0 auto;
              width: 80%;
              width: 144px;
              @media (min-width: @screen-sm-min) {
                width: 150px;
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

