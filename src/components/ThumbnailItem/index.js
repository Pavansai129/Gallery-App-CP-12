// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageObj, onSelectingThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageObj
  const onSelectImage = () => {
    onSelectingThumbnail(id)
  }

  return (
    <li className="thumb-nail-item">
      <button type="button" className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onSelectImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
