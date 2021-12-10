// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledDiv = styled.div`
color: gray;
background-color: white;
`

const Names = styled.h1`
color: aquamarine;
background-color: deepskyblue;
`

const Characters = props => {

    return (
        <StyledDiv className='container'>
            <Names>{props.name}</Names>
        </StyledDiv>
    )
}

export default Characters;