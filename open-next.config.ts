import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// The learning site is prerendered and does not use a revalidation cache or queue.
export default defineCloudflareConfig({
  incrementalCache: 'dummy',
  tagCache: 'dummy',
  queue: 'dummy',
});
