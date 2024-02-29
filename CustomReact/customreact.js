const root = document.querySelector("#root");
function Render(root , reactEle){
    // create a new attribute
    // const DOMelem = document.createElement(reactEle.type);
    // DOMelem.innerText = reactEle.children;
    // //set href and target attribute of the reactele
    // DOMelem.setAttribute('href' , reactEle.props.href);
    // DOMelem.setAttribute('target' , reactEle.props.target);
    //adding the component into root
    // root.appendChild(DOMelem);

    // the above way is good if we know how many attributes we have but what if we don't know how many attributes are there in the received object so to solve that we can iterate over the props

    // create a new attribute
    const DOMelem = document.createElement(reactEle.type);
    DOMelem.innerText = reactEle.children;
    for (const prop in reactEle.props) {
            DOMelem.setAttribute(prop , reactEle.props[prop]);
    }
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