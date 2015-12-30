var React = require('react');
//var SelectedItem = require('./SelectedItem');

var Header = React.createClass({

    getInitialState : function() {
      return ({

      })
    },

    render : function() {
      return (
        <div style={styles.background}>
          <div style={styles.title}>
            <img src="http://fontmeme.com/embed.php?text=Relay%20Swapi&name=Starjedi.ttf&size=50&style_color=FFFFFF" />
          </div>
        </div>
      )
    }
  }
);

var styles = {

  background : {
    backgroundImage: 'url(//a.dilcdn.com/sw/navigation/header_default-96a991b54f25.jpg)',
    //backgroundColor: '#900',
    color: 'yellow',
    padding: '5px',
    width: '100%',
    height: '140px'
  },

  title : {
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '40px'
  }


};

module.exports = Header;
