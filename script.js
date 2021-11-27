let data = [];
document.addEventListener("DOMContentLoaded", () => {
  const createProduct = (item) => {
    let singleProduct = document.createElement("div");
    singleProduct.className = "design";
    singleProduct.innerHTML = `
    <h3 style="text-align:center">${item.name}</h3>
    <h4>${item.brand}</h4>
    <h4>Price : $${item.price}</h4>
    <img src="${item.api_featured_image}" width="300" height="300" alt="product image" /> <br />
    <a href="${item.product_link}" target="_blank">Click here to Know more</a>
    <p>${item.description}</p>
    `;
    document.getElementById("container").appendChild(singleProduct);
  };

  const allProducts = (products) => {
    document.getElementById("container").innerHTML = "";
    products.forEach((product) => {
      createProduct(product);
    });
  };

  fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then((res) => res.json())
    .then((result) => {
      data = result.slice(0, 10);
      console.log(data);
      allProducts(data);
    });
});
