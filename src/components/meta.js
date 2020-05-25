import React from "react"
import { Helmet } from "react-helmet"

export default ({
  title = "Thoughts",
  name = "Thoughts",
  description = "A blog by Adway Wadekar",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={name} />
    <meta name="twitter:title" content={name} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Thoughts." />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  </Helmet>
)
