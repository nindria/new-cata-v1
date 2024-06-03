import UrlParser from '../routes/url-parser';
import RestaurantSource from '../../public/data/resto-source';
import { createRestaurantDetailTemplate } from '../../templates/template-creator';
import LikeButtonInitiator from '../like-button-initiator';

const Detail = {
  async render() {
    return ` <div id="restaurant-detail" class="restaurant-detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.getDetail(url.id);
    console.log('Restaurant:', restaurant); // Log the restaurant object
    console.log('API Response:', await RestaurantSource.getDetail(url.id)); // Log the API response
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        menus: restaurant.menus,
        categories: restaurant.categories,
      },
    });
    const restaurantContainer = document.querySelector('#restaurant-detail');
    if (restaurantContainer) {
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    } else {
      console.error('Restaurant container element not found');
    }
  },

};

export default Detail;
