import React from "react"

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }

