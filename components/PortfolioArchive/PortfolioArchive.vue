<template>
  <section class="section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <div
            class="btn-group btn-group-toggle justify-content-center d-flex flex-wrap"
            data-toggle="buttons"
          >
            <label class="btn btn-sm btn-primary active">
              <input type="radio" name="shuffle-filter" value="all" />All
            </label>
            <label class="btn btn-sm btn-primary">
              <input
                type="radio"
                name="shuffle-filter"
                value="wordpress"
              />Wordpress
            </label>
            <label class="btn btn-sm btn-primary">
              <input type="radio" name="shuffle-filter" value="nuxt" />Nuxt
            </label>
            <label class="btn btn-sm btn-primary">
              <input
                type="radio"
                name="shuffle-filter"
                value="webflow"
              />Webflow
            </label>
            <label class="btn btn-sm btn-primary">
              <input
                type="radio"
                name="shuffle-filter"
                value="eleventy"
              />Eleventy
            </label>
            <label class="btn btn-sm btn-primary">
              <input
                type="radio"
                name="shuffle-filter"
                value="bootstrap"
              />Bootstrap
            </label>
          </div>
        </div>
      </div>
      <div class="row shuffle-wrapper">
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item"
          data-groups='["design","illustration"]'
        >
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/amswell-hotel.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://www.theameswellhotel.com"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["webflow"]'>
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/pactFi.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a class="btn btn-light btn-sm" href="https://www.pactfi.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["nuxt"]'>
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/reformedtech.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a class="btn btn-light btn-sm" href="https://reformedtech.org/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item"
          data-groups='["bootstrap"]'
        >
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/hoston.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  href="https://devollic.com/hoston/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["nuxt"]'>
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/softlabny.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a class="btn btn-light btn-sm" href="project-single.html"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["nuxt"]'>
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/videotc.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://videotc.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["nuxt"]'>
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/smart-property.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100 d-block"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://smartproperty.xyz/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups='["nuxt"]'>
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/CTFN.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100 d-block"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://ctfn.news/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item illustration"
          data-groups='["eleventy"]'
        >
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/marram.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100 d-block"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://marrammontauk.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item illustration"
          data-groups='["wordpress"]'
        >
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/toads.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100 d-block"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://toadssarl.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item illustration"
          data-groups='["eleventy"]'
        >
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/roger.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100 d-block"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://rogerbarandrestaurant.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item illustration"
          data-groups='["eleventy"]'
        >
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/journey.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100 d-block"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a
                  class="btn btn-light btn-sm"
                  target="_blank"
                  href="https://www.journeyeasthampton.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
