document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchAndProcessCSV();

products.forEach(product=> {
      const div = document.createElement('div')
      div.classList.add('card-container')
        
      div.innerHTML = 
     `
      <div class="product-img-container"><img src="./public/assets/filtro-prueba.jpg" alt="filtro-mfilt" height="180px" width="180px"></div>
  
      <div class="product-info-container">
  
        <span class="product-info-name">
          ${product.productName}
        </span>
        <span class="product-info-price">
          ${product.price}
        </span>  
        <span class="product-info-desc">
          ${product.description}
        </span>
      </div>
      
      <div class="product-more-info-container">
        <button class="product-more-info-b">
          Más info
        </button>
      </div>
     `
     cardProductsInfo.appendChild(div)});

console.log('productsGoogleSheet', products)})