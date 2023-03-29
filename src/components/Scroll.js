import React from "react";

const Scroll = (props) => {
    return(
    <div class = "pa3 ma3" style={{overflowY: 'scroll',border: '1px solid black', height: '800px'}} >
        {props.children}
    </div>
    );
};

export default Scroll