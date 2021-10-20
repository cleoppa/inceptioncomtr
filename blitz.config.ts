import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

const path = require("path")

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "inceptioncomtr",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
module.exports = config
