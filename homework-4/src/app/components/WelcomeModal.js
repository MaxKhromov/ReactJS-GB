import React from "react";
import "./WelcomeModal.css";

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  closeWelcomeWindow = function () {
    this.setState({display: false});
  }

  componentDidMount() {}

  render() {
    if (this.state.display) {
      return (
        <div>
          <div className="modal_bg">
            <div className="welcome_modal">
              <div
                className="welcome_modal__close_btn"
                onClick={() => {
                this.closeWelcomeWindow()
              }}>X</div>
              {this.props.children}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

}

export default WelcomeModal;
