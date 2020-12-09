/* eslint-disable no-console */
const path = require('path');
const ncp = require('ncp');

const rootPath = process.cwd();
const distPath = path.resolve(rootPath, 'dist');
const publicPath = path.resolve(rootPath, 'public');
const deployFilesPath = path.resolve(rootPath, 'deploy_files');

ncp(deployFilesPath, publicPath, (err) => {
  if (err) {
    console.error(error);
    process.exit(1);
  } else {
    console.log('Copied deployment files');
    ncp(distPath, publicPath, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } else console.log('Copied build files');
    });
  }
});
