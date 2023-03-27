// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="fruits-content-container">
          <h1 className="main-heading">
            Bob ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="imageBtnEl-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button
                  className="button"
                  onClick={this.onMangoIncrement}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="imageBtnEl-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button
                  className="button"
                  onClick={this.onBananaIncrement}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
