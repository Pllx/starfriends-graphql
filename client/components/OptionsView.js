var React = require('react');
var OptionsItem = require('./OptionsItem');

var OptionsView = React.createClass({

    getInitialState : function() {
      return ({

      });
    },

    render : function() {
      //console.log('options: ', this.props.options);
      var options = this.props.options.map(function(elem, index){
        return <OptionsItem option={elem} updateSelected={this.props.updateSelected} key={index} />;
      }.bind(this));

      return (
        <div style={style}>
          {options}
        </div>
      )
    }
  }
);

var style = {
  width: '70%',
  margin: '0 auto',
  padding: '0 auto',
  textAlign: 'center'
  //backgroundColor: 'midnightblue',
  //color: '#FFCC00',
};

module.exports = OptionsView;
