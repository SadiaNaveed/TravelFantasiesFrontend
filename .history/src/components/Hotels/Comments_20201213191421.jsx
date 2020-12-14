(function (exports) {
  "use strict";

  exports.app.Comment = React.createClass({
    render: function () {
      return (
        <div className="comment">
          <header className="clearfix">
            <h4>{this.props.comment.author}</h4>
            <small>{this.props.comment.date.toString()}</small>
          </header>
          <p>{this.props.children}</p>
        </div>
      );
    },
  });
})(window);
