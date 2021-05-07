import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <script async defer data-domain="links.sarasana.studio" src="https://plausible.io/js/plausible.js"></script>
  ])
  setPostBodyComponents([
    <script async defer data-domain="links.sarasana.studio" src="https://plausible.io/js/plausible.js"></script>
  ])
}
