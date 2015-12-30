var React = require('react');

var Footer = React.createClass({

    getInitialState : function() {
      return ({

      });
    },

    render : function() {
      return (
        <div style={style}>

        </div>
      )
    }
  }
);

var style = {
  // backgroundColor: '#303030',
  // float: 'bottom',
  // border: 'black 1px solid',
  // width: '100%',
  // height: '150px'
  // padding: '5px',
  // margin: '2px'
  position: 'absolute',
  float: 'bottom',
  bottom: '0',
  width: '100%',
  height: '100px',
  background: '#303030',
};

module.exports = Footer;
