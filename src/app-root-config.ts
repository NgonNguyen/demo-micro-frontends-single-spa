import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import loading from "../loading.gif";

const routes = constructRoutes(microfrontendLayout, {
  errors: {
    mfError: "Oops! The micro-frontend isn't working right now"
  },
  loaders: {
    // mainContentLoader: `<img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" />`
    mainContentLoader: `<img src="${loading}" />`
  },
  props: {}
});

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
