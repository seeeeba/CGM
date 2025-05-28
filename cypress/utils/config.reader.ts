export const getConfig = (key: string): string => {
    const config = require('../fixtures/config.json')
    return config[key]
  }