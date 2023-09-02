import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
                "div", 
                { id: "parent"},
                React.createElement(
                    "div", 
                    {id: "child"}, 
                    [
                        React.createElement("h1", {}, "Heading"),
                        React.createElement("h12", {}, "Welcom to React")
                    ]
                )
            );
root.render(parent);