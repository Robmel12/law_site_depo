const fs = require('fs');
const spawn = require('child_process').spawnSync;

const watchFolder = './src';
const mainFile = './src/css/index.scss';
const outFolder = './src/css/index.css';

console.log(`Watching for file changes on ${watchFolder}`);

fs.watch(watchFolder, (event, filename) => {
  if (filename) {
        console.log(`${filename} file Changed`);
        spawn('cmd.exe', [`/c node-sass ${mainFile} -o ${outFolder}`]);
   }
});