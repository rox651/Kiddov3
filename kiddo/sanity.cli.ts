import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio',
  },
  api: {
    projectId: '5fe5lton',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
