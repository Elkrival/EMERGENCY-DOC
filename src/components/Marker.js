import React from 'react'
//this is a function that will make a marker appear
const PSMarker = React.createClass({
    render: function() {
        var MARKER_WIDTH = 40;
        var MARKER_HEIGHT = 40;
        var PSMarkerStyle = {
            position: 'absolute',
            width: MARKER_WIDTH,
            height: MARKER_HEIGHT,
            left: -MARKER_WIDTH / 2,
            top: -MARKER_HEIGHT / 2,
            borderRadius: MARKER_HEIGHT,
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#3f51b5',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 0,
        };
        return (
            <div style={PSMarkerStyle}>

            </div>
        )
    }
});
export default PSMarker
