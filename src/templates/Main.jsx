/**
 * The main template component for documentation in this repository.
 *
 * @author Tim Scanlin
 */

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  propTypes: {
    json: React.PropTypes.object.isRequired
  },

  render: function() {
    var json = this.props.json;
    var TemplateComponent = require('./' + json.component);

    return (
      <main>
        <div className="hero">
          <div className="hero-inner reverse">
            <h1 className="flush hard">
              Tocbot
            </h1>
            <h3 className="max-width--large anchor--middle line--tight skip-toc soft flush--top hard--top">
              Generate a table of contents based on the heading structure of an html document.
            </h3>
            <div className="soft-triple--left push-triple--left">
              <iframe src="https://ghbtns.com/github-btn.html?user=tscanlin&repo=tocbot&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
          </div>
        </div>

        <div className="max-width--large anchor--middle">
          <input id="toc" type="checkbox" className="display--none" />
          <label className="toc-icon cursor--pointer button push" htmlFor="toc">Menu</label>
          <nav className="toc js-toc soft-double transition--300 position--absolute"></nav>
          <div className="content js-toc-content soft-double">
              <TemplateComponent {...this.props.json} />
          </div>


          <input id="try-it-checkbox" type="checkbox" className="display--none" />
          <div className="try-it-container push-triple--left transition--300">
            <label className="label" htmlFor="try-it-checkbox">
              <span className="button button--highlight is-closed">
                Try it
              </span>
              <span className="button button--highlight is-open">
                Hide
              </span>
              <a id="try-it-reset" href="javascript:void(0)" className="button button--plain">
                Reset
              </a>
            </label>
            <p className="flush weight--bold">Paste markdown in the box below.</p>
            <textarea id="try-it-markdown" className="textarea"></textarea>
          </div>
        </div>
      </main>
    );
  }
});
