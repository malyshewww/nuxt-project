export default defineNuxtRouteMiddleware((to, from) => {
   // isAuthenticated() is an example method verifying if a user is authenticated
   const auth = useState("auth");
   if (!auth.value.isAuthenticated) {
      return navigateTo("/login");
   }

   if (to.path !== "/dashboard") {
      return navigateTo("/dashboard");
   }
});
