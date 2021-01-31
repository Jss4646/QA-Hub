import React, { Component } from "react";
import { Button, Menu } from "antd";

class ScreenshotMenu extends Component {
  render() {
    return (
      <Menu className="screenshot__menu">
        <Menu.Item>
          <Button type="text" onClick={this.props.removeScreenshot}>
            Delete screenshot
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="text">Save to my collection</Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="text">Save to computer</Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="text">Show details</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default ScreenshotMenu;
