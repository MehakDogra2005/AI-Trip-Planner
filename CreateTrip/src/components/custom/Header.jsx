import React, { PureComponent } from 'react'
import { Button } from "../ui/Button";


export class Header extends PureComponent {
  render() {
    return (
      <div className= 'p-2 shadow-sm flex justify-between items-center'>
        <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        <div>
         <Button>Sign In</Button>
        </div>
      </div>
    )
  }
}

export default Header
