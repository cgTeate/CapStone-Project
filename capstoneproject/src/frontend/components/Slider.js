import {CaretRightOutlined, CaretLeftOutlined} from 'antd';
//import styled from "styled-components"

export default function Slider() {
const Arrow = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute"
};
    

const Container = {
    width: "100px",
    height: "100px",
    display: "flex",
    backgroundColor: "coral",
    position: "relative",
    top: "0",
    bottom: "0",
    //left: ${props=> props.direction === "left" && "10px"};
    //right: ${props=> props.direction === "right" && "10px"};
    margin: "auto"} ;

  return (
    <Container className="w-">
        <Arrow direction="left">
          <CaretLeftOutlined />
        </Arrow>
        <Arrow direction="right">
          <CaretRightOutlined />
        </Arrow>
    </Container>
  )
}
