import React from 'react'
import { getInitials } from '../../utils/helper'
const ChartAvtar = ({fullName, width,height, style}) => {
  return (
    <div className={`${width || "w-12" } ${height || "h-12"} ${
        style || ""
    } flex items-center justify-center rounded-full text-gray-900`}
    >
        {getInitials(fullName || "")}
      
    </div>
  )
}

export default ChartAvtar
