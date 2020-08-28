 
const fs = require('fs');
const recast = require('recast')
const path = require('path');
 
function checkMethodNames() {
    const code = '';
    const ast = recast.parse(code);
}

async function getAllFiles(directory: string){
    let fileList = [];    
    const files = await fs.readdir(directory);
    
    // loop all folders to get the file
    for (const file of files){
        const newPath = path.join(directory, file);
        const isDir = await fs.stat(newPath);
        if(isDir.isDirectory()) {
            const subFiles = await getAllFiles(newPath) ;
            fileList = [...fileList, ...subFiles];
        }
        else {
            fileList.push(file);
        }
    }

    return fileList;
}

async function printAllFunctionNames() {
    const rootPath= 'src';
    const files = await getAllFiles(rootPath);
    const allTsxFiles = files.filter(d =>/\.tsx?$/.test(d) );
    
    for(const tsxFile of allTsxFiles) {
      console.log(`file: ${tsxFile}`);
    }
}

printAllFunctionNames();
 