/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const path = require('path');
const rimraf = require('rimraf');

const distDir = path.resolve(process.cwd(), 'dist');
const publicDir = path.resolve(process.cwd(), 'public');
rimraf(distDir, (err) => {
  if (!err) {
    console.log('Cleared previous build files');
    rimraf(publicDir, (publicErr) => {
      if (!publicErr) console.log('Cleared previous public files');
      else {
        console.error('Failed to clean previous public files', err);
        process.exit(1);
      }
    });
  } else {
    console.error('Failed to clean previous build files', err);
    process.exit(1);
  }
});
