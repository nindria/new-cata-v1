import Home from '../page/home';
import Fav from '../page/fav';
import Detail from '../page/detail';

const routes = {
  '/': Home, // default
  '/favorite': Fav,
  '/detail/:id': Detail,

};

export default routes;
