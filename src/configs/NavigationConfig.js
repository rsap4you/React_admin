import { DashboardOutlined,PlusCircleOutlined, FileTextOutlined,ShoppingCartOutlined, MessageOutlined} from '@ant-design/icons';
// import { BsPersonFillAdd } from "react-icons/bs";
// import { BsPersonPlus } from "react-icons/bs";
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    // {
    //   key: 'dashboard.userlisting',
    //   path: `${APP_PREFIX_PATH}/dashboards/userlisting`,
    //   title: 'sidenav.dashboard.userlisting',
    //   icon:BsPersonFillAdd,
    //   breadcrumb: false,
    //   submenu: []
    // },
    // {
    //   key: 'dashboard.serviceproviderlisting',
    //   path: `${APP_PREFIX_PATH}/dashboards/serviceproviderlisting`,
    //   title: 'sidenav.dashboard.serviceproviderlisting',
    //   icon:BsPersonPlus,
    //   breadcrumb: false,
    //   submenu: []
    // },

    // e-commerce 

    {
      key: 'apps-ecommerce',
      path: `${APP_PREFIX_PATH}/apps/ecommerce`,
      title: 'sidenav.apps.ecommerce',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/12`,
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        },

        {
          key: 'chat',
          path: `${APP_PREFIX_PATH}/chat`,
          title: 'sidenav.apps.chat',
          icon: MessageOutlined,
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    

  

    {
      key: 'extra',
      path: `${APP_PREFIX_PATH}/pages`,
      title: 'sidenav.pages',
      icon: PlusCircleOutlined,
      breadcrumb: true,
      isGroupTitle: true,
      submenu: [
        {
          key: 'extra-pages',
          path: `${APP_PREFIX_PATH}/pages`,
          title: 'sidenav.pages',
          icon: FileTextOutlined,
          breadcrumb: true,
          submenu: [
            {
              key: 'extra-pages-profile',
              path: `${APP_PREFIX_PATH}/pages/profile`,
              title: 'sidenav.pages.profile',
              icon: '',
              breadcrumb: false,
              submenu: []
            },
            {
              key: 'extra-pages-list',
              path: `${APP_PREFIX_PATH}/pages/user-list`,
              title: 'sidenav.pages.userlist',
              icon: '',
              breadcrumb: true,
              submenu: []
            },
            {
              key: 'extra-pages-invoice',
              path: `${APP_PREFIX_PATH}/pages/invoice`,
              title: 'sidenav.pages.invoice',
              icon: '',
              breadcrumb: true,
              submenu: []
            },
            {
              key: 'extra-pages-pricing',
              path: `${APP_PREFIX_PATH}/pages/pricing`,
              title: 'sidenav.pages.pricing',
              icon: '',
              breadcrumb: true,
              submenu: []
            },
            {
              key: 'extra-pages-faq',
              path: `${APP_PREFIX_PATH}/pages/faq`,
              title: 'sidenav.pages.faq',
              icon: '',
              breadcrumb: false,
              submenu: []
            },
            {
              key: 'extra-pages-setting',
              path: `${APP_PREFIX_PATH}/pages/setting`,
              title: 'sidenav.pages.setting',
              icon: '',
              breadcrumb: true,
              submenu: []
            }
          ]
        },
      
       
      ]
    }


    
  ]
}]



const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
