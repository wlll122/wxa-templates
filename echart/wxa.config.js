const UglifyjsPlugin = require('@wxa/plugin-uglifyjs');
const ReplacePlugin = require('@wxa/plugin-replace');
const CopyPlugin = require('@wxa/plugin-copy');
let prod = process.env.NODE_ENV === 'production';

// 环境变量
const envlist = {
    'WXA_ENV': process.env.NODE_ENV || 'development',
};


module.exports = {
    plugins: [
        new ReplacePlugin({
            list: envlist,
        }),
        new CopyPlugin({
            from: './src/echarts/img',
            to: 'echarts/img',
        }),
    ],
};

if (prod) {
    module.exports.plugins.push(new UglifyjsPlugin());
}
