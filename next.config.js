/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
);

module.exports = withNextIntl({
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        formats: ['image/webp'],
    },
});