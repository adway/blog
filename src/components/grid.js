import React from "react"
import { Container } from "theme-ui"

export default ({ children }) => (
  <Container
    sx={{
      ul: {
        listStyle: "none",
        display: "grid",
        textAlign: "center",
        pl: 0,
        gridTemplateColumns: [
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ],
        gridGap: [3, 4],
      },
      li: {
        img: { maxHeight: 256 },
        strong: { display: "block", mt: 2, mb: 1 },
        em: { color: "gray", fontSize: 0 },
      },
    }}
  >
    {children}
  </Container>
)
