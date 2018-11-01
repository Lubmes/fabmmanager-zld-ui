import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// Fabmomenten
import FabmomentSingle from '@/components/Fabmoments/Single'
import FabmomentInput from '@/components/Fabmoments/Input'
// Profielen
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import ProfilesMultiple from '@/components/Profiles/Multiple'
import ProfileSingle from '@/components/Profiles/Single'
// Reserveren
import ReservationsMultiple from '@/components/Reservations/InputSystem'
// Admin
import AdminDashboard from '@/components/Admin/Dashboard'
import AdminReservations from '@/components/Admin/Reservations'
import AdminUsers from '@/components/Admin/Users'
import AdminFabmoments from '@/components/Admin/Fabmoments'
import AdminTags from '@/components/Admin/Tags'
import AdminMachines from '@/components/Admin/Machines'
import AdminMaterials from '@/components/Admin/Materials'
import AdminPrograms from '@/components/Admin/Programs'
import AdminWeekSchedules from '@/components/Admin/WeekSchedules'
import AdminControlPanel from '@/components/Admin/ControlPanel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: ProfilesMultiple
    },
    {
      path: '/new-fabmoment',
      name: 'FabmomentInput',
      component: FabmomentInput
    },
    {
      path: '/reservations',
      name: 'Reservations',
      component: ReservationsMultiple
    },
    {
      path: '/profiles/:id',
      name: 'Profile',
      component: ProfileSingle
    },
    {
      path: '/profiles/:author_id/fabmoment/:fabmoment_id',
      name: 'Fabmoment',
      component: FabmomentSingle
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: AdminDashboard,
      children: [
        {
          path: 'reservations',
          component: AdminReservations
        },
        {
          path: 'users',
          component: AdminUsers
        },
        {
          path: 'fabmoments',
          component: AdminFabmoments
        },
        {
          path: 'tags',
          component: AdminTags
        },
        {
          path: 'machines',
          component: AdminMachines
        },
        {
          path: 'materials',
          component: AdminMaterials
        },
        {
          path: 'programs',
          component: AdminPrograms
        },
        {
          path: 'week-schedules',
          component: AdminWeekSchedules
        },
        {
          path: 'control-panel',
          component: AdminControlPanel
        }
      ]
    },
    // {
    //   path: '/admin/reservations',
    //   name: 'AdminReservations',
    //   component: AdminReservations
    // },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
