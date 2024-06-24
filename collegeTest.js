import React from 'react';
import styled from 'styled-components';

const AvengersTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0;
`;

const AvengersSubTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieItem = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  width: 200px;
`;

const MovieTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const MovieDetails = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
`;

const AvengersMovies = () => {
  const movies = [
    { title: 'The Avengers (2012)', details: '' },
    { title: 'Avengers: United They Stand (1999)', details: '(TV Series)' },
    { title: 'Avengers: Endgame (2019)', details: '' },
    { title: 'Avengers: Infinity War (2018)', details: '' },
    { title: 'Avengers: Age of Ultron (2015)', details: '' },
    { title: 'Avengers Assemble (2012)', details: '(TV Series)' },
    { title: 'The Avengers: Earth\'s Mightiest Heroes (2010)', details: '(TV Series)' },
    { title: 'The Avengers (1961)', details: '(TV Series)' },
  ];

  return (
    <div>
      <AvengersTitle>AVENGERS</AvengersTitle>
      <AvengersSubTitle>ASSEMBLE</AvengersSubTitle>
      <MovieListContainer>
        {movies.map((movie) => (
          <MovieItem key={movie.title}>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieDetails>{movie.details}</MovieDetails>
          </MovieItem>
        ))}
      </MovieListContainer>
    </div>
  );
};

export default AvengersMovies;
