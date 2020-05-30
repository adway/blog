/** @jsx jsx */
import { jsx, Styled, Text } from "theme-ui"
import { graphql, Link, useStaticQuery } from "gatsby"
import { hasDate, getDate, getName } from "../util"
import { filter, includes, isEmpty, orderBy } from "lodash"

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
      <Styled.h1>Thoughts.</Styled.h1>
      <Styled.h2 sx={{ color: "gray" }}>A blog by Adway Wadekar</Styled.h2>
      <Styled.p>
        Why write? Well, that's an interesting question. Honestly, I've always
        wanted a space where I can chronicle my thoughts so that I can look back
        upon them later. Why write publicly? Well, that's an interesting
        question too. Historians base much of their research on the written
        record. Without writing, we would know very little about our past. We
        all come from somewhere and we all have our own stories. So here's mine.
        Maybe it'll be of use to someone later.
      </Styled.p>
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
