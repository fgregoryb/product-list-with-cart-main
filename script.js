var products = [
  {
    "photo": "assets/images/image-waffle-desktop.jpg",
    "name": "Waffle",
    "name2": "Waffle with Berries",
    "price": 6.50,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-creme-brulee-desktop.jpg",
    "name": "Crème Brûlée",
    "name2": "Vanilla Bean Crème Brûlée",
    "price": 7.00,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-macaron-desktop.jpg",
    "name": "Macaron",
    "name2": "Macaron Mix of Five",
    "price": 8.00,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-tiramisu-desktop.jpg",
    "name": "Tiramisu",
    "name2": "Classic Tiramisu",
    "price": 5.50,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-baklava-desktop.jpg",
    "name": "Baklava",
    "name2": "Pistachio Baklava",
    "price": 4.00,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-meringue-desktop.jpg",
    "name": "Pie",
    "name2": "Lemon Meringue Pie",
    "price": 5.00,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-cake-desktop.jpg",
    "name": "Cake",
    "name2": "Red Velvet Cake",
    "price": 4.50,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-brownie-desktop.jpg",
    "name": "Brownie",
    "name2": "Salted Caramel Brownie",
    "price": 5.50,
    "active": false,
    "quantity":0
  },
  {
    "photo": "assets/images/image-panna-cotta-desktop.jpg",
    "name": "Panna Cotta",
    "name2": "Vanilla Panna Cotta",
    "price": 6.50,
    "active": false,
    "quantity":0
  }
]

const selectYourProduct = {
  data(){
    return {
      products: window.products
    }
  },methods: {
      toggleProduct(product) {
        // Ativa o produto apenas se não estiver ativo
        if (!product.active) {
          product.active = true;
        }
      },
      total: function () {
        var total = 0;

        this.products.forEach(element => {
          if(element.active){
            total += element.quantity * element.price;
          }
          
        });

        return total
      },
      soma: function() {
        var soma = 0;

        this.products.forEach(element => {
          if(element.active){
            soma += element.quantity;
          }

        })
        
        return soma;
      }
  }
};

Vue.createApp(selectYourProduct).mount('#pai')