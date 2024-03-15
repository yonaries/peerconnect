import React from 'react'

type Props = {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return <div className='rounded-full bg-orange-500 px-6 py-2'>{children}</div>
}

export default Button
