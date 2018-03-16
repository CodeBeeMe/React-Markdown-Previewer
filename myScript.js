/* !Date:15.03.2018 Copyright ©2018 JavaScript & React code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
- All Rights Reserved!

MIT License

Copyright (c) 2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/Markdown-Previewer)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

//Title
const TITLE = (
  <div class="row justify-content-md-center">
    <div class="col-0">
      <h1 class="mark">Markdown</h1>
    </div>
    <div class="col-0">
      <h1 class="prev">Previewer</h1>
    </div>
  </div>
);

ReactDOM.render(TITLE, document.getElementById("title"));

//Footer
const FOOTER = (
  <div>    
    <a href="https://github.com/Madness2aMaze"
      title="...to my github page"
      target="_blank">
      <img src="https://avatars0.githubusercontent.com/u/24189991?s=460&v=4" class="img-fluid img-head"
        alt="portrait shot"/>
    </a>
  </div>
);

ReactDOM.render(FOOTER, document.getElementById("footer"));

const preInput =
      "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n---\n\nText emphasis: `monospace`, *italic* or _italic_, **bold** or __bold__, ~~strikethrough~~.\n\n---\nUnordered list:\n* javaScript\n* React\n* SCSS\n\nOrdered list:\n1. javaScript\n2. React\n3. SCSS\n\nExperiment by yourself in here and learn new things!\n\n`Designed and coded by` **[`Madness2aMaze ©2018`](https://github.com/Madness2aMaze)**";

class LiveInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: preInput
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  getMarkdownText() {
    let textarea = this.state.input;
    let markdown = marked(textarea, { sanitize: true });
    return { __html: markdown };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div class="row">
        <div class="col">
          <textarea
            type="text"
            placeholder="Enter your Markdown here..."
            value={this.state.input}
            onChange={this.handleChange}
            />
        </div>
        {/*<div id="preview" class="col">
          {this.state.input}
        </div>*/}
        <div
          id="preview"
          class="col"
          dangerouslySetInnerHTML={this.getMarkdownText()}
          />
      </div>
    );
  }
}

ReactDOM.render(<LiveInput />, document.getElementById("content"));

//=====================================================================
