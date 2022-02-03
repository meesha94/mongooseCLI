const mongoose = require('mongoose');
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
        await FilmModel.findOneAndUpdate({name:"spiderman2"}, {actor:"tobey maguire"})
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
        await FilmModel.updateOne({name:"kill bill"})


    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
};
*/
exports.deleteMovie = async () => {
    try {
        await FilmModel.deleteOne({name:"spiderman2"})

    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
};

exports.deleteID = async () => {
    try {
        await FilmModel.findByIdAndDelete({_id:"61fbf574b791bf3fe4f5834d"})

    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
};