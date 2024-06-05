import CONFIG from '../scripts/globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const categories = restaurant.categories ? restaurant.categories.map((category) => category.name).join(', ') : '';

  return `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Description</h4>
      <p>${restaurant.description}</p>
      <h4>Categories</h4>
      <p>${categories}</p>
    </div>
    <div class="restaurant__Menu">
  <h3>Menu Minuman & Makanan</h3>
  <div class="menus">
    <div class="drinks">
      ${restaurant.menus.drinks.map((drink) => `
        <div class="drink">
          <p>${drink.name}</p>
        </div>
      `).join('')}
    </div>    
    <div class="foods">
      ${(restaurant.menus.foods && restaurant.menus.foods.map((food) => `
        <div class="food">
          <p>${food.name}</p>
        </div>
      `).join('')) || ''}
    </div>
  </div>
</div>
    <div class="restaurant__review">
    <h3>Cust review</h3>
    <div class="customer-reviews">
      ${restaurant.customerReviews.map((review) => `
        <div class="review">
          <p>${review.name}</p>
          <p>${review.date}</p>
          <p>${review.review}</p>
        </div>
      `).join('')}
    </div>
    </div>
  `;
};
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__image" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://via.placeholder.com/800x450?text=No+Image'}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="Favorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unfav this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
