module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/index.html'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
