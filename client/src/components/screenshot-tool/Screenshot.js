import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Card, Menu } from "antd";

import {
  DeleteOutlined,
  EllipsisOutlined,
  SaveOutlined,
} from "@ant-design/icons";

/**
 * Displays a card containing the screenshot image
 *
 * @param {String} deviceName
 * @param {String} image
 */
class Screenshot extends Component {
  render() {
    return (
      <Card
        title={this.props.deviceName}
        extra={<Button type="link">view</Button>}
        size="small"
        bordered={false}
        cover={
          <>
            <img
              className="screenshot__image"
              alt="example"
              src={this.props.image}
            />
            {menu}
          </>
        }
        actions={[
          <DeleteOutlined key="setting" />,
          <SaveOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        className="screenshot"
      />
    );
  }
}

Screenshot.propTypes = {
  deviceName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const menu = (
  <Menu className="screenshot__menu">
    <Menu.Item>
      <Button type="link">Delete screenshot</Button>
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

export default Screenshot;