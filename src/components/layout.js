/** @jsx jsx */
import { jsx, Styled, useColorMode, NavLink } from "theme-ui"
import { Link } from "gatsby"

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
  return (
    <div
      sx={{
        variant: "styles.root",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          maxWidth: "container",
          mx: "auto",
          px: 3,
          py: 4,
        }}
      >
        <Link
          to="/"
          sx={{
            fontSize: 1,
            mr: 3,
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
    </div>
  )
}
