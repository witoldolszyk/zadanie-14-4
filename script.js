// dodanie odpowiedniej klasy
var Movie = React.createClass({

  propTypes: {
      movie: React.PropTypes.object.isRequired,
    },

  render: function() {
    return React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {description: this.props.movie.desc}),
        React.createElement('img', {src: this.props.movie.post})
    )}
});

//tablice skopoiowane z pooprzendiego ćwiczenia
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    post: 'https://cdn4.dualshockers.com/wp-content/uploads/2017/11/Harry-Potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    post: 'https://www.rd.com/wp-content/uploads/2017/07/01-Theres-an-Alternate-Ending-to-The-Lion-King-imdb.com_-760x506.jpg'
  },
  {
    id: 3,
    title: 'Królestwo nebieskie',
    desc: 'Film krucjacie',
    post: 'http://ocdn.eu/images/pulscms/Yjc7MDMsMCwyZDAsMSwx/c9285ea75098dc471d35caec0c7d2bda.jpg'
  },
  {
    id: 4,
    title: 'Gwiezdne Wojny',
    desc: 'Film o wojnie w kosmosie',
    post: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg'
  },
  {
    id: 5,
    title: 'Indiana Jones',
    desc: 'Film o archeologu',
    post: 'https://vignette.wikia.nocookie.net/indianajones/images/8/8e/Indiana_Jones_in_Raiders_of_the_Lost_Ark.jpg/revision/latest?cb=20150502090713&path-prefix=pl'
  }
];

// krok 4
var MovieTitle = React.createClass({

  propTypes:{
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});
var MovieDescription = React.createClass({

  propTypes:{
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieList = React.createClass({
  render: function() {
    return (
      React.createElement('ul', {}, moviesElements)
    )
  }
});
var moviesElements = movies.map(function(movie) {
  return(
    React.createElement('ul', {key: movie.id, movies: movies})
  )
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  );

ReactDOM.render(element, document.getElementById('app'));
