import React from 'react';

const ErrorMessageBalise = ({children}) => {
    return (
        <div
            style={{
                width: "80%",
                margin: "0 auto",
                padding: 7,
                marginBottom: 25,
                borderRadius: 4,
                fontSize: "1.2rem",
                backgroundColor: "orangered",
                textAlign: "center",
                color: "white",
                textTransform: "capitalize"
            }}
        ><i>
            {children}
        </i>
        </div>
    );
};

export default ErrorMessageBalise;