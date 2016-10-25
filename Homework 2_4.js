Problem Statement:

How many documents in our video.movieDetails collection list just the following two genres: "Comedy" and "Crime" with "Comedy" listed first.

Answer:

20

Solution:

db.movieDetails.find( {$and : [{"genres.0": "Comedy"},
    {"genres.1": "Crime"}, {"genres" : {"$size" : 2}} ]},
    {genres: 1}).count();
