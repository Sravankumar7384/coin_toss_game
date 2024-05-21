import {Component} from 'react'

import './index.css'

const HEAD_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToin extends Component {
  state = {
    resultImage: HEAD_IMG,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let newHeadCount = headCount
    let newTailCount = tailCount

    if (toss === 0) {
      tossImage = HEAD_IMG
      newHeadCount = newHeadCount + 1
    } else {
      tossImage = TAIL_IMG
      newTailCount = newTailCount + 1
    }

    this.setState({
      resultImage: tossImage,
      headCount: newHeadCount,
      tailCount: newTailCount,
    })
  }

  render() {
    const {resultImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="toss"> Heads (or) Tails </p>
          <img src={resultImage} alt="toss result" className="coin-image" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="total">Total: {totalCount}</p>
            <p className="total">heads: {headCount}</p>
            <p className="total">tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToin
