import React from 'react'

// Dynamic route component that receives meeting ID from URL params
const Meeting = ({params}: {params: {id: string}}) => {
  return (
    {/* Display meeting room with ID extracted from dynamic [id] route segment */}
    <div>Meeting Room: #{params.id}</div>
  )
}

export default Meeting