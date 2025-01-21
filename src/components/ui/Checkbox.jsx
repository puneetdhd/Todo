import React from "react"

const Checkbox = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={`form-checkbox h-5 w-5 text-green-600 rounded border-zinc-600 focus:ring-green-500 focus:ring-offset-zinc-900 ${className}`}
      {...props}
    />
  )
}

export { Checkbox }

