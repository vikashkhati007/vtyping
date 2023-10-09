import React from 'react'
import Input from './userinteract/input'
const TextArea = () => {
  return (
    <div className="p-5 h-72 w-full rounded-md overflow-x-hidden scroll-smooth">
  <Input />
  <style>
    {`
      /* Hide the default scrollbar */
      .h-72::-webkit-scrollbar {
        width: 10px;
      }

      /* Make the scrollbar track transparent and remove border */
      .h-72::-webkit-scrollbar-track {
        background-color: transparent;
        border: none; /* Remove the border */
      }

      /* Customize the scrollbar thumb and remove border */
      .h-72::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2); /* You can adjust the transparency here */
        border: none; /* Remove the border */
        border-radius: 5px;
      }

      /* When the user hovers over the scrollbar */
      .h-72::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4); /* You can adjust the hover transparency here */
      }
    `}
  </style>
</div>

  
  )
}

export default TextArea
