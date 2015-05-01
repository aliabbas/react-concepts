var options = {
  thumbnailData: [{
    title: 'Sent',
    number: 1,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering webpages.  React is a fantastic new front end library for rendering webpages.',
    imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
  }, {
    title: 'Gulp',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow',
    imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  }]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
