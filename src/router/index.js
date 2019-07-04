import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/mainPage'
import login from '../components/login/index'

import t1 from '../components/testcom/t1'
import t2 from '../components/testcom/t2'
import t3 from '../components/testcom/t3'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{title:'ExpressWeb_Login'},
      linkActiveClass: 'active'
    },
    {
      path: '/main',
      name: 'main',
      redirect: { name: 't3' },
      meta:{tttle:'ExpressWeb_main'},
      component: mainPage,
      children: [
        {
          path: 't1',
          name: 't1',
          component: t1,
          meta:{title:'ExpressWeb_main_t1'}
        },
        {
          path: 't2',
          name: 't2',
          component: t2,
          meta:{title:'ExpressWeb_main_t2'}
        },
        {
          path: 't3',
          name: 't3',
          component: t3,
          meta:{title:'ExpressWeb_main_t3'}
        }
      ]
    }

  ]
})
routers.beforeEach((to, from, next) => {
  //console.log(to.path);
  //console.log(from.path);
  //console.log(0);
  if(to.meta.title)
  {
     //console.log(document.title+"----"+to.meta.title)
     document.title=to.meta.title
  }
  let token =localStorage.getItem('loginToken')
  if (token === '' &&   from.path !== '/') {
    //console.log(1);
    if(to.path==='/')
    {
      next()
    }
    else
    {
      next('/')
    }
    
  }
  else {

    if(token==='' && to.path !=='/' && from.path==='/')
    {
      next('/')
    }
    else  
    {
      next()
    }
    //console.log(2);

   
  }
})
export default routers
