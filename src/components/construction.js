import React from "react"
import { Text, Flex } from "theme-ui"
import { AlertTriangle } from "react-feather"

export default () => (
  <Flex
    sx={{
      textAlign: "center",
      color: "white",
      bg: "construction",
      py: 3,
      mt: 4,
      borderRadius: "default",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <AlertTriangle />
    <Text sx={{ pl: 2 }}>This post is still being updated. </Text>
  </Flex>
)
