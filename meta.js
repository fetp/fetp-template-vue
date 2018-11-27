module.exports = {
  prompts: {
    name: {
      name: 'projectName',
      message: '项目名字？',
      default: ':projectName:'
    },
    description: {
      name: 'projectDesc',
      message: '项目描述？',
      default: ':projectName:'
    },
    version: {
      name: 'version',
      message: '项目版本？',
      default: ':version:'
    },
    username: {
      name: 'yourname',
      message: `你的名字？`,
      default: ':gitUser:'
    },
    email: {
      name: 'youremail',
      message: `你的 Email？`,
      default: ':gitEmail:'
    }
  },
  filters: {
  }
}
