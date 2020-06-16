import React from "react"
import { Container, Grid } from "theme-ui"

export default ({ children }) => (
  <Grid
    gap={[3, 4]}
    columns={[1, 2, 3]}
    sx={{
      p: {
        textAlign: "center",

        img: {
          maxHeight: 254,
          boxShadow:
            "0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)",
        },
        strong: { display: "block", mt: 2, mb: 1 },
        em: { color: "gray", fontSize: 0 },
      },
    }}
  >
    {children}
  </Grid>
)
