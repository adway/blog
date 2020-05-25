import title from "title"
import { isEmpty, startCase } from "lodash"
import { format } from "date-fns"

export const getDate = path => {
  const match = path.match(/(\d{4}-\d{2}-\d{2})/)
  return match ? match[0] : ""
}

export const getName = path => {
  let name = startCase(
    path
      .replace(/(\d{4}-\d{2}-\d{2})/, "")
      .replace("-", " ")
      .replace("/", "")
  )
  name = title(name, {
    special: ["iPhone", "iPad", "MacBook", "iOS", "MDX", "UI"],
  })
  if (hasDate(path) && name === "") {
    const date = new Date(getDate(path))
    date.setDate(date.getDate() + 1) // this is some really janky code lmao
    name = format(date, "MMMM d, yyyy")
  }
  return name
}

export const hasDate = path =>
  !isEmpty(path.toString().match(/\d{4}-\d{2}-\d{2}/))
