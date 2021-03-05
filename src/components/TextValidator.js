import React, { Fragment } from "react";
import { ValidatorComponent } from "react-form-validator-core";

class TextValidator extends ValidatorComponent {
    
  errorText() {
    const { isValid } = this.state;
    if (isValid) {
      return null;
    }
    // 錯誤訊息
    return <span style={{ color: "red" }}>{this.getErrorMessage()}</span>;
  }

  renderValidatorComponent() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    return (
      <Fragment>
        <input {...rest} />
        {this.errorText()}
      </Fragment>
    );
  }
}

export default TextValidator;
