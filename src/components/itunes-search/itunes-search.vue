<template src="./itunes-search.html"></template>
<script src="./itunes-search.js"></script>
<!-- <style src="./itunes-search.less" lang="less"></style> -->

<style lang="less">
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
        .result-slide {
          min-height: 300px;
          border: 2px solid black;
          .result {
            .result-artcover-container {
              margin: 0 auto;
              width: 80%;
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
</style>

