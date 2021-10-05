import React, {useContext} from 'react'
import {GlobalContext} from '../App'


const PhotoCard = ({photo}) => {

    const {addPhotoReaction} = useContext(GlobalContext)

    const likeHandle = () => {addPhotoReaction(photo.id, 1)}
    const dislikeHandle = () => {addPhotoReaction(photo.id, -1)}

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={photo.src} alt={photo.title}/>
                <div className="card-body">
                    <p className="card-title">{photo.title}</p>
                    <p className="card-text">
                        <button onClick={likeHandle} type="button" className="btn btn-success w-50">+ {photo.like}</button>
                        <button onClick={dislikeHandle} type="button" className="btn btn-danger w-50">- {photo.dislike}</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard