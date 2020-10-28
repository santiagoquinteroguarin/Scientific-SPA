const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ?Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte al desarrollo.
    entry: './src/index.js', 
    // ?Donde se envía el proyecto estructurado y compilado listo para producción.
    output: { 
        // ?Creamos el lugar dónde se exportará el proyecto en una carpeta llamada dist.
        path: path.resolve(__dirname, 'dist'),
        // ?es el nombre del archivo final para producción.
        filename: 'main.js', 
    },
    resolve: {
        // ?Extensiones que vamos a utilizar.
        extensions: ['.js'], 
    },
    module: {
        rules: [
            // ?Estructura de Babel
            {
                // ?Nos permite identificar los archivos según se encuentran en nuestro entorno.
                test: /\.js?$/, 
                // ?Excluimos la carpeta de node modules
                exclude: /node_modules/,  
                use: {
                    // ?Utilizar un loader como configuración establecida.
                    loader: 'babel-loader',  
                }
            }
        ]
    },
    plugins: [
        // ?Permite trabajar con los archivos HTML
        new HtmlWebpackPlugin([
            {
                // ?Cómo vamos a inyectar un valor a un archivo HTML.
                inject: true, 
                // ?Dirección donde se encuentra el template principal
                template: './public/index.html',
                // ?El nombre que tendrá el archivo
                filename: './index.html',
            }
        ])
    ]
}