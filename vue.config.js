const path = require("path");
module.exports = {
    //  跨域的配置
    devServer: {
        proxy: {
            "/api": {
                target: "https://m.piaoniu.com",

                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias:{
<<<<<<< HEAD
                "@": path.join(__dirname, "./src"),
=======
                    "@": path.join(__dirname, "./src"),
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
                     "@api": path.join(__dirname, "./src/api"),
                     "@common": path.join(__dirname, "./src/common"),
                     "@components": path.join(__dirname, "./src/components"),
                     "@lib": path.join(__dirname, "./src/lib"),
                     "@pages": path.join(__dirname, "./src/pages"),
                     "@router": path.join(__dirname, "./src/router"),
                    "@static": path.join(__dirname, "./src/static"), 
                     "@store": path.join(__dirname, "./src/store"),
                    "@utils": path.join(__dirname, "./src/utils"),
<<<<<<< HEAD
=======
               
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
            }
        }
    }
}