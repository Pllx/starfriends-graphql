var React = require('react');
//var FriendsRow = require('./FriendsRow');
var FriendsItem = require('./FriendsItem');

var FriendsView = React.createClass({

    getInitialState : function() {
      return ({

      });
    },

    render : function() {
      //console.log('options: ', this.props.options);
      var friends = this.props.friends.map(function(elem, index){
        console.log(elem);
        return <FriendsItem friend={elem} updateSelected={this.props.updateSelected} key={index} />;
      }.bind(this));

    console.log('friends', this.props.friends);
      return (
        <div style={style}>
          {friends}
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

module.exports = FriendsView;
