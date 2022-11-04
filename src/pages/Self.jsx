import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

export default function SimpleContainer() {
  return (
    <div style={{ minHeight: "100vh", padding: "10vh 0" }}>
      <Container>
        {/* <!-- HEADER --> */}
        {/* <div className="main-bg">
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
        </div> */}
      </Container>

      <Box>
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex justify-content-start vertical-content px-2">
                  <h2 className="text-main-darker section-over d-block font-weight-bold">
                    －黃隆豪－<br />
                    <span className="mt-4">EN Huang</span>
                  </h2>
                  <p className="text-main-color py-5 py-4">
                    -Age: 23|1998/12/9 <br />
                    <br />
                    -Education: NYUST<br />
                    <br />
                    -Location: Taichung,Taiwan
                  </p>
                </div>
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img me-img-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5 my-8 text-main-darker d-flex flex-column align-items-center">
          <h2 className="vertical-content-text verticla-title d-block font-weight-bold">
            You can&apos;t connect the －<br />
            <span className="mt-5">
              dots looking forward <i className="fas fa-smile-wink"></i>
            </span>
          </h2>
        </section>

        {/* <!-- 基礎前端技能 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-1"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    Javascript。 Typescript。<br />
                    <br />
                    AJAX。 RESTful API。 Axios 套件。 <br />
                    <br />
                    HTML。 RWD設計。 <br />
                    <br />
                    CSS。 SASS。 SCSS。
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    基礎前端技能 －<br />
                    <span className="mt-4">Basic F2E Skills </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ＪＳ框架--> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-2"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    React。 <br />
                    <br />
                    Vue。
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    ＪＳ框架 －<br />
                    <span className="mt-4">JS Framework </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ＵＩ框架 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-3"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    Bootstrap。 <br />
                    <br />
                    Material-UI。
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    ＵＩ框架 －<br />
                    <span className="mt-4">UI Framework </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--  其他技能 --> */}
        <section className="section my-9">
          <div className="bg-main-lighter">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-6 section-over">
                  <div className="bg-cover h-100 section-self-img self-img-4"></div>
                </div>
                <div className="col-6 d-flex justify-content-end vertical-content px-2">
                  <p className="text-main-color vertical-content-text py-5 py-4">
                    C。 Java。 <br />
                    <br />
                    Python。 R Language。 <br />
                    <br />
                    XScript。 SQL。 <br />
                    <br />
                  </p>
                  <h2 className="text-main-darker vertical-content-text section-over verticla-title d-block font-weight-bold">
                    其他技能 －<br />
                    <span className="mt-4">Other Skills </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5 my-8 text-main-darker d-flex flex-column align-items-center">
          <h2 className="vertical-content-text verticla-title d-block font-weight-bold">
            You can only connect －<br />
            <span className="mt-5">
              them looking backwards <i className="fas fa-smile-wink"></i>
            </span>
          </h2>
        </section>
      </Box>
    </div>
  )
}
