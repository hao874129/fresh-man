import React from "react"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function SimpleContainer() {
  return (
    <div style={{ minHeight: '100vh', padding: "10vh 0" }}>
      <Container>
        {/* <!-- HEADER --> */}
        <div className="main-bg">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active banner-main-img bg-cover banner-img-1">
              </div>
              <div className="carousel-item banner-main-img bg-cover banner-img-2">
              </div>
              <div className="carousel-item banner-main-img bg-cover banner-img-3">
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="header">
            <h1 className="text-hide">2HOME FURNITURE</h1>
            <div className="row header-box-section d-flex justify-content-center">
              <div className="col-10">
                <div className="row">
                  <a href="#" className="col-4 header-box-wrap d-flex justify-content-center align-items-center"
                    onClick={(e) => (e.preventDefault())}>
                    <span className="header-box-text h4 font-weight-bold">蓋布袋吃土豆</span>
                    <div className="header-box-cover"></div>
                    <div className="header-box-img bg-cover header-box-1">
                    </div>
                  </a>
                  <a href="#" className="col-4 header-box-wrap d-flex justify-content-center align-items-center header-box-border"
                    onClick={(e) => (e.preventDefault())}>
                    <span className="header-box-text h4 font-weight-bold">海味肉粽</span>
                    <div className="header-box-cover"></div>
                    <div className="header-box-img bg-cover header-box-2">
                    </div>
                  </a>
                  <a href="#" className="col-4 header-box-wrap d-flex justify-content-center align-items-center"
                    onClick={(e) => (e.preventDefault())}>
                    <span className="header-box-text h4 font-weight-bold">一路發綠豆沙</span>
                    <div className="header-box-cover"></div>
                    <div className="header-box-img bg-cover header-box-3">
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
      <Box>
        {/* <!-- 為什麼選擇了製作傢俱 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-1"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    最好是艷陽天 ， 約在海邊不散不見 ， <br />
                    <br />
                    一定有人爽約 ， 喝太多起不來之類 ， <br />
                    <br />
                    到底 。
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    壹點參伍 －<br />
                    <span className="mt-4">天生的血繼限界。</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 為什麼一定要購買傢俱 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-2"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    唐山過台灣 ， 沒半點錢 ， <br />
                    <br />
                    剎猛打拚耕山耕田 ， 咬薑啜醋幾十年 ，<br />
                    <br />
                    毋識埋怨 。
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    。。。 －<br />
                    <span className="mt-4">。。。。。。。？</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 為什麼選擇了製作傢俱 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-3"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    賺大錢就是大爺 ， 玉蘭卻不買 ， 沒人同情賣花的阿伯 。<br />
                    <br />
                    正義猶如謊言 ， 真理萬化千變 ， <br />
                    <br />
                    我們所相信的 ， 埋在瓦礫堆 。 <br />
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    文字是他的武器 －<br />
                    <span className="mt-4">無盡彈藥藏在一字一句</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 為什麼一定要購買傢俱 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-4"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    還是不習慣講 Skr <br />
                    <br />
                    最死忠的科粉 ， 習慣不了詹姆士穿紫色 。
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    你放棄的那刻 －<br />
                    <span className="mt-4">就是別人獲勝的時刻。</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 好的傢俱是不需要理由的 --> */}
        <section className="my-5 my-8 text-main-darker d-flex flex-column align-items-center">
          <h2 className="vertical-content-text verticla-title d-block font-weight-bold">
            這裡有一行字 －<br />
            <span className="mt-5">是完全不需要看的 <i className="fas fa-smile-wink"></i></span>
          </h2>
        </section>
      </Box>
    </div>
  )
}