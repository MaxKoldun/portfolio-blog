import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.tsx',
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
