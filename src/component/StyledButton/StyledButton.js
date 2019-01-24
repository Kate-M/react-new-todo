import React from 'react'
import {render} from 'react-dom'
import withStyles from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const styles = {
  myButton: {
    color: 'green',
    display:'flex',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
}

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ({classes, children}) => (
  <button className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>
)

// Finally, inject the stylesheet into the component.
const StyledButton = withStyles(styles)(Button)

export default StyledButton;
// You can also export the component with
// export default withStyles(styles)(Button)y