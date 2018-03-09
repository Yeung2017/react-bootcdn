import {
  fetchStatus
} from '../../../constants/fetchStatus';

export default {
  fetchStatus: fetchStatus.INITIAL,
  isNoneffective: true,
  lastUpdated: -1,
  data: {
    name: "bootstrap",
    npmName: "bootstrap",
    version: "4.0.0",
    description: "The most popular front-end framework for developing responsive, mobile first projects on the web.",
    homepage: "http://getbootstrap.com/",
    keywords: [
      "css",
      "less",
      "mobile-first",
      "responsive",
      "front-end",
      "framework",
      "web",
      "twitter",
      "bootstrap"
    ],
    license: "MIT",
    repository: {
      type: "git",
      url: "https://github.com/twbs/bootstrap"
    },
    assets: [{
      version: "4.0.0",
      files: [
        "css/bootstrap-grid.css",
        "css/bootstrap-grid.min.css",
        "css/bootstrap-reboot.css",
        "css/bootstrap-reboot.min.css",
        "css/bootstrap.css",
        "css/bootstrap.min.css",
        "js/bootstrap.bundle.js",
        "js/bootstrap.bundle.min.js",
        "js/bootstrap.js",
        "js/bootstrap.min.js"
      ]
    }, {
      version: "4.0.0-beta.3",
      files: [
        "css/bootstrap-grid.css",
        "css/bootstrap-grid.min.css",
        "css/bootstrap-reboot.css",
        "css/bootstrap-reboot.min.css",
        "css/bootstrap.css",
        "css/bootstrap.min.css",
        "js/bootstrap.bundle.js",
        "js/bootstrap.bundle.min.js",
        "js/bootstrap.js",
        "js/bootstrap.min.js"
      ]
    }]
  }
};