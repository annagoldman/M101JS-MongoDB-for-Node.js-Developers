Problem Statement:

As a follow up to the previous question, how many documents in the video.movieDetails collection list both "Comedy" and "Crime" as genres regardless of how many other genres are listed?

Answer:

56

Solution:


db.movieDetails.find({ genres: { $all: ["Comedy", "Crime"] } }).count();
