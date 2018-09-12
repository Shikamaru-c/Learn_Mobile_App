<template>
  <div class="all">
    <div class="first-image">
      <img src="https://gold-cdn.xitu.io/v3/static/img/new-year-mobilex.4945945.png">
    </div>
    <ul class="brochures-wrapper">
      <li class="brochure">
        <div class="cover">
          <img src="https://user-gold-cdn.xitu.io/2017/12/19/1606e20aea39c319?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1">
        </div>
        <div class="recommend">
          <h3 class="title">详解 Laravel 源码中优秀的设计模式</h3>
          <h4 class="author">有明</h4>
          <div class="footer">
            <span class="section">13小节</span>
            <span class="purchase-quantity">375人已购买</span>
          </div>
          <div class="price">
            <span class="origin-price"><a>￥19.9</a></span>
            <span class="discount"><a>春节立减7.96元</a></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .brochures {
    .first-image {
      width: 100%;
      border-bottom: 1px solid rgba(7, 17, 27, .1);
      img {
        width: 100%;
      }
    }
    .brochures-wrapper {
      .brochure {
        position: relative;
        display: flex;
        padding: 20px 12px;
        border-bottom: 1px solid rgba(7, 17, 27, .1);
        .cover {
          width: 60px;
          margin-right: 16px;
          img {
            width: 100%;
            box-shadow: 5px 5px 8px #ccc;
          }
        }
        .recommend {
          flex: 1;
          .title {
            width: 80%;
            line-height: 20px;
          }
          .author {
            line-height: 30px;
            font-weight: 500;
            font-size: 14px;
          }
          .footer {
            font-size: 14px;
            color: #999;
            span:not(:last-child)::after {
              content: '·';
              margin-left: 5px;
            }
          }
          .price {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            right: 12px;
            bottom: 20px;
            .origin-price {
              display: inline-block;
              height: 30px;
              line-height: 30px;
              padding: 0 15px;
              border-radius: 15px;
              background: #f0f7ff;
              a {
                font-size: 14px;
                color: #07f;
              }
            }
            .discount {
              position: relative;
              display: inline-block;
              margin-top: 5px;
              padding: 4px;
              background: #ff5e41;
              &::after {
                position: absolute;
                top: -10px;
                right: 28px;
                display: block;
                content: '';
                border: 5px solid;
                border-color: transparent transparent #ff5e41 transparent;
              }
              a {
                font-size: 14px;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>
