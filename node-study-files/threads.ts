// node is a single threads runtime, which, because this, can limit some utilities
// to solve this problem, has a few special commands to change it:

// 1 - Child process
// create a process completely separate of the operational system
// have your own memory space and can run any command/script

// to make, had 3 importants commands from child process
import { exec, spawn, fork } from 'node:child_process'

// exec - run simple commands, capture the output completely
exec('ls', (error, stdout, stderr) => {
  if(stdout.includes('README.md')) console.log('it\'s a repository');
  else console.log('it isn\'t a repository');
});

// spawn - for long process with streaming of data
const process = spawn('ping', ['google.com']);
// create a variable with the data of a CLI with a array(second arg) with the arguments of it
// process.stdout.on('data', (data) => {console.log(`spawn output : ${data}`);});

// fork - for scripts node.js
const children = fork('./node-study-files/event.ts');//create a link with other file
children.send({task:"task sended"});//send a message to the file

// 2 - Cluster
// create multiple copies of your node server, one per CPU core, the father process pass the http 
// connection for each server

// used in APIs and HTTp servers

// 3 - Worker Threads
// create threads inside the same process
// more light tha separated process and can share memory

// used in CPU-bound process which lock the event loop