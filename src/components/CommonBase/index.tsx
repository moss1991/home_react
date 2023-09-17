/**
 * 各个页面通用逻辑组件
 */
import React, { Component, ReactNode } from 'react';
import './index.scss';

interface CommonBaseProps {
    children?: ReactNode | undefined
}

export default class CommonBase extends Component<CommonBaseProps> {
  render() {
    return (
      <div className="common-base-wrapper">
        {this.props.children}
      </div>
    );
  }
}
