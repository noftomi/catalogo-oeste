
  let  productos









  fetch("https://retoolapi.dev/7BHjeh/mock_cards")
  .then(res=> res.json())
  .then(response => {
    const cardProductsInfo = document.getElementById('cardProductsInfo') 
    console.log(cardProductsInfo, "L60")
    cardProductsInfo.innerHTML = "" 


    productos = response;
     console.log(productos)
     productos.forEach(producto=> {
      const div = document.createElement('div')
      div.classList.add('card-container')
      
      div.innerHTML = 
     `
      <div class="product-img-container"><img src="./public/assets/filtro-prueba.jpg" alt="filtro-mfilt" height="180px" width="180px"></div>

      <div class="product-info-container">

        <span class="product-info-name">
          ${producto.Productos}
        </span>
        <span class="product-info-price">
          ${producto.Precio}
        </span>  
        <span class="product-info-desc">
          ${producto.Descripción}
        </span>
      </div>
    
      <div class="product-more-info-container">
        <button class="product-more-info-b">
          Más info
        </button>
      </div>
     `
     cardProductsInfo.appendChild(div)

    //  console.log(`ID: ${producto.id}`);
    //  console.log(`ID: ${producto.Productos}`);
    
      })
  

  
})
const fetchButton = document.getElementById('fetchButton')
const searchInput = document.getElementById('searchInput');
fetchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = productos.filter(item => 
    item.Productos.toLowerCase().includes(searchTerm)
  );
  cardProductsInfo.innerHTML = ""
  filteredData.forEach(producto=> {
      const div = document.createElement('div')
      div.classList.add('card-container')
      
      div.innerHTML = 
     `
      <div class="product-img-container"><img src="./public/assets/filtro-prueba.jpg" alt="filtro-mfilt" height="180px" width="180px"></div>

      <div class="product-info-container">

        <span class="product-info-name">
          ${producto.Productos}
        </span>
        <span class="product-info-price">
          ${producto.Precio}
        </span>  
        <span class="product-info-desc">
          ${producto.Descripción}
        </span>
      </div>
    
      <div class="product-more-info-container">
        <button class="product-more-info-b">
          Más info
        </button>
      </div>
     `
     cardProductsInfo.appendChild(div)

    //  console.log(`ID: ${producto.id}`);
    //  console.log(`ID: ${producto.Productos}`);
    
      })
  
})

