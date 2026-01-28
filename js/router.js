// Simple Hash-based Router
const Router = {
  routes: {},

  add: function (path, handler) {
    this.routes[path] = handler;
  },

  navigate: function (path) {
    window.location.hash = path;
  },

  init: function () {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  },

  handleRoute: function () {
    let path = window.location.hash.slice(1) || "/";
    if (path === "") path = "/";

    const handler = this.routes[path];
    if (handler) {
      handler();
    } else {
      this.routes["/"]();
    }
    window.scrollTo(0, 0);
  },
};
