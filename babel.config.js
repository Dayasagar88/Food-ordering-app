module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-typescript', {runtime:"automatic"}],
      ["@babel/preset-react", {runtime : "automatic"}],
    ],
  };
  