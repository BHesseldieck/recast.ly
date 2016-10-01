var searchYouTube = (options = {key: window.YOUTUBE_API_KEY, q: 'cats', max: 5}, callback) => {
  // TODO
  callback = callback || function(videos) {
    return videos;
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    async: false, // Shouldn't be this way but prevents rendering example data before receiving data, but has the downside to "freeze" the UI and is actually not in the sense of JavaScript
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      videoEmbeddable: true,
      maxResults: options.max,
      type: 'video'
    },
    success: data => {
      callback(data.items);
    },
    error: error => {
      console.error('Fuck this: ', error);
    }
  });
};

window.searchYouTube = searchYouTube;
