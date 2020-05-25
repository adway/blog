/** @jsx jsx */
import { jsx, Styled, Text } from "theme-ui"
import { graphql, Link, useStaticQuery } from "gatsby"
import { hasDate, getDate, getName } from "../util"
import { filter, includes, isEmpty, orderBy } from "lodash"
import { format } from "date-fns"

export default props => {
  const data = useStaticQuery(pages)
  const nodes = filter(
    data.allSitePage.nodes,
    n => !includes(["/", "/dev-404-page/"], n.path)
  )
  const links = orderBy(
    nodes.map(node => {
      node.name = getName(node.path)
      node.date = hasDate(node.path) ? getDate(node.path) : null
      return node
    }),
    ["date", "name"],
    ["desc", "asc"]
  )
  return (
    <div>
      <h1>Thoughts.</h1>
      <Styled.h2 sx={{ color: "gray" }}>A blog by Adway Wadekar</Styled.h2>
      <Text>
        I want to write more, but I've never been able to get myself to do it.
        My hope in making this blog, is to push myself to write as much as I
        can. I think this is the perfect time to get started, especially during
        this worldwide crisis.
      </Text>
      <hr />
      <ul
        sx={{
          listStyle: "none",
          p: 0,
          m: 4,
        }}
      >
        {links.map(({ name, date, path }) => (
          <Styled.li key={path} sx={{ mt: "3" }}>
            <Link
              as="a"
              to={path}
              sx={{ color: "primary", textDecoration: "none" }}
            >
              <strong sx={{ fontWeight: "bold", lineHeight: "body" }}>
                {name}
              </strong>
              {!isEmpty(date) && (
                <Text
                  sx={{
                    display: "block",
                    color: "secondary",
                    variant: "text.small",
                  }}
                >
                  {date}
                </Text>
              )}
            </Link>
          </Styled.li>
        ))}
      </ul>
    </div>
  )
}

const pages = graphql`
  query Pages {
    allSitePage {
      nodes {
        path
      }
    }
  }
`
