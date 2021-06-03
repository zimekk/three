import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import webpack from "webpack";
import env from "dotenv";

env.config({ path: path.resolve(__dirname, "../../.env") });

const dev = process.env.NODE_ENV === "development";

const config: webpack.Configuration = {
  devServer: {
    port: 8080,
  },
  entry: (dev
    ? ["react-hot-loader/patch", "webpack-hot-middleware/client"]
    : []
  ).concat([require.resolve("./src")]),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
            },
          },
        ],
      },
      {
        test: /\.(glb|gltf|jpg|mtl|mp3|obj|png)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: ["react-hot-loader/babel"],
        },
      },
    ],
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "src/assets"),
          from: "*.gltf",
        },
        path.join(
          path.resolve(__dirname, "src/assets"),
          "dziewczyna/dziewczyna.png"
        ),
      ],
    }),
  ].concat(dev ? [new webpack.HotModuleReplacementPlugin()] : []),
};

export default config;
