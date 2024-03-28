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
        <div
          class="col-lg-4 col-6 mb-4 element-item webflow"
          data-category="webflow"
        >
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
        <div class="col-lg-4 col-6 mb-4 element-item">
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
          class="col-lg-4 col-6 mb-4 element-item bootstrap"
          data-category="bootstrap"
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
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
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
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
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
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
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
        <div class="col-lg-4 col-6 mb-4 element-item nuxt" data-category="nuxt">
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
          class="col-lg-4 col-6 mb-4 element-item eleventy"
          data-category="eleventy"
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
          class="col-lg-4 col-6 mb-4 element-item wordpress"
          data-category="wordpress"
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
          class="col-lg-4 col-6 mb-4 element-item eleventy"
          data-category="eleventy"
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
          class="col-lg-4 col-6 mb-4 element-item eleventy"
          data-category="eleventy"
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
    <!-- <div class="grid">
      <div class="element-item transition metal" data-category="transition">
        <h3 class="name">Mercury</h3>
        <p class="symbol">Hg</p>
        <p class="number">80</p>
        <p class="weight">200.59</p>
      </div>
      <div class="element-item metalloid" data-category="metalloid">
        <h3 class="name">Tellurium</h3>
        <p class="symbol">Te</p>
        <p class="number">52</p>
        <p class="weight">127.6</p>
      </div>
      <div
        class="element-item post-transition metal"
        data-category="post-transition"
      >
        <h3 class="name">Bismuth</h3>
        <p class="symbol">Bi</p>
        <p class="number">83</p>
        <p class="weight">208.980</p>
      </div>
      <div
        class="element-item post-transition metal"
        data-category="post-transition"
      >
        <h3 class="name">Lead</h3>
        <p class="symbol">Pb</p>
        <p class="number">82</p>
        <p class="weight">207.2</p>
      </div>
      <div class="element-item transition metal" data-category="transition">
        <h3 class="name">Gold</h3>
        <p class="symbol">Au</p>
        <p class="number">79</p>
        <p class="weight">196.967</p>
      </div>
      <div class="element-item alkali metal" data-category="alkali">
        <h3 class="name">Potassium</h3>
        <p class="symbol">K</p>
        <p class="number">19</p>
        <p class="weight">39.0983</p>
      </div>
      <div class="element-item alkali metal" data-category="alkali">
        <h3 class="name">Sodium</h3>
        <p class="symbol">Na</p>
        <p class="number">11</p>
        <p class="weight">22.99</p>
      </div>
      <div class="element-item transition metal" data-category="transition">
        <h3 class="name">Cadmium</h3>
        <p class="symbol">Cd</p>
        <p class="number">48</p>
        <p class="weight">112.411</p>
      </div>
      <div
        class="element-item alkaline-earth metal"
        data-category="alkaline-earth"
      >
        <h3 class="name">Calcium</h3>
        <p class="symbol">Ca</p>
        <p class="number">20</p>
        <p class="weight">40.078</p>
      </div>
      <div class="element-item transition metal" data-category="transition">
        <h3 class="name">Rhenium</h3>
        <p class="symbol">Re</p>
        <p class="number">75</p>
        <p class="weight">186.207</p>
      </div>
      <div
        class="element-item post-transition metal"
        data-category="post-transition"
      >
        <h3 class="name">Thallium</h3>
        <p class="symbol">Tl</p>
        <p class="number">81</p>
        <p class="weight">204.383</p>
      </div>
      <div class="element-item metalloid" data-category="metalloid">
        <h3 class="name">Antimony</h3>
        <p class="symbol">Sb</p>
        <p class="number">51</p>
        <p class="weight">121.76</p>
      </div>
      <div class="element-item transition metal" data-category="transition">
        <h3 class="name">Cobalt</h3>
        <p class="symbol">Co</p>
        <p class="number">27</p>
        <p class="weight">58.933</p>
      </div>
      <div
        class="element-item lanthanoid metal inner-transition"
        data-category="lanthanoid"
      >
        <h3 class="name">Ytterbium</h3>
        <p class="symbol">Yb</p>
        <p class="number">70</p>
        <p class="weight">173.054</p>
      </div>
      <div class="element-item noble-gas nonmetal" data-category="noble-gas">
        <h3 class="name">Argon</h3>
        <p class="symbol">Ar</p>
        <p class="number">18</p>
        <p class="weight">39.948</p>
      </div>
      <div class="element-item diatomic nonmetal" data-category="diatomic">
        <h3 class="name">Nitrogen</h3>
        <p class="symbol">N</p>
        <p class="number">7</p>
        <p class="weight">14.007</p>
      </div>
      <div
        class="element-item actinoid metal inner-transition"
        data-category="actinoid"
      >
        <h3 class="name">Uranium</h3>
        <p class="symbol">U</p>
        <p class="number">92</p>
        <p class="weight">238.029</p>
      </div>
      <div
        class="element-item actinoid metal inner-transition"
        data-category="actinoid"
      >
        <h3 class="name">Plutonium</h3>
        <p class="symbol">Pu</p>
        <p class="number">94</p>
        <p class="weight">(244)</p>
      </div>
    </div> -->
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
