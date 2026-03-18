// process.cwd() - return the current work directory

console.log(process.cwd());

//path module is a security form to manipulate paths

import path from 'path'

const paths : Array<string> = []

// join - to join multiple words in a path
const path1 : string = path.join('/home', 'room', 'bed.object'); 

paths.push(path1);

// resolve - create an absolute path
paths.push(path.resolve(path1));

// basename - return the file name
paths.push(path.basename(path1));

// dirname - return the directory name
paths.push(path.dirname(path1));

// extname - return the extension
paths.push(path.extname(path1));

console.log(paths)

// fs module - main module to manipule files
import fs from 'node:fs'

// to see if a file exist
console.log(fs.existsSync('test.txt'));

// to add things in file
fs.writeFileSync('test.txt', 'Test 1\n')

// to read files
const content = fs.readFileSync('test.txt', 'utf-8')

console.log(content)