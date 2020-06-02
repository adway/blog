const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/.cache/dev-404-page.js"))),
  "component---src-pages-2020-05-25-a-defense-of-the-2020-ap-exams-md": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/src/pages/2020-05-25-a-defense-of-the-2020-ap-exams.md"))),
  "component---src-pages-2020-06-01-a-reflection-on-the-events-surrounding-the-death-of-george-floyd-md": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/src/pages/2020-06-01-A_Reflection_on_the_Events_Surrounding_the_Death_of_George_Floyd.md"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Samsung_T5/src/blog/src/pages/index.js")))
}

