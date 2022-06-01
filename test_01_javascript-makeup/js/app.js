// elementos
const productElement = document.querySelector(".catalog");
const filterBrand = document.getElementById("filter-brand");
const filterType = document.getElementById("filter-type");
const filterName = document.getElementById("filter-name");
const itemNumbers = document.getElementById("item-numbers");
const comboSort = document.getElementById("sort-type");

// variaveis
let productBrands = [];
let productTypes = [];
let products = [];
let productsChild = [];

// eventos
filterBrand.addEventListener("change", loadFilters);
filterType.addEventListener("change", loadFilters);
filterName.addEventListener("keyup", loadFilters);
comboSort.addEventListener("change", (e) => {
  loadProducts(products, comboSort.value);
  loadFilters();
});

// conceito de IIFE
// carregar api
(async () => {
  let response = await fetch("data/products.json");
  loadProducts(await response.json(), comboSort.value);
})();

// carregar produtos
function loadProducts(json, sortType) {
  let view = sortProduct(json, sortType)
    .map((product) => productItem(product))
    .join("");
  productElement.innerHTML = view;
  loadComboOptions(filterBrand, productBrands.uniq().sort());
  loadComboOptions(filterType, productTypes.uniq().sort());

  productsChild = Array.from(document.querySelectorAll(".product"));

  products = json;
}

// combo
function loadComboOptions(combo, data) {
  data.map((option) => combo.insertAdjacentHTML("beforeend", `<option>${option}</option>`));
}

// código html do produto
function productItem(product) {
  // vetores com marcas e tipos
  productBrands = productBrands.concat([product.brand]);
  productTypes = productTypes.concat([product.product_type]);

  return `<div class="product" data-name="${product.name}" data-brand="${product.brand}" data-type="${
    product.product_type
  }" tabindex="${product.id}">
    <figure class="product-figure">
      <img src="${product.image_link}" width="215" height="215" alt="${
    product.name
  }" onerror="javascript:this.src='img/unavailable.png'">
    </figure>
    <section class="product-description">
      <h1 class="product-name">${product.name}</h1>
      <div class="product-brands">
        <span class="product-brand background-brand">${product.brand}</span>
        <span class="product-brand background-price">R$ ${(+product.price * 5.5).toFixed(2)}</span>
      </div>
    </section>
    <section class="product-details">
      ${loadDetails(product)}
    </section>
  </div>`;
}

// código html do detalhe do produto
function loadDetails(product) {
  let details = ["brand", "price", "product_type", "category", "rating"];

  return Object.entries(product)
    .filter(([name, value]) => details.includes(name))
    .map(([name, value]) => {
      return `
        <div class="details-row">
          <div>${name}</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width= 250">${value}</div>
          </div>
        </div>
        `;
    })
    .join("");
}

// ordenador dos produtos
function sortProduct(products, sortType) {
  switch (sortType) {
    case "Melhor Avaliados":
      return products.sort((a, b) => (a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0));
    case "Menores Preços":
      return products.sort((a, b) => (+a.price > +b.price ? 1 : +a.price < +b.price ? -1 : 0));
    case "Maiores Preços":
      return products.sort((a, b) => (+a.price > +b.price ? -1 : +a.price < +b.price ? 1 : 0));
    case "A-Z":
      return products.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    case "Z-A":
      return products.sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0));
  }
}

// filtros
function loadFilters() {
  const name = filterName.value;
  const brand = filterBrand.value;
  const type = filterType.value;

  let itensQuantity = 0;
  productsChild.forEach((product) => {
    if (validateProduct(product, name, brand, type)) {
      product.style.display = "block";
      itensQuantity++;
    } else {
      product.style.display = "none";
    }
  });
  itemNumbers.innerHTML = itensQuantity;
}

// validar produtos
function validateProduct(product, name, brand, type) {
  const search = new RegExp(name, "i");
  const checkName = search.test(product.dataset.name);
  const checkBrand = product.dataset.brand.includes(brand);
  const checkType = product.dataset.type.includes(type);

  return checkName && checkBrand && checkType;
}

// prototype
Array.prototype.uniq = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};
