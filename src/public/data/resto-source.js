import API_ENDPOINT from '../../scripts/globals/api-endpoint';

class RestaurantSource {
  static async getList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
