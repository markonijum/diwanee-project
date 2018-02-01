module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
      // vendor: ["./vendor.js"]
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    },
    host: '192.168.0.15'
  },

  stylesheets: {
    sass: {
      includePaths: [
        "node_modules",
        "node_modules/susy/sass",
        "node_modules/font-awesome/scss",
        "node_modules/compass-mixins/lib"
      ]
    }
  },

  production: {
    rev: true
  },
  
  imgsForSprite: {
    folderName: 'imgSprite'
  },
}
