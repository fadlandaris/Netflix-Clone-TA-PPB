import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MovieApi = () => {
  const [movieData, setMovieData] = useState({ titles: [], summary: [] });

  let searchQuery = "stranger"

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '71791606c7msh99fc2185e3b25d7p11b11bjsn79017cceeeb4',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
      },
    };

    fetch(`https://netflix54.p.rapidapi.com/search/?query=${searchQuery}`, options)
      .then((response) => response.json())
      .then((data) => setMovieData({ titles: data.titles, summary: data.summary }))
      .catch((error) => console.error(error));
  }, []);

  console.log(movieData.titles);

  return (
    <View>

      <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: 15, fontSize: 20, textDecorationLine: 'underline' }}>
        My Movie Watch List
      </Text>

      {movieData?.titles && movieData.titles?.map((movies, index) => (
        <Text key={index} style={{ color: 'white' }}>
          {movies.jawSummary.title}
        </Text>
      ))}
    </View>

    
  );
};


export default MovieApi;
