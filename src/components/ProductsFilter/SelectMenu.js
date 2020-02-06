import React from "react"
import { css } from "@emotion/core"
import gsap from "gsap"

//design parameters
const boxHeight = 25
const boxWidth = 100

class SelectMenu extends React.Component {
  constructor(props) {
    super(props)
    this.renderArrrow = this.renderArrrow.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.handleClickUp = this.handleClickUp.bind(this)
    this.handleClickDown = this.handleClickDown.bind(this)
    this.optionSVG = null
  }

  componentDidUpdate() {
    console.log("component updated!", this.props.activeIndex)
    gsap.to(
      this.optionSVG,
      0.2,
      {
        attr: {
          viewBox: `0 ${boxHeight *
            (this.props.activeIndex - 1 / 2)} ${boxWidth} ${boxHeight}`,
        },
      },
      0
    )
  }

  handleClickUp() {
    console.log("inside up")
    this.props.up(this.props.options.length)
  }
  handleClickDown() {
    console.log("inside down")
    this.props.down(this.props.options.length)
  }

  renderArrrow(direction) {
    let svgPolygon = null

    const upSVGS = css`
      background-color: red;
      display: block;
      margin: 0 auto;
    `

    if (direction === "up") {
      svgPolygon = (
        <polygon
          points={`0,${boxHeight} ${boxWidth / 2},0 ${boxWidth},${boxHeight}`}
          fill="green"
        />
      )
    } else if (direction === "down") {
      svgPolygon = (
        <polygon
          points={`0,0 ${boxWidth / 2},${boxHeight} ${boxWidth},0`}
          fill="green"
        />
      )
    } else {
      svgPolygon = <p>invalid input</p>
    }
    return (
      <svg
        width={boxWidth}
        height={boxHeight}
        viewBox={`0 0 ${boxWidth} ${boxHeight}`}
        onClick={() =>
          direction === "up" ? this.handleClickUp() : this.handleClickDown()
        }
        css={upSVGS}
      >
        {svgPolygon}
      </svg>
    )
  }

  renderOptions(options) {
    const optionSVGStyle = css`
      display: block;
      background-color: yellowgreen;
      margin: 0;
    `

    const optionTextStyle = css`
      font-size: ${boxHeight * 0.8}px;
      line-height: 1;
      text-anchor: middle;
      dominant-baseline: middle;
    `
    return (
      <svg
        width={boxWidth}
        height={boxHeight}
        viewBox={`0 ${-boxHeight / 2} ${boxWidth} ${boxHeight}`}
        css={optionSVGStyle}
        ref={element => (this.optionSVG = element)}
      >
        {options.map((option, index) => (
          <g key={index}>
            <text
              css={optionTextStyle}
              x={`${boxWidth / 2}`}
              y={`${index * boxHeight}`}
            >
              {option}
            </text>
          </g>
        ))}
      </svg>
    )
  }

  render() {
    const SelectMenuOCS = css`
      background-color: burlywood;
      width: 200px;
      height: 300px;
      position: relative;
    `

    const SelectMenuICS = css`
      background-color: pink;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    `

    return (
      <div css={SelectMenuOCS}>
        <div css={SelectMenuICS}>
          {this.renderArrrow("up")}
          {this.renderOptions(this.props.options)}
          {this.renderArrrow("down")}
        </div>
      </div>
    )
  }
}

export default SelectMenu
