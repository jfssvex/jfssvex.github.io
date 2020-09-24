module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['http://localhost/index.html'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
