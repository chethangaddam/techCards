// Write your code here.
import './index.css'

const CardItem = props => {
  const {items} = props
  const {title, description, imgUrl, className} = items

  return (
    <li className={`cards ${className}`}>
      <div className="cards-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="image-align">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem
