import React from 'react'
import PropTypes from 'prop-types'
import AlbumItem from '../AlbumItem'



Album.propTypes = {
    songLists: PropTypes.array
}

Album.defaultProps = {
    songLists: [],
  };
  

function Album({songLists}) {
    return (
        <ul className="todo_album">
        {songLists.map((item) => (
         <li key={item.id}>
            <AlbumItem item={item}/>
         </li>
        ))}
      </ul>
    )
}



export default Album

