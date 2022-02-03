const mongoose = require('mongoose');
const { argv } = require('yargs');
const { discriminator } = require('./filmModel');
const FilmModel = require('./filmModel');

exports.addMovie = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log('Movie created')
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
}

exports.list = async () => {
    try {
        console.log(
            await FilmModel.find({})
        )
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
}

exports.update = async () => {
    try {
        
        await FilmModel.updateMany({actor:argv.nameUpdate},{name:argv.newName})
        console.log('movie updated')
    } catch(error) {
        console.log(error)
    }
    mongoose.connection.close()
};

/*exports.update = async () => {
    try {
        const doc = await FilmModel.create({
            name: "paddington",
            actor: "ben",
            rating: ""
        });
        doc.rating = "5";
        await doc.save();

    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
}; 
/*
/*
exports.update = async () => {
    try {
        await FilmModel.updateOne({actor:argv.nameUpdate},{name:argv.newName})


    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
};
*/
exports.deleteMovie = async () => {
    try {
        await FilmModel.deleteOne({name:argv.name})

    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
};

exports.deleteID = async () => {
    try {
        await FilmModel.findByIdAndDelete({_id:argv.id})

    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
};