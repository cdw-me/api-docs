import Vue from 'vue';
import {
  LocaleProvider,
  Layout,
  Pagination,
  Button,
  Icon,
  Input,
  Tree
} from 'ant-design-vue';
const { Header, Sider, Content, Footer } = Layout;
Vue.component(LocaleProvider.name, LocaleProvider);
Vue.component(Layout.name, Layout);
Vue.component(Header.name, Header);
Vue.component(Sider.name, Sider);
Vue.component(Content.name, Content);
Vue.component(Footer.name, Footer);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Input.name, Input);
Vue.component(Input.Search.name, Input.Search);
Vue.component(Tree.name, Tree);
