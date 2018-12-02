module.exports = {
  prompts: {
    name: {
      name: 'projectName',
      message: 'Project Name?',
      default: ':projectName:'
    },
    description: {
      name: 'projectDesc',
      message: 'Project Description?',
      default: ':projectName:'
    },
    version: {
      name: 'version',
      message: 'Project Version?',
      default: ':version:'
    },
    username: {
      name: 'yourname',
      message: 'Your Name?',
      default: ':gitUser:'
    },
    email: {
      name: 'youremail',
      message: 'Your Email?',
      default: ':gitEmail:'
    }
  },
  filters: {
  }
}
