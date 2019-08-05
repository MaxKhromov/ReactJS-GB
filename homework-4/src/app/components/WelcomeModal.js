import React from "react";
import "./WelcomeModal.css";

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  closeWelcomeWindow = function () {
    this.setState({display: false});
    console.log('setState: false');
  }

  componentDidMount() {
    if (!this.state.display) {
      console.log('state is false');
      this.render();
    }
  }

  render() {
    return (
      <div>
        <div className="modal_bg">
          <div className="welcome_modal">
            <div className="welcome_modal__close_btn" onClick={()=>{this.closeWelcomeWindow()}}>X</div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

export default WelcomeModal;
