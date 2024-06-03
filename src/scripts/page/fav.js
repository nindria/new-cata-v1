import FavouriteRestaurantIdb from '../../public/data/fav-resto-ibd';
import { createRestaurantItemTemplate } from '../../templates/template-creator';

const Fav = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Your Favorite resto</h2>
    <div id="restaurants" class="restaurants">

    </div>
  </div>
        `;
  },
  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Fav;
