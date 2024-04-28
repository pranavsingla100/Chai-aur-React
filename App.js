const heading = React.createElement( // This createElement will not create h1 tag, it will create JS object in which it will store all the info.
    
    "div", 

    {id: "parent"}, //This is used to give attributes to the element we created

    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement(
            "h1",
            {},
            "Hello I'm H1 Tag"
        ),
        React.createElement(
            "h2",
            {},
            "Hello I'm H2 Tag"
        )]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {},
            "Hello I'm H1 Tag"
        ),
        React.createElement(
            "h2",
            {},
            "Hello I'm H2 Tag"
        )]
    )]
);

console.log(heading)
const rootOfReact = ReactDOM.createRoot(document.getElementById("root"));

rootOfReact.render(heading); // This render will convert JS object that we created above into h1 tag and push it inside div