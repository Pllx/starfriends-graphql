var React = require('react');

var FriendsItem = React.createClass({

  selectCurrent : function() {
    //console.log('Selected',this.props.option);
    this.props.updateSelected(this.props.friend);
  },

  render: function() {
    return (
    <div style={style} onClick={this.selectCurrent}>
      {this.props.friend.name}
    </div>
  );
  }
});

var style = {
  backgroundImage: 'url(//a.dilcdn.com/sw/shared/bg_hash_top-052a93931374.png)',
  backgroundSize : '7px',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'top left',
  backgroundColor: '#FFCC00',//'#282727',
  color : 'white',
  cursor: 'pointer',
  border: 'black 1px solid',
  width: '100px',
  height: '60px',
  display: 'inline-block',
  margin: '5px',
  padding: '5px',
  paddingTop: '35px',
  verticalAlign: 'top'
};

module.exports = FriendsItem;

// module.exports = Relay.createContainer(FriendsItem, {
//
// });
