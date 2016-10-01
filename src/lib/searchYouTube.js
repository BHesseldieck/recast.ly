var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
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
