let root = null;
let nodeCount = 0;

const parentInput = document.getElementById("parentInput");
const valueInput = document.getElementById("valueInput");

const addRootBtn = document.getElementById("addRootBtn");
const addChildBtn = document.getElementById("addChildBtn");
const removeBtn = document.getElementById("removeBtn");
const preorderBtn = document.getElementById("preorderBtn");
const postorderBtn = document.getElementById("postorderBtn");

const treeContainer = document.getElementById("treeContainer");
const treeArea = document.getElementById("treeArea");
const treeLines = document.getElementById("treeLines");

const rootValue = document.getElementById("rootValue");
const sizeValue = document.getElementById("sizeValue");
const resultValue = document.getElementById("resultValue");

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function render() {
    treeContainer.innerHTML = "";
    treeLines.innerHTML = "";

    if (root === null) {
        treeContainer.innerHTML = `<p class="empty-text">Root: NULL</p>`;
        rootValue.textContent = "NULL";
        sizeValue.textContent = "0";
        return;
    }

    treeContainer.appendChild(createNodeElement(root));
    rootValue.textContent = root.value;
    sizeValue.textContent = nodeCount;

    setTimeout(drawLines, 0);
}

function createNodeElement(node) {
    const wrapper = document.createElement("div");
    wrapper.className = "tree-node-wrapper";

    const nodeBox = document.createElement("div");
    nodeBox.className = "tree-node";
    nodeBox.textContent = node.value;
    nodeBox.dataset.value = node.value;

    wrapper.appendChild(nodeBox);

    if (node.children.length > 0) {
        const childrenBox = document.createElement("div");
        childrenBox.className = "children";

        for (let child of node.children) {
            const branch = document.createElement("div");
            branch.className = "child-branch";
            branch.appendChild(createNodeElement(child));
            childrenBox.appendChild(branch);
        }

        wrapper.appendChild(childrenBox);
    }

    return wrapper;
}

function drawLines() {
    treeLines.innerHTML = "";

    if (root === null) return;

    const areaRect = treeArea.getBoundingClientRect();

    function connect(parent) {
        const parentEl = document.querySelector(`.tree-node[data-value="${parent.value}"]`);

        for (let child of parent.children) {
            const childEl = document.querySelector(`.tree-node[data-value="${child.value}"]`);

            if (parentEl && childEl) {
                const parentRect = parentEl.getBoundingClientRect();
                const childRect = childEl.getBoundingClientRect();

                const x1 = parentRect.left + parentRect.width / 2 - areaRect.left + treeArea.scrollLeft;
                const y1 = parentRect.bottom - areaRect.top + treeArea.scrollTop;

                const x2 = childRect.left + childRect.width / 2 - areaRect.left + treeArea.scrollLeft;
                const y2 = childRect.top - areaRect.top + treeArea.scrollTop;

                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

                line.setAttribute("x1", x1);
                line.setAttribute("y1", y1);
                line.setAttribute("x2", x2);
                line.setAttribute("y2", y2);
                line.setAttribute("stroke", "#cbd5e1");
                line.setAttribute("stroke-width", "3");
                line.setAttribute("stroke-linecap", "round");

                treeLines.appendChild(line);
            }

            connect(child);
        }
    }

    connect(root);
}

function findNode(node, value) {
    if (node === null) return null;
    if (node.value === value) return node;

    for (let child of node.children) {
        const result = findNode(child, value);
        if (result !== null) return result;
    }

    return null;
}

function countSubtree(node) {
    if (node === null) return 0;

    let count = 1;

    for (let child of node.children) {
        count += countSubtree(child);
    }

    return count;
}

function removeNode(current, target) {
    if (current === null) return false;

    for (let i = 0; i < current.children.length; i++) {
        if (current.children[i].value === target) {
            nodeCount -= countSubtree(current.children[i]);
            current.children.splice(i, 1);
            return true;
        }

        if (removeNode(current.children[i], target)) {
            return true;
        }
    }

    return false;
}

function preorder(node, result) {
    if (node === null) return;

    result.push(node.value);

    for (let child of node.children) {
        preorder(child, result);
    }
}

function postorder(node, result) {
    if (node === null) return;

    for (let child of node.children) {
        postorder(child, result);
    }

    result.push(node.value);
}

function addRoot() {
    const value = valueInput.value.trim();

    if (value === "") {
        alert("root 값을 입력하세요.");
        return;
    }

    if (root !== null) {
        alert("Root already exists");
        return;
    }

    root = new TreeNode(value);
    nodeCount = 1;

    valueInput.value = "";
    resultValue.textContent = `Root ${value} added`;

    render();
}

function addChild() {
    const parentValue = parentInput.value.trim();
    const value = valueInput.value.trim();

    if (root === null) {
        alert("Root를 먼저 추가하세요.");
        return;
    }

    if (parentValue === "" || value === "") {
        alert("parent와 new node를 입력하세요.");
        return;
    }

    if (findNode(root, value) !== null) {
        alert("이미 존재하는 노드입니다.");
        return;
    }

    const parent = findNode(root, parentValue);

    if (parent === null) {
        alert("Parent not found");
        return;
    }

    parent.children.push(new TreeNode(value));
    nodeCount++;

    parentInput.value = "";
    valueInput.value = "";

    resultValue.textContent = `${value} added as child of ${parentValue}`;

    render();
}

function removeValue() {
    const value = valueInput.value.trim();

    if (root === null) {
        alert("Tree is empty");
        return;
    }

    if (value === "") {
        alert("삭제할 node 값을 입력하세요.");
        return;
    }

    if (root.value === value) {
        root = null;
        nodeCount = 0;
        valueInput.value = "";
        resultValue.textContent = "Root removed";
        render();
        return;
    }

    const removed = removeNode(root, value);

    if (!removed) {
        alert("Node not found");
        return;
    }

    valueInput.value = "";
    resultValue.textContent = `${value} removed`;

    render();
}

function showPreorder() {
    const result = [];
    preorder(root, result);

    resultValue.textContent = result.length === 0 ? "NULL" : result.join(" → ");
}

function showPostorder() {
    const result = [];
    postorder(root, result);

    resultValue.textContent = result.length === 0 ? "NULL" : result.join(" → ");
}

addRootBtn.addEventListener("click", addRoot);
addChildBtn.addEventListener("click", addChild);
removeBtn.addEventListener("click", removeValue);
preorderBtn.addEventListener("click", showPreorder);
postorderBtn.addEventListener("click", showPostorder);

window.addEventListener("resize", drawLines);
treeArea.addEventListener("scroll", drawLines);

render();