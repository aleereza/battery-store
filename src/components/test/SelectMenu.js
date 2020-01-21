import React from "react"
import { css } from "@emotion/core"
import gsap from "gsap"

const boxHeight = 25
const boxWidth = 100

class SelectMenu extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { activeIndex: this.props.initialIndex }
    this.renderArrrow = this.renderArrrow.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    // this.update = this.update.bind(this)
    // this.down = this.down.bind(this)
    this.handleClickUp = this.handleClickUp.bind(this)
    this.handleClickDown = this.handleClickDown.bind(this)

    this.optionSVG = null
  }

  componentDidUpdate() {
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
    this.props.up()
  }
  handleClickDown() {
    this.props.down()
  }

  renderArrrow(direction) {
    let svgPolygon = null

    const upSVGS = css`
      background-color: red;
      display: block;
      margin: 0 auto;
      /* vertical-align: middle; */
      /* width: 180px;
      height: 10px; */
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
      /* font-size: 2rem;
    line-height: 1.2; */
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
          <g>
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
