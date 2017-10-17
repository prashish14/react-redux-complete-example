import { Home, Login, ProductDetails, ProductList } from "../views/pages";
import { withAuthentication, lazyLoad } from "../views/enhancers";

const routes = [
    {
        path: "/Home",
        component: Home,
        exact: true,
    },
    {
        path: "/products",
        component: ProductList,
        exact: true,
    },
    {
        path: "/products/:permalink",
        example: "/products/apple",
        component: ProductDetails,
        exact: true,
    },
    {
        path: "/cart",
        component: (import( "../views/pages/cart" ) ),
        exact: false,
    },
    {
        path: "/myaccount",
        component: withAuthentication( lazyLoad( ( ) => import( "../views/pages/myAccount" ) ) ),
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
];

export default routes;
