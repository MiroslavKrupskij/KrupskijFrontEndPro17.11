document.addEventListener('DOMContentLoaded', function() {
    var categories = document.getElementById('categories');
    var productList = document.getElementById('productList');
    var productInfo = document.getElementById('productInfo');

    categories.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        var category = event.target.dataset.category;
        showProducts(category);
      }
    });

    function showProducts(category) {

      productList.innerHTML = '';

      var products = getProductListByCategory(category);

      products.forEach(function(product) {
        var li = document.createElement('li');
        li.textContent = product.name;
        li.dataset.product = product.id;
        productList.appendChild(li);
      });
    }

    function getProductListByCategory(category) {
      var products = [];
      if (category === 'clothing') {
        products = [
          { id: 'shirt', name: 'Футболка', price: '$10' },
          { id: 'pants', name: 'Штани', price: '$20' },
          { id: 'jacket', name: 'Куртка', price: '$30' }
        ];
      } else if (category === 'electronics') {
        products = [
          { id: 'phone', name: 'Телефон', price: '$500' },
          { id: 'laptop', name: 'Ноутбук', price: '$1000' },
          { id: 'tv', name: 'Телевізор', price: '$700' }
        ];
      } else if (category === 'books') {
        products = [
          { id: 'novel', name: 'Роман', price: '$15' },
          { id: 'biography', name: 'Біографія', price: '$18' },
          { id: 'cookbook', name: 'Кулінарна книга', price: '$20' }
        ];
      }
      return products;
    }

    productList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        var productId = event.target.dataset.product;
        showProductInfo(productId);
      }
    });

    function showProductInfo(productId) {

      var product = getProductById(productId);

      productInfo.innerHTML = `
        <h2>${product.name}</h2>
        <p>Ціна: ${product.price}</p>
        <button class="buy-button">Купити</button>
      `;
      var buyButton = productInfo.querySelector('.buy-button');
      buyButton.addEventListener('click', function() {
        alert('Товар куплений');

        productInfo.innerHTML = '<h2>Інформація про товар</h2><p>Виберіть категорію та товар</p>';
      });
    }

    function getProductById(productId) {
      var product;
      if (productId === 'shirt') {
        product = { name: 'Футболка', price: '$10' };
      } else if (productId === 'pants') {
        product = { name: 'Штани', price: '$20' };
      } else if (productId === 'jacket') {
        product = { name: 'Куртка', price: '$30' };
      } else if (productId === 'phone') {
        product = { name: 'Телефон', price: '$500' };
      } else if (productId === 'laptop') {
        product = { name: 'Ноутбук', price: '$1000' };
      } else if (productId === 'tv') {
        product = { name: 'Телевізор', price: '$700' };
      } else if (productId === 'novel') {
        product = { name: 'Роман', price: '$15' };
      } else if (productId === 'biography') {
        product = { name: 'Біографія', price: '$18' };
      } else if (productId === 'cookbook') {
        product = { name: 'Кулінарна книга', price: '$20' };
      }
      return product;
    }
  });