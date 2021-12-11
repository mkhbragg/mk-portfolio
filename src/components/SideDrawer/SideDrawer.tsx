import React from 'react'

import Navigation from '../Navigation/Navigation'
import './SideDrawer.scss'
import Aux from '../../hoc/Aux/Aux'
import Backdrop from '../UI/Backdrop/Backdrop'

const sideDrawer = (props: any) => {
  let attachedClasses = ['SideDrawer', 'Close']
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open']
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <button className="CloseIcon" aria-label="Toggle side drawer">
          <div></div>
          <div></div>
        </button>
        <Navigation />
      </div>
    </Aux>
  )
}

export default sideDrawer
