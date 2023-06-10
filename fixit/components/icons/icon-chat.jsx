import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconChat = (props) => (
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
      d="M8 22.5V22H5c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h15c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2H13.701l-.137.11L8 26.56V22.5Z"
    />
    <Path
      fill={props.fill}
      stroke={props.stroke ? props.stroke : '#253159'}
      d="M7 5v.5h15.5c1.103 0 2 .897 2 2V18h.5c1.655 0 3-1.345 3-3V5c0-1.655-1.345-3-3-3H10C8.345 2 7 3.345 7 5Z"
    />
  </Svg>
)
export default IconChat
