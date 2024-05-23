
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
    {/* From the banner or carusel it only send the to with prev or next*/ }
    {to === 'prev' ? (
        <ArrowForwardIosIcon sx={{ color: 'green' }}  className="icon" icon={to} />
        
    ) : (
        <ArrowBackIosIcon sx={{ color: 'green' }}  className="icon" icon={to} />

    )}
  </button>
)