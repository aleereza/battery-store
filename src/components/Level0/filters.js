import React from "react"

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = { amp: [] }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.persist()
    if (e.target.checked) {
      this.setState(
        prevState => {
          let amp = prevState.amp
          amp.push(e.target.value)
          return { amp: amp }
        },
        () => this.props.updater(this.state)
      )
    } else {
      this.setState(
        prevState => {
          let amp = prevState.amp
          amp.splice(prevState.amp.indexOf(e.target.value), 1)
          return { amp: amp }
        },
        () => this.props.updater(this.state)
      )
    }
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Choose your Amper</legend>
          {this.props.filters.amp.map((element, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={element}
                name="amper"
                value={element}
                onChange={this.handleChange}
              />
              <label htmlFor={element}>{element}</label>
            </div>
          ))}
        </fieldset>
        <p>current state: {this.state.amp.toString()}</p>
      </div>
    )
  }
}

export default Filters
