const structureInfo = {
    stack: {
        title: 'Stack',
        visualTitle: 'Stack 상태',
        description: 'LIFO(Last In First Out) 구조입니다. 마지막에 들어간 값이 가장 먼저 나옵니다.',
        concept: 'Top 위치에서만 삽입과 삭제가 일어나는 선형 자료구조입니다.',
        operations: 'push(value), pop(), top()',
        complexity: 'push O(1), pop O(1), top O(1)'
    },
    queue: {
        title: 'Queue',
        visualTitle: 'Queue 상태',
        description: 'FIFO(First In First Out) 구조입니다. 먼저 들어간 값이 가장 먼저 나옵니다.',
        concept: 'Rear에서 삽입하고 Front에서 삭제하는 선형 자료구조입니다.',
        operations: 'enqueue(value), dequeue(), front(), rear()',
        complexity: 'enqueue O(1), dequeue O(1), front O(1)'
    },
    array: {
        title: 'Array',
        visualTitle: 'Array 상태',
        description: '연속된 메모리 공간에 값을 저장하고 index로 접근하는 구조입니다.',
        concept: 'index 접근은 빠르지만, 중간 삽입/삭제는 shift가 필요합니다.',
        operations: 'set(index, value), insert(index, value), erase(index)',
        complexity: 'access O(1), insert O(n), erase O(n)'
    },
    list: {
        title: 'Linked List',
        visualTitle: 'Linked List 상태',
        description: '노드들이 next 포인터로 연결된 선형 자료구조입니다.',
        concept: '크기 변경이 쉽지만, 특정 위치 접근은 앞에서부터 따라가야 합니다.',
        operations: 'insertFront(value), insertBack(value), removeFront(), removeBack()',
        complexity: 'front insert/remove O(1), search O(n)'
    },
    tree: {
        title: 'Tree',
        visualTitle: 'General Tree 상태',
        description: '부모-자식 관계를 표현하는 계층형 자료구조입니다.',
        concept: 'Root에서 시작하고, 각 노드는 여러 child를 가질 수 있습니다.',
        operations: 'addRoot(value), addChild(parent, value), remove(value), preorder(), postorder()',
        complexity: 'search O(n), traversal O(n)'
    }
};

const state = {
    mode: 'stack',
    stack: [],
    queue: [],
    array: new Array(8).fill(0),
    list: [],
    treeRoot: null,
    treeSize: 0,
    active: null,
    result: ''
};

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

const modeButtons = document.querySelectorAll('.mode-btn');
const resetBtn = document.getElementById('resetBtn');
const structureTitle = document.getElementById('structureTitle');
const structureDescription = document.getElementById('structureDescription');
const conceptText = document.getElementById('conceptText');
const operationText = document.getElementById('operationText');
const complexityText = document.getElementById('complexityText');
const controls = document.getElementById('controls');
const visualTitle = document.getElementById('visualTitle');
const statusPill = document.getElementById('statusPill');
const statusMessage = document.getElementById('statusMessage');
const visualStage = document.getElementById('visualStage');
const traversalResult = document.getElementById("traversalResult");
const quizLink = document.getElementById('quizLink');

function setMode(mode) {
    state.mode = mode;
    if (traversalResult) {
        traversalResult.style.display = mode === "tree" ? "block" : "none";
        traversalResult.textContent = "Traversal 결과가 여기에 표시됩니다.";
    }

    if (quizLink) {
        quizLink.href = `quiz.html?category=${mode}`;
    }

    state.active = null;
    state.result = '';

    modeButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.mode === mode);
    });

    const info = structureInfo[mode];
    structureTitle.textContent = info.title;
    structureDescription.textContent = info.description;
    visualTitle.textContent = info.visualTitle;
    conceptText.textContent = info.concept;
    operationText.textContent = info.operations;
    complexityText.textContent = info.complexity;
    statusPill.textContent = 'Ready';
    statusMessage.textContent = '값을 입력하고 연산 버튼을 눌러보세요.';

    renderControls();
    render();
}

function setStatus(message, pill = 'Updated') {
    statusMessage.textContent = message;
    statusPill.textContent = pill;

    statusMessage.classList.remove('status-success', 'status-error', 'status-warning');

    // 🔥 자동 분류
    if (message.includes('empty') || message.includes('not found')) {
        statusMessage.classList.add('status-error');
    }
    else if (message.includes('입력') || message.includes('Input')) {
        statusMessage.classList.add('status-warning');
    }
    else {
        statusMessage.classList.add('status-success');
    }
}

function input(id, placeholder, type = 'number') {
    return `<input id="${id}" type="${type}" placeholder="${placeholder}">`;
}

function renderControls() {
    if (state.mode === 'stack') {
        controls.innerHTML = `
            ${input('valueInput', 'value (예: 10)')}
            <button class="primary-btn" id="pushBtn">Push</button>
            <button class="danger-btn" id="popBtn">Pop</button>
        `;

        document.getElementById('pushBtn').addEventListener('click', pushStack);
        document.getElementById('popBtn').addEventListener('click', popStack);

        document.getElementById('valueInput').value = "10";
    }

    if (state.mode === 'queue') {
        controls.innerHTML = `
            ${input('valueInput', 'value (예: 10)')}
            <button class="primary-btn" id="enqueueBtn">Enqueue</button>
            <button class="danger-btn" id="dequeueBtn">Dequeue</button>
        `;

        document.getElementById('enqueueBtn').addEventListener('click', enqueue);
        document.getElementById('dequeueBtn').addEventListener('click', dequeue);
    }

    if (state.mode === 'array') {
        controls.innerHTML = `
            ${input('indexInput', 'index (0~7)')}
            ${input('valueInput', 'value (예: 10)')}
            <button class="primary-btn" id="setBtn">Set</button>
            <button class="primary-btn" id="insertBtn">Insert</button>
            <button class="danger-btn" id="eraseBtn">Erase</button>
        `;

        document.getElementById('setBtn').addEventListener('click', setArrayValue);
        document.getElementById('insertBtn').addEventListener('click', insertArrayValue);
        document.getElementById('eraseBtn').addEventListener('click', eraseArrayValue);
    }

    if (state.mode === 'list') {
        controls.innerHTML = `
            ${input('valueInput', 'value (예: 10)')}
            <button class="primary-btn" id="insertFrontBtn">Insert Front</button>
            <button class="primary-btn" id="insertBackBtn">Insert Back</button>
            <button class="danger-btn" id="removeFrontBtn">Remove Front</button>
            <button class="danger-btn" id="removeBackBtn">Remove Back</button>
        `;

        document.getElementById('insertFrontBtn').addEventListener('click', insertListFront);
        document.getElementById('insertBackBtn').addEventListener('click', insertListBack);
        document.getElementById('removeFrontBtn').addEventListener('click', removeListFront);
        document.getElementById('removeBackBtn').addEventListener('click', removeListBack);
    }

    if (state.mode === 'tree') {
        controls.innerHTML = `
            ${input('parentInput', 'parent node (예: 1)', 'text')}
            ${input('valueInput', 'new node (예: 2)', 'text')}
            <button class="primary-btn" id="addRootBtn">Add Root</button>
            <button class="primary-btn" id="addChildBtn">Add Child</button>
            <button class="danger-btn" id="removeBtn">Remove</button>
            <button class="secondary-btn" id="preorderBtn">Preorder</button>
            <button class="secondary-btn" id="postorderBtn">Postorder</button>
        `;

        document.getElementById('addRootBtn').addEventListener('click', addRoot);
        document.getElementById('addChildBtn').addEventListener('click', addChild);
        document.getElementById('removeBtn').addEventListener('click', removeTreeValue);
        document.getElementById('preorderBtn').addEventListener('click', showPreorder);
        document.getElementById('postorderBtn').addEventListener('click', showPostorder);

            document.getElementById('valueInput').value = "1";
    }
}

function getNumberValue(id) {
    const element = document.getElementById(id);
    if (!element || element.value === '') return null;
    return Number(element.value);
}

function getTextValue(id) {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
}

function pushStack() {
    const value = getNumberValue('valueInput');
    if (value === null) return setStatus('값을 입력하세요.', 'Input needed');

    state.stack.push(value);
    state.active = state.stack.length - 1;
    setStatus(`push(${value}) 실행: top에 값이 추가되었습니다.`);
    clearValueInput();
    render();
}

function popStack() {
    if (state.stack.length === 0) return setStatus('Stack is empty. pop할 값이 없습니다.', 'Empty');

    const removed = state.stack.pop();
    state.active = state.stack.length - 1;
    setStatus(`pop() 실행: ${removed}이(가) 제거되었습니다.`);
    render();
}

function enqueue() {
    const value = getNumberValue('valueInput');
    if (value === null) return setStatus('값을 입력하세요.', 'Input needed');

    state.queue.push(value);
    state.active = state.queue.length - 1;
    setStatus(`enqueue(${value}) 실행: rear에 값이 추가되었습니다.`);
    clearValueInput();
    render();
}

function dequeue() {
    if (state.queue.length === 0) return setStatus('Queue is empty. dequeue할 값이 없습니다.', 'Empty');

    const removed = state.queue.shift();
    state.active = 0;
    setStatus(`dequeue() 실행: front의 ${removed}이(가) 제거되었습니다.`);
    render();
}

function validArrayIndex(index) {
    return Number.isInteger(index) && index >= 0 && index < state.array.length;
}

function setArrayValue() {
    const index = getNumberValue('indexInput');
    const value = getNumberValue('valueInput');

    if (!validArrayIndex(index) || value === null) {
        return setStatus('index와 value를 올바르게 입력하세요.', 'Input needed');
    }

    state.array[index] = value;
    state.active = index;
    setStatus(`array[${index}] = ${value} 실행`);
    render();
}

function insertArrayValue() {
    const index = getNumberValue('indexInput');
    const value = getNumberValue('valueInput');

    if (!validArrayIndex(index) || value === null) {
        return setStatus('index와 value를 올바르게 입력하세요.', 'Input needed');
    }

    for (let i = state.array.length - 1; i > index; i--) {
        state.array[i] = state.array[i - 1];
    }

    state.array[index] = value;
    state.active = index;
    setStatus(`insert(${index}, ${value}) 실행: 오른쪽으로 shift 후 삽입했습니다.`);
    render();
}

function eraseArrayValue() {
    const index = getNumberValue('indexInput');

    if (!validArrayIndex(index)) {
        return setStatus('index를 올바르게 입력하세요.', 'Input needed');
    }

    for (let i = index; i < state.array.length - 1; i++) {
        state.array[i] = state.array[i + 1];
    }

    state.array[state.array.length - 1] = 0;
    state.active = index;
    setStatus(`erase(${index}) 실행: 왼쪽으로 shift 후 마지막 칸을 0으로 초기화했습니다.`);
    render();
}

function insertListFront() {
    const value = getNumberValue('valueInput');
    if (value === null) return setStatus('값을 입력하세요.', 'Input needed');

    state.list.unshift(value);
    state.active = 0;
    setStatus(`insertFront(${value}) 실행`);
    clearValueInput();
    render();
}

function insertListBack() {
    const value = getNumberValue('valueInput');
    if (value === null) return setStatus('값을 입력하세요.', 'Input needed');

    state.list.push(value);
    state.active = state.list.length - 1;
    setStatus(`insertBack(${value}) 실행`);
    clearValueInput();
    render();
}

function removeListFront() {
    if (state.list.length === 0) return setStatus('Linked List is empty.', 'Empty');

    const removed = state.list.shift();
    state.active = 0;
    setStatus(`removeFront() 실행: ${removed}이(가) 제거되었습니다.`);
    render();
}

function removeListBack() {
    if (state.list.length === 0) return setStatus('Linked List is empty.', 'Empty');

    const removed = state.list.pop();
    state.active = state.list.length - 1;
    setStatus(`removeBack() 실행: ${removed}이(가) 제거되었습니다.`);
    render();
}

function addRoot() {
    const value = getTextValue('valueInput');
    if (!value) return setStatus('root 값을 입력하세요.', 'Input needed');
    if (state.treeRoot) return setStatus('Root already exists.', 'Blocked');

    state.treeRoot = new TreeNode(value);
    state.treeSize = 1;
    state.active = value;
    state.result = '';
    setStatus(`Root ${value} added`);
    clearValueInput();
    render();
}

function addChild() {
    const parent = getTextValue('parentInput');
    const value = getTextValue('valueInput');

    if (!state.treeRoot) return setStatus('Root를 먼저 추가하세요.', 'Input needed');
    if (!parent || !value) return setStatus('parent와 node 값을 입력하세요.', 'Input needed');
    if (findTreeNode(state.treeRoot, value)) return setStatus('이미 존재하는 노드입니다.', 'Blocked');

    const parentNode = findTreeNode(state.treeRoot, parent);
    if (!parentNode) return setStatus('Parent not found.', 'Not found');

    parentNode.children.push(new TreeNode(value));
    state.treeSize++;
    state.active = value;
    state.result = '';
    setStatus(`${value} added as child of ${parent}`);
    clearValueInput();
    const parentInput = document.getElementById('parentInput');
    if (parentInput) parentInput.value = '';
    render();
}

function removeTreeValue() {
    const value = getTextValue('valueInput');

    if (!state.treeRoot) return setStatus('Tree is empty.', 'Empty');
    if (!value) return setStatus('삭제할 node 값을 입력하세요.', 'Input needed');

    if (state.treeRoot.value === value) {
        state.treeRoot = null;
        state.treeSize = 0;
        state.active = null;
        state.result = '';
        setStatus('Root removed');
        render();
        return;
    }

    const removedCount = removeTreeNode(state.treeRoot, value);
    if (removedCount === 0) return setStatus('Node not found.', 'Not found');

    state.treeSize -= removedCount;
    state.active = null;
    state.result = '';
    setStatus(`${value} removed`);
    render();
}

function findTreeNode(node, value) {
    if (!node) return null;
    if (node.value === value) return node;

    for (const child of node.children) {
        const result = findTreeNode(child, value);
        if (result) return result;
    }

    return null;
}

function countTree(node) {
    if (!node) return 0;
    return 1 + node.children.reduce((sum, child) => sum + countTree(child), 0);
}

function removeTreeNode(current, target) {
    for (let i = 0; i < current.children.length; i++) {
        if (current.children[i].value === target) {
            const removedCount = countTree(current.children[i]);
            current.children.splice(i, 1);
            return removedCount;
        }

        const childResult = removeTreeNode(current.children[i], target);
        if (childResult > 0) return childResult;
    }

    return 0;
}

function preorder(node, result) {
    if (!node) return;
    result.push(node.value);
    node.children.forEach((child) => preorder(child, result));
}

function postorder(node, result) {
    if (!node) return;
    node.children.forEach((child) => postorder(child, result));
    result.push(node.value);
}

function showPreorder() {
    const result = [];
    preorder(state.treeRoot, result);

    traversalResult.textContent =
        result.length === 0 ? "Preorder: NULL" : "Preorder: " + result.join(" → ");

    setStatus("Preorder traversal 결과를 표시했습니다.", "Traversal");
}

function showPostorder() {
    const result = [];
    postorder(state.treeRoot, result);

    traversalResult.textContent =
        result.length === 0 ? "Postorder: NULL" : "Postorder: " + result.join(" → ");

    setStatus("Postorder traversal 결과를 표시했습니다.", "Traversal");
}

function clearValueInput() {
    const valueInput = document.getElementById('valueInput');
    if (valueInput) valueInput.value = '';
}

function resetCurrent() {
    if (state.mode === 'stack') state.stack = [];
    if (state.mode === 'queue') state.queue = [];
    if (state.mode === 'array') state.array = new Array(8).fill(0);
    if (state.mode === 'list') state.list = [];
    if (state.mode === 'tree') {
        state.treeRoot = null;
        state.treeSize = 0;
        state.result = '';
    }

    state.active = null;
    setStatus(`${structureInfo[state.mode].title} 상태를 초기화했습니다.`, 'Reset');
    render();
}

function render() {
    if (state.mode === 'stack') renderStack();
    if (state.mode === 'queue') renderQueue();
    if (state.mode === 'array') renderArray();
    if (state.mode === 'list') renderList();
    if (state.mode === 'tree') renderTree();
}

function renderStack() {
    visualStage.innerHTML = '';

    if (state.stack.length === 0) {
        visualStage.innerHTML = '<p class="empty-state">Stack is empty.<br>값을 입력하고 Push를 눌러보세요.</p>';
        return;
    }

    const view = document.createElement('div');
    view.className = 'stack-view';
    view.innerHTML = '<p class="stack-label">Top</p>';

    for (let i = state.stack.length - 1; i >= 0; i--) {
        const node = document.createElement('div');
        node.className = 'stack-node';
        if (i === state.active) node.classList.add('active');
        node.textContent = state.stack[i];
        view.appendChild(node);
    }

    visualStage.appendChild(view);
}

function renderQueue() {
    visualStage.innerHTML = '';

    if (state.queue.length === 0) {
        visualStage.innerHTML = '<p class="empty-state">Queue is empty.<br>값을 입력하고 Enqueue를 눌러보세요.</p>';
        return;
    }

    const view = document.createElement('div');
    view.className = 'queue-view';

    const front = document.createElement('span');
    front.className = 'null-box';
    front.textContent = 'Front';
    view.appendChild(front);

    state.queue.forEach((value, index) => {
        const node = document.createElement('div');
        node.className = 'queue-node';
        if (index === state.active) node.classList.add('active');
        node.textContent = value;
        view.appendChild(node);
    });

    const rear = document.createElement('span');
    rear.className = 'null-box';
    rear.textContent = 'Rear';
    view.appendChild(rear);

    visualStage.appendChild(view);
}

function renderArray() {
    visualStage.innerHTML = '';

    const view = document.createElement('div');
    view.className = 'array-view';

    state.array.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'array-item';

        const cell = document.createElement('div');
        cell.className = 'array-cell';
        if (index === state.active) cell.classList.add('active');
        cell.textContent = value;

        const idx = document.createElement('div');
        idx.className = 'array-index';
        idx.textContent = index;

        item.append(cell, idx);
        view.appendChild(item);
    });

    visualStage.appendChild(view);
}

function renderList() {
    visualStage.innerHTML = '';

    if (state.list.length === 0) {
        visualStage.innerHTML = '<p class="empty-state">Linked List is empty.<br>값을 입력하고 Insert를 눌러보세요.</p>';
        return;
    }

    const view = document.createElement('div');
    view.className = 'list-view';

    state.list.forEach((value, index) => {
        const node = document.createElement('div');
        node.className = 'list-node';
        if (index === state.active) node.classList.add('active');

        node.innerHTML = `
            <div class="list-data">${value}</div>
            <div class="list-next">next</div>
        `;

        view.appendChild(node);

        const arrow = document.createElement('span');
        arrow.className = 'arrow';
        arrow.textContent = '→';
        view.appendChild(arrow);
    });

    const nullBox = document.createElement('span');
    nullBox.className = 'null-box';
    nullBox.textContent = 'NULL';
    view.appendChild(nullBox);

    visualStage.appendChild(view);
}

function renderTree() {
    visualStage.innerHTML = '';

    if (!state.treeRoot) {
        visualStage.innerHTML = '<p class="empty-state">Tree is empty.<br>node 값을 입력하고 Add Root를 눌러보세요.</p>';
        return;
    }

    const canvas = document.createElement('div');
    canvas.className = 'tree-canvas';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('tree-lines');

    const rootView = document.createElement('div');
    rootView.className = 'tree-root';
    rootView.appendChild(createTreeElement(state.treeRoot));

    canvas.append(svg, rootView);
    visualStage.appendChild(canvas);

    if (state.result) {
        const resultBox = document.createElement('div');
        resultBox.className = 'result-box';
        resultBox.textContent = state.result;
        visualStage.appendChild(resultBox);
    }

    setTimeout(() => drawTreeLines(canvas, svg), 0);
}

function createTreeElement(node) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tree-node-wrapper';

    const box = document.createElement('div');
    box.className = 'tree-node';
    if (node.value === state.active) box.classList.add('active');
    box.textContent = node.value;
    box.dataset.value = node.value;

    wrapper.appendChild(box);

    if (node.children.length > 0) {
        const children = document.createElement('div');
        children.className = 'children';

        node.children.forEach((child) => {
            const branch = document.createElement('div');
            branch.className = 'child-branch';
            branch.appendChild(createTreeElement(child));
            children.appendChild(branch);
        });

        wrapper.appendChild(children);
    }

    return wrapper;
}

function drawTreeLines(canvas, svg) {
    svg.innerHTML = '';
    if (!state.treeRoot) return;

    const canvasRect = canvas.getBoundingClientRect();

    function connect(parent) {
        const parentEl = canvas.querySelector(`.tree-node[data-value="${CSS.escape(parent.value)}"]`);

        parent.children.forEach((child) => {
            const childEl = canvas.querySelector(`.tree-node[data-value="${CSS.escape(child.value)}"]`);

            if (parentEl && childEl) {
                const parentRect = parentEl.getBoundingClientRect();
                const childRect = childEl.getBoundingClientRect();

                const x1 = parentRect.left + parentRect.width / 2 - canvasRect.left;
                const y1 = parentRect.bottom - canvasRect.top;
                const x2 = childRect.left + childRect.width / 2 - canvasRect.left;
                const y2 = childRect.top - canvasRect.top;

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('stroke', '#cbd5e1');
                line.setAttribute('stroke-width', '3');
                line.setAttribute('stroke-linecap', 'round');
                svg.appendChild(line);
            }

            connect(child);
        });
    }

    connect(state.treeRoot);
}

function loadModeFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');

    if (structureInfo[mode]) {
        setMode(mode);
    } else {
        setMode('stack');
    }
}

modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const mode = button.dataset.mode;
        history.replaceState(null, '', `visualizer.html?mode=${mode}`);
        setMode(mode);
    });
});

resetBtn.addEventListener('click', resetCurrent);
window.addEventListener('resize', () => {
    if (state.mode === 'tree') renderTree();
});

loadModeFromUrl();
