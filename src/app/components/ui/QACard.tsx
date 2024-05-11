import {Link} from 'react-router-dom';
import * as React from "react"
// import React from 'react';

// const contextValue = React.useContext(SomeContext);
// const basename = contextValue?.basename;


const QACard = ({ qa }: { qa: any }) => {
    return (
        <div className="qa-card">
            {/* order-by buttons */}
            <h3>{qa.question}</h3>
            <p>{qa.answer}</p>
            <div className="qa-rating">{qa.rating}</div>
            <div className="buttons">
                <Link to={`/update/${qa.id}`}>
                    <i className="material-icons">edit</i>
                </Link>
            </div>
        </div>
    );
}

export default QACard;