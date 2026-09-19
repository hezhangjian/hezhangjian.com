// @ts-check
import {defineConfig} from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hezhangjian.com',
  trailingSlash: 'never',

  adapter: cloudflare(),
});
