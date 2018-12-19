import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: {
        name: "Login"
      }
    },
    {
      path: "/",
      redirect: {
        name: "Login"
      }
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./views/Register.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next({ name: "Login" });
  } else if (!requiresAuth && currentUser) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
