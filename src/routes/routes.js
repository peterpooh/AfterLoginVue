import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Dashboard from 'src/pages/Dashboard.vue'
import Trade from 'src/pages/Trade.vue'
import InvestmentTools from 'src/pages/InvestmentTools.vue'
import Research from 'src/pages/Research.vue'
import MyAccount from 'src/pages/MyAccount.vue'
import EStatement from 'src/pages/EStatement.vue'
import DBSVRewards from 'src/pages/DBSVRewards.vue'
import Notifications from 'src/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dbsv/dashboard'
  },
  {
    path: '/dbsv',
    component: DashboardLayout,
    redirect: '/dbsv/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'trade',
        name: 'Trade',
        component: Trade
      },
      {
        path: 'investmenttools',
        name: 'Investment Tools',
        component: InvestmentTools
      },
      {
        path: 'research',
        name: 'DBS Research',
        component: Research
      },
      {
        path: 'myaccount',
        name: 'My Account',
        component: MyAccount
      },
      {
        path: 'estatement',
        name: 'E-Statement & Reports',
        component: EStatement
      },
      {
        path: 'dbsvrewards',
        name: 'DBSV Rewards',
        beforeEnter() {
            /* location.href = 'https://dbsv.chococrm.com/';  */
            window.open('https://dbsv.chococrm.com/', '_blank')
          },
        component: DBSVRewards
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
