/** @jsx jsx */
import { jsx, useColorMode, NavLink, Container, Box } from "theme-ui"
import { Link } from "gatsby"
import Meta from "./meta"
import { getName } from "../util"

const ColorButton = ({ mode, ...props }) => (
  <button
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "inherit",
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ":hover,:focus": {
        color: "primary",
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
    }}
  >
    <svg
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentcolor"
      sx={{
        display: "block",
      }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>
)

export default props => {
  const [mode, setMode] = useColorMode()
  const path = props.location.pathname
  const home = path === "/"
  const base = "Thoughts."
  const name = getName(path)
  return (
    <div
      sx={{
        variant: "styles.root",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Meta title={home ? base : `${name} – ${base}`} name={name} />
      <header
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          maxWidth: "container",
          mx: "auto",
          px: 3,
          pt: 4,
          pb: 2,
        }}
      >
        <Link
          to="/"
          sx={{
            fontSize: 1,
            color: "text",
            fontWeight: "heading",
          }}
        >
          <NavLink>blog.adway.io</NavLink>
        </Link>

        <div sx={{ mx: "auto" }} />
        <ColorButton
          mode={mode}
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        />
      </header>
      <main
        sx={{
          width: "100%",
          maxWidth: "container",
          px: 3,
          mx: "auto",
          flex: "1 1 auto",
        }}
      >
        <div
          sx={{
            maxWidth: "container",
          }}
        >
          {props.children}
        </div>
      </main>
      <Box as="footer" sx={{ textAlign: "center", px: 3, py: [3, 4] }}>
        <Container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            color: "text",
            a: { color: "text" },
          }}
        >
          &copy;{" "}
          <a href="https://adway.io" target="_blank">
            Adway S. Wadekar
          </a>
        </Container>
      </Box>
    </div>
  )
}
