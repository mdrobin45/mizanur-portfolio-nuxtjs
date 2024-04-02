/***********
ON SCROLL NAV ANIMATION -> START
***********/
window.addEventListener("scroll", function () {
  const navigation = document.querySelector(".navigation");
  if (document.documentElement.scrollTop > 100) {
    navigation.classList.add("nav-bg");
  } else {
    navigation.classList.remove("nav-bg");
  }
});

/***********
PORTFOLIO ISOTOPE -> START
***********/
document.addEventListener("DOMContentLoaded", function () {
  // init Isotope
  const grid = document.querySelector(".iso-wrapper");
  const iso = new Isotope(grid, {
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  // filter functions
  const filterFns = {
    numberGreaterThan50: function () {
      const number = parseInt(this.querySelector(".number").textContent, 10);
      return number > 50;
    },
    ium: function () {
      const name = this.querySelector(".name").textContent;
      return name.match(/ium$/);
    },
  };

  // bind filter button click
  const filtersElem = document.querySelector("#filters");
  filtersElem.addEventListener("click", function (event) {
    let filterValue = event.target.getAttribute("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  const buttonGroups = document.querySelectorAll(".button-group");
  buttonGroups.forEach(function (buttonGroup) {
    buttonGroup.addEventListener("click", function (event) {
      buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
      event.target.classList.add("is-checked");
    });
  });
});
