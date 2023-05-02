import React from 'react'

const Article = ({date='January 1, 1970', id, minutes, preview, title}) => {
    console.log(date, id, minutes, preview, title)
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article