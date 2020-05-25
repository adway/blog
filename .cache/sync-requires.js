const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/.cache/dev-404-page.js"))),
  "component---src-pages-2020-05-25-md": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/src/pages/2020-05-25.md"))),
  "component---src-pages-2020-05-25-the-summer-ahead-md": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/src/pages/2020-05-25-The-Summer-Ahead.md"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/src/pages/index.js")))
}

