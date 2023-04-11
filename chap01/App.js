// const heading = React.createElement("h1", {id: "heading"}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/**
 * <div id="parent">
 *   <div id="child">
 *      <h1>heading</h1>s
 *   </div>
 * </div>
 */

const parent = React.createElement(
                "div", 
                { id: "parent"},
                React.createElement(
                    "div", 
                    {id: "child"}, 
                    [
                        React.createElement("h1", {}, "heading"),
                        React.createElement("h12", {}, "heading 2")
                    ]
                )
            );
root.render(parent);