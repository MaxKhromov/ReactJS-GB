import React from "react";
import ReactDOM from "react-dom";

import Blog from "./app/components/Blog";
import WelcomeModal from "./app/components/WelcomeModal";

const posts = [
  {
    title: "Post 1",
    body:
      "Amet deserunt tempor esse pariatur. Excepteur dolore ex adipisicing esse Lorem. Et Lorem consectetur voluptate nostrud proident esse."
  },
  {
    title: "Post 2",
    body: `Officia duis fugiat incididunt nulla elit occaecat nostrud et dolore minim laborum sit. Consequat do duis anim fugiat labore ipsum dolor incididunt culpa occaecat deserunt officia occaecat. Labore id nulla esse aliqua id.

Est qui aliquip ullamco cupidatat deserunt magna eiusmod aliquip. Do Lorem exercitation officia tempor eu ex aliqua aliqua et ipsum culpa veniam reprehenderit laboris. Dolore mollit esse fugiat pariatur ut sit veniam. Consectetur ullamco ut enim occaecat irure cupidatat incididunt eiusmod elit.

Nulla laborum laborum veniam laboris enim. Duis nulla aute sit occaecat nisi eu reprehenderit ullamco aliquip tempor ex. Esse sunt incididunt aute magna nostrud eiusmod magna cupidatat culpa quis. Ut quis est laboris do nulla. Est ullamco id cupidatat adipisicing proident minim veniam. Magna pariatur elit duis elit elit nisi culpa officia adipisicing aute. Sint veniam elit cillum enim do eu id ex aliqua mollit sit.`
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Blog posts={posts} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
