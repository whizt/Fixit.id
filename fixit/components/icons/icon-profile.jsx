import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconProfile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill}
      stroke={props.stroke ? props.stroke : '#253159'}
      d="M10.5 8.75a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-4.566 9.684A5.75 5.75 0 0 1 10 16.75h10a5.75 5.75 0 0 1 5.75 5.75 3.25 3.25 0 0 1-3.25 3.25h-15a3.25 3.25 0 0 1-3.25-3.25 5.75 5.75 0 0 1 1.684-4.066Z"
    />
  </Svg>
)
export default IconProfile
