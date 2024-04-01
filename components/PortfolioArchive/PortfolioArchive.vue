<template>
  <section class="section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <div
            id="filters"
            class="button-group justify-content-center d-flex flex-wrap"
          >
            <button
              class="button first-tab btn btn-sm btn-primary is-checked"
              data-filter="*"
            >
              All
            </button>
            <button
              class="button btn btn-sm btn-primary rounded-0"
              data-filter=".wordpress"
            >
              Wordpress
            </button>
            <button
              class="button btn btn-sm btn-primary rounded-0"
              data-filter=".nuxt"
            >
              Nuxt
            </button>
            <button
              class="button btn btn-sm btn-primary rounded-0"
              data-filter=".webflow"
            >
              Webflow
            </button>
            <button
              class="button btn btn-sm btn-primary rounded-0"
              data-filter=".eleventy"
            >
              Eleventy
            </button>
            <button
              class="button last-tab btn btn-sm btn-primary"
              data-filter=".bootstrap"
            >
              Bootstrap
            </button>
          </div>
        </div>
      </div>
      <div class="iso-wrapper">
        <div
          class="col-lg-4 col-6 mb-4 element-item webflow"
          data-category="webflow"
        >
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/amswell-hotel.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 element-item webflow"
          data-category="webflow"
        >
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/pactFi.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div class="col-lg-4 col-6 mb-4 element-item">
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/reformedtech.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 element-item bootstrap"
          data-category="bootstrap"
        >
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/hoston.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/softlabny.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/videotc.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/smart-property.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/CTFN.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 element-item eleventy"
          data-category="eleventy"
        >
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/marram.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 element-item wordpress"
          data-category="wordpress"
        >
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/toads.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
        <div
          class="col-lg-4 col-6 mb-4 element-item eleventy"
          data-category="eleventy"
        >
          <ScrollProjectCard
            ><img
              src="~/assets/images/portfolio/journey.png"
              class="img-fluid rounded w-100"
              alt="Portfolio"
          /></ScrollProjectCard>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style>
.first-tab {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.last-tab {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.is-checked {
  background-color: #542cb7;
}
</style>
