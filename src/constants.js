export const PORTAL_ID = 'portal-container';

const createPortalContainer = () => {
    let domNode = document.querySelector(`#${PORTAL_ID}`);
    if (!domNode) {
        domNode = document.createElement('div');
        domNode.setAttribute('id', PORTAL_ID);
        document.body.appendChild(domNode);
    }
    return domNode;
}

export const DOM_PORTAL_CONTAINER = createPortalContainer();
