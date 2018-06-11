import * as React from 'react';

interface ButtonProps {
  onClick: any;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { children, onClick } = this.props;

    return <button onClick={onClick}>{children}</button>;
  }
}

export { Button };
