var React = require('react');
var SelectedItem = require('./SelectedItem');

var SelectedView = React.createClass({

    getInitialState : function() {
      return ({

      })
    },

    render : function() {
      return (
        <div style={style}>
        <h1>{this.props.selected.name}</h1>
          <SelectedItem selected = {this.props.selected}/>
        </div>
      )
    }
  }
);

var style = {
  background: 'url("../assets/banner.jpg")',
  //backgroundColor: '#001821',
  color: 'white',
  paddingTop: '5px',
  width: '25%',
  margin: '0 auto',
  border: '1px #01b2f1 solid',
  textAlign: 'center'
//  marginTop: '30px'
};

module.exports = SelectedView;
