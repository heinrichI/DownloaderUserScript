//import get_wall from './files/get_wall.json'
//let jsonData = require('./JsonFile.json')
import fs from 'fs';
//const fs = require('fs');
import path from 'path';
//const path = require('path');
//const vkParser = require('c:/SourceJavaScript/DownloaderUserScript/src/VK/VKParser.ts');
import { Parse } from '../src/VK/VKParser';

let getWallPath = path.resolve(__dirname, './files/get_wall.json');
let jsonData = JSON.parse(fs.readFileSync(getWallPath, 'utf-8'));

// const calculator = require.('./calculator);
// const x = 13;
// const y = 5;

describe('testing index file', () => {
     test('Vk extract link', () => 
     {
          Parse(jsonData);
          //const data = await readFile('./files/get_wall.json').then(json => JSON.parse(json)).catch(() => null);
          expect(jsonData).not.toBeNull();
     });
});


// test('Vk extract link', () => 
// {
//      Parse(jsonData);
//      //const data = await readFile('./files/get_wall.json').then(json => JSON.parse(json)).catch(() => null);
//      expect(jsonData).
// });