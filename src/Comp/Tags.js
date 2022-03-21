import React from 'react'

const Tags = (props) => {
    return (
        <ul>
            {props.tags.length === 0 ? null : props.tags.map((tag, index) => 
                <li key={index} className='card'>
                    {tag}
                    <br />
                    <button onClick={
                        () => {
                            props.setTag(props.tags.filter(curr => curr !== tag))
                        }
                    }>Delete Tag</button>
                </li>
            )}
        </ul>
    )
}

export default Tags