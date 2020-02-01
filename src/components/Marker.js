import React from 'react'

class Marker extends React.Component {

  render() {

    return (
      <div className="marker" style={ this.props.style }></div>
    );
  }


}

export default Marker;