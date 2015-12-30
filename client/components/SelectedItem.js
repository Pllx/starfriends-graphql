var React = require('react');

var SelectedItem = React.createClass({

  render : function() {
    return (
      <div style={style}>
        Home world : {this.props.selected.homeworld}
        <br/>
        Species : {this.props.selected.species}
        <br/>
        Birth year : {this.props.selected.birthyear}
        <br/>
        Gender : {this.props.selected.gender}
      </div>
    )
  }

});

var style = {
  backgroundColor: '#001821',
  color: 'white',
  padding: '5px',
  textAlign: 'left'
};

module.exports = SelectedItem;
