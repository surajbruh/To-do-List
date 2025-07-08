import React from 'react'

const Remove = ({ checked, handleClick }) => {
    return (
        <>
            {checked &&
                <div onClick={handleClick} className="bg-[var(--secondary-color)] hover:bg-[var(--quinary-color)] rounded-[50%] w-[28px] h-[28px]">
                    <img className="w-full object-cover" src="/svg/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                </div>}
        </>
    )
}

export default Remove
