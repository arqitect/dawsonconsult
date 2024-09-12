const hoveredElementWhat = document.querySelector('.mnwhat');
const targetElementsWhat = document.querySelectorAll('.dropdown-content-whatwedo-a');

const hoveredElementClients = document.querySelector('.mnclients');
const targetElementsClients = document.querySelectorAll('.dropdown-content-clients-a');


let isHoveringWhat = false;

function showTargetElementsWhat() {
    targetElementsWhat.forEach(element => {
        element.style.display = 'block';
    });
}

function hideTargetElementsWhat() {
    if (!isHoveringWhat) {
        targetElementsWhat.forEach(element => {
            element.style.display = 'none';
        });
    }
}

hoveredElementWhat.addEventListener('mouseenter', () => {
    isHoveringWhat = true;
    showTargetElementsWhat();
});

hoveredElementWhat.addEventListener('mouseleave', () => {
    isHoveringWhat = false;
});

targetElementsWhat.forEach(element => {
    element.addEventListener('mouseenter', () => {
        isHoveringWhat = true;
        showTargetElementsWhat();
    });

    element.addEventListener('mouseleave', () => {
        isHoveringWhat = false;
        hideTargetElementsWhat();
    });
});

function showTargetElementsClients() {
    targetElementsClients.forEach(element => {
        element.style.display = 'block';
    });
}

let isHoveringClients = false;

function hideTargetElementsClients() {
    if (!isHoveringClients) {
        targetElementsClients.forEach(element => {
            element.style.display = 'none';
        });
    }
}

hoveredElementClients.addEventListener('mouseenter', () => {
    isHoveringClients = true;
    showTargetElementsClients();
});

hoveredElementClients.addEventListener('mouseleave', () => {
    isHoveringClients = false;
});

targetElementsClients.forEach(element => {
    element.addEventListener('mouseenter', () => {
        isHoveringClients = true;
        showTargetElementsClients();
    });

    element.addEventListener('mouseleave', () => {
        isHoveringClients = false;
        hideTargetElementsClients();
    });
});