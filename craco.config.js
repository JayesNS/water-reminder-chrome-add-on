module.exports = {
  webpack: {
      configure: (webpackConfig, {env, paths}) => ({
            ...webpackConfig,
            entry: {
                main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                content: './src/scripts/contentScript.ts',
                background: './src/scripts/background.ts',
            },
            output: {
                ...webpackConfig.output,
                filename: 'static/js/[name].js',
            },
            optimization: {
                ...webpackConfig.optimization,
                runtimeChunk: false,
            },
            module: {
                ...webpackConfig.module,
                rules: [
                    ...webpackConfig.module.rules,
                  {
                    test: /\.s[ac]ss$/i,
                    use: [
                      "style-loader",
                      "css-loader",
                      {
                        loader: "sass-loader",
                      },
                    ],
                  },
                ],
              },
        }),
  }
}