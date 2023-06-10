import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconHistory = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.25 26.25h15a5 5 0 0 0 5-5v-15a2.5 2.5 0 0 0-2.5-2.5h-12.5a2.5 2.5 0 0 0-2.5 2.5V22.5c0 2.071-.429 3.75-2.5 3.75Z"
    />
    <Path
      fill={props.fill}
      stroke={props.stroke ? props.stroke : '#253159'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 12.5a2.5 2.5 0 0 1 2.5-2.5h2.5v13.125c0 1.725-.775 3.125-2.5 3.125s-2.5-1.4-2.5-3.125V12.5Z"
    />
    <Path
      fill={props.fill}
      stroke={props.stroke ? props.stroke : '#253159'}
      strokeLinecap="round"
      d="M15 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM13.75 17.5h7.5m-7.5 3.75h3.75"
    />
  </Svg>
)
export default IconHistory
