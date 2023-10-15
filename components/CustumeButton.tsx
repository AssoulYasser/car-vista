"Use client";

import React from 'react'

import { CustomButtonProps } from './types'

const CustumeButton = (
    {
        isDisabled,
        btnType,
        containerStyles,
        textStyles,
        title,
        rightIcon,
        handleClick
    } :CustomButtonProps
) => {
  return (
    <button
        disabled={isDisabled}
        type={btnType || 'button'}
        className={`costume-btn ${containerStyles}`}
        onClick= {handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
    </button>
  )
}

export default CustumeButton
