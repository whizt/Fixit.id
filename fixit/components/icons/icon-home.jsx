import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconHome = (props) => (
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
      d="m26.807 15.748.002.002a.747.747 0 0 1-.557 1.25H23.25v9.25a.75.75 0 0 1-.75.75h-3.75a.75.75 0 0 1-.75-.75v-5.5h-6v5.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V17h-3a.747.747 0 0 1-.684-.444v-.002a.747.747 0 0 1 .126-.805l11.25-12.5.001-.001c.275-.307.839-.307 1.114 0l11.25 12.5ZM24.25 17.5h2L2.821 15.414a1.248 1.248 0 0 0-.212 1.345c.2.45.647.74 1.141.74h2.5v8.75A1.25 1.25 0 0 0 7.5 27.5h3.75a1.25 1.25 0 0 0 1.25-1.25v-5h5v5a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25V17.5h.5Z"
    />
  </Svg>
)
export default IconHome
