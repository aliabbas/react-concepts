var ThumbnailList = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnail) {
      return <Thumbnail {...thumbnail}/>
    });
    return (
      <div>
        {list}
      </div>
    )
  }
});
