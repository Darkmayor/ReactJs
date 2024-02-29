const root = document.querySelector("#root");
function Render(root , reactEle){
    // create a new attribute
    const DOMelem = document.createElement(reactEle.type);
    DOMelem.innerText = reactEle.children;
    //set href and target attribute of the reactele
    DOMelem.setAttribute('href' , reactEle.props.href);
    DOMelem.setAttribute('target' , reactEle.props.target);
    //adding the component into root
    root.appendChild(DOMelem);

}

//define react's render way
const reactEle = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click here to visit google'
}

Render(root , reactEle)