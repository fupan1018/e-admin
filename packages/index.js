import {install} from './main';
import Admin from './components/admin';
import Error from './components/error';
import Header from './components/header';
import Image from './components/image';
import ImageDialog from './components/image-dialog';
import Icon from './components/icon';
import LoadingBar from './components/loading-bar';
import Login from './components/login';
import Logo from './components/logo';
import NavMenu from './components/nav-menu';
import Tabs from './components/tabs';
import TabsItem from './components/tabs-item';
import View from './components/view';

export {
  Admin,
  Error,
  Header,
  Icon,
  Image,
  ImageDialog,
  LoadingBar,
  Login,
  Logo,
  NavMenu,
  Tabs,
  TabsItem,
  View,
};

export default {

  LoadingBar: LoadingBar.instance,
  imageDialog: ImageDialog.instance,

  install(Vue, options = {}) {

    Vue.use(Admin)
      .use(Error)
      .use(Header)
      .use(Icon)
      .use(Image)
      .use(ImageDialog)
      .use(LoadingBar)
      .use(Login)
      .use(Logo)
      .use(NavMenu)
      .use(Tabs)
      .use(TabsItem)
      .use(View);

    install(Vue, options);

    Vue.prototype.$imageDialog = ImageDialog.instance;
  },
};