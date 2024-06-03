import RestaurantSource from '../../public/data/resto-source';
import { createRestaurantItemTemplate } from '../../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <img src="./images/heros/hero-image_3.jpg" width="450" alt="rest image" class="jumbo-image" />
      <h1>Welcome to ChasperRest</h1>
      <p>Find your favorite restaurant<br></p>
      <a href="#wrapper" class="btn"><Strong>HERE</Strong></a>
    </div>
    <div class="content">
    <h2 class="content__heading">Restaurants Currently Open</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
  
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getList();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurantContainer) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      console.error('Restaurant container element not found');
    }
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
