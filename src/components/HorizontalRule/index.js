import React from 'react';

export const HorizontalRule = ({ 
    width = '100%', 
    borderSize = '1px', 
    color = '#262626',
    margin = '0' 
}) => <hr style={{
    width,
    border: `solid ${borderSize} ${color}`,
    borderRadius: '50%',
    margin
}} />;