require("./db/connection");
const mongoose = require('mongoose');

const yargs = require('yargs/yargs');
const{ hideBin } = require('yargs/helpers');
const { addMovie, list, update, deleteMovie, deleteID } = require("./film/filmMethods");

const argv = yargs(hideBin(process.argv)).argv;


const app = async () => {
    if(argv.add){
        await addMovie({
            name:argv.title,
            actor:argv.actor
        })
    } else if (argv.list) {
        list()
    } else if (argv.update){
        await update()

    } else if (argv.deleteMovie){
        deleteMovie()
        
    } 
    else if(argv.deleteID){
        deleteID()
    
    } else {
        console.log('wrong command')
    }
    
};

app()