<template>
  <section id="portfolio" class="section scroll-top">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Portfolio</h2>
        </div>
      </div>
      <ScrollProjectCard src="~/assets/images/portfolio/mountain.png" />
      <div class="row shuffle-wrapper">
        <div class="col-lg-4 col-6 mb-4 shuffle-item">
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
        <div class="col-lg-4 col-6 mb-4 shuffle-item">
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
        <div class="col-lg-4 col-6 mb-4 shuffle-item">
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
        <div class="col-lg-4 col-6 mb-4 shuffle-item">
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
        <div class="col-lg-4 col-6 mb-4 shuffle-item">
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
        <div class="col-lg-4 col-6 mb-4 shuffle-item">
          <div class="position-relative rounded hover-wrapper">
            <img
              src="~/assets/images/portfolio/dokanepos.png"
              alt="portfolio-image"
              class="img-fluid rounded w-100"
            />
            <div class="hover-overlay">
              <div class="hover-content">
                <a class="btn btn-light btn-sm" href="https://dokanepos.com/"
                  >view project</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/portfolio">
        <div class="text-center mt-5 cursor-pointer">
          <button class="btn btn-primary">View More</button>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
// import demo from '~/assets/images/portfolio/mountain.png';

</script>
