import React from "react";
import "./WelcomeModal.css";

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }
  render() {
    return (
      <div>
        <div className="modal_bg">
          <div className="welcome_modal">
            <div className="welcome_modal__close_btn">X</div>
            <div>
              <h3>Welcome!</h3>
              <p>Welcome to our page, enjoy your time.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeModal;
