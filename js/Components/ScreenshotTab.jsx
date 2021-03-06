import React, { Component } from "react";

import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";
import {TAB_BUTTON_STYLE, SCREENSHOT_DEFAULT_FILENAME} from "../Constants";
export default class ScreenshotTab extends Component {
  onFilenameChange = e =>{
    const {value} = e.target;
    const {actions} = this.props;
    if(!value.endsWith(".png") || value.length < 6){
      actions.setScreenShotInputError("File  name cannot be empty and must end with .png");
      return;
    }
    actions.setScreenShotInputError("");
    actions.setScreenShotFilename(value);
  }

  render(){
    const {states} = this.props;
    return (
      <div className="tab-layout">
        <div className="tab-layout__item">
            <TextField
            onChange={this.onFilenameChange}
                floatingLabelText="File name pattern"
                defaultValue={SCREENSHOT_DEFAULT_FILENAME}
                errorText = {states.setScreenShotInputError}
              />

          </div>
          <div className="tab-layout__item">

            <IconButton
              tooltip="Take screenshot"
              iconClassName="material-icons"
              iconStyle={TAB_BUTTON_STYLE}>add_a_photo</IconButton>
          </div>
        </div>
      )
  }
}
