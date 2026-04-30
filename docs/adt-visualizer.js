const examples = {
    array: {
        title: 'Array 상태 변화',
        help: '배열은 index로 접근합니다. insert는 오른쪽으로 밀고, erase는 왼쪽으로 당기는 과정을 보여줍니다.',
        syntax: 'int arr[크기]; / arr[index] = value; / insert(index, value); / erase(index);',
        code: `int arr[6];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

insert(1, 50);
erase(3);`
    },
    list: {
        title: 'Linked List 연결 과정',
        help: '연결 리스트는 각 노드가 다음 노드의 주소를 가리키는 구조입니다. next 연결이 생기는 과정을 확인해보세요.',
        syntax: 'Node* 이름 = new Node(value); / 이름->next = 다른이름;',
        code: `Node* n1 = new Node(10);
Node* n2 = new Node(20);
Node* n3 = new Node(30);

n1->next = n2;
n2->next = n3;`
    }
};

const editor = document.getElementById('codeEditor');
const runBtn = document.getElementById('runBtn');
const resetBtn = document.getElementById('resetBtn');
const stopBtn = document.getElementById('stopBtn');
const visualStage = document.getElementById('visualStage');
const statusMsg = document.getElementById('statusMsg');
const visualTitle = document.getElementById('visualTitle');
const stepBadge = document.getElementById('stepBadge');
const syntaxHelp = document.getElementById('syntaxHelp');
const supportedSyntax = document.getElementById('supportedSyntax');
const tabButtons = document.querySelectorAll('.tab-btn');

let currentMode = 'array';
let timerId = null;

function setMode(mode) {
    currentMode = mode;

    tabButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.mode === mode);
    });

    editor.value = examples[mode].code;
    visualTitle.textContent = examples[mode].title;
    syntaxHelp.textContent = examples[mode].help;
    supportedSyntax.textContent = examples[mode].syntax;
    statusMsg.textContent = '예시 코드를 확인한 뒤 Run Visualization을 눌러보세요.';
    statusMsg.classList.remove('error');
    stepBadge.textContent = 'Step 0 / 0';
    renderEmpty();
}

function stopPlayer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}

function renderEmpty() {
    visualStage.innerHTML = '<p class="empty-state">아직 실행 전입니다.<br>왼쪽 코드를 수정한 뒤 실행 버튼을 눌러보세요.</p>';
}

function showError(message) {
    stopPlayer();
    statusMsg.textContent = message;
    statusMsg.classList.add('error');
    stepBadge.textContent = 'Error';
}

function parseArrayCode(code) {
    const statements = code.split(';').map((line) => line.trim()).filter(Boolean);
    const frames = [];
    let array = null;
    let arrayName = 'arr';

    statements.forEach((statement, lineIndex) => {
        const declaration = statement.match(/^int\s+(\w+)\[(\d+)\]$/);
        const assignment = statement.match(/^(\w+)\[(\d+)\]\s*=\s*(-?\d+)$/);
        const insertion = statement.match(/^insert\((\d+)\s*,\s*(-?\d+)\)$/);
        const erase = statement.match(/^erase\((\d+)\)$/);

        if (declaration) {
            arrayName = declaration[1];
            const size = Number(declaration[2]);

            if (size <= 0 || size > 12) {
                throw new Error('배열 크기는 1 이상 12 이하로 입력해주세요.');
            }

            array = new Array(size).fill(0);
            frames.push({
                type: 'array',
                state: [...array],
                activeIndex: -1,
                description: `${arrayName} 배열 ${size}칸이 생성되었습니다. 모든 값은 0으로 초기화됩니다.`
            });
            return;
        }

        if (!array) {
            throw new Error(`${lineIndex + 1}번째 명령 전에 먼저 int arr[크기]; 형태로 배열을 선언해야 합니다.`);
        }

        if (assignment) {
            const name = assignment[1];
            const index = Number(assignment[2]);
            const value = Number(assignment[3]);

            if (name !== arrayName) throw new Error(`선언한 배열 이름은 ${arrayName}입니다.`);
            if (index < 0 || index >= array.length) throw new Error(`index ${index}는 배열 범위를 벗어났습니다.`);

            array[index] = value;
            frames.push({
                type: 'array',
                state: [...array],
                activeIndex: index,
                description: `${arrayName}[${index}] 위치에 ${value}을(를) 저장했습니다.`
            });
            return;
        }

        if (insertion) {
            const targetIndex = Number(insertion[1]);
            const value = Number(insertion[2]);

            if (targetIndex < 0 || targetIndex >= array.length) throw new Error(`insert index ${targetIndex}는 배열 범위를 벗어났습니다.`);

            for (let i = array.length - 1; i > targetIndex; i--) {
                array[i] = array[i - 1];
                frames.push({
                    type: 'array',
                    state: [...array],
                    activeIndex: i,
                    description: `삽입 공간을 만들기 위해 ${i - 1}번 값을 ${i}번으로 이동합니다.`
                });
            }

            array[targetIndex] = value;
            frames.push({
                type: 'array',
                state: [...array],
                activeIndex: targetIndex,
                description: `${targetIndex}번 위치에 ${value}을(를) 삽입했습니다.`
            });
            return;
        }

        if (erase) {
            const targetIndex = Number(erase[1]);

            if (targetIndex < 0 || targetIndex >= array.length) throw new Error(`erase index ${targetIndex}는 배열 범위를 벗어났습니다.`);

            for (let i = targetIndex; i < array.length - 1; i++) {
                array[i] = array[i + 1];
                frames.push({
                    type: 'array',
                    state: [...array],
                    activeIndex: i,
                    description: `삭제 후 빈칸을 메우기 위해 ${i + 1}번 값을 ${i}번으로 당깁니다.`
                });
            }

            array[array.length - 1] = 0;
            frames.push({
                type: 'array',
                state: [...array],
                activeIndex: array.length - 1,
                description: '마지막 칸은 빈 공간이 되었으므로 0으로 초기화합니다.'
            });
            return;
        }

        throw new Error(`해석할 수 없는 명령입니다: ${statement}`);
    });

    return frames;
}

function parseListCode(code) {
    const statements = code.split(';').map((line) => line.trim()).filter(Boolean);
    const frames = [];
    const nodes = [];
    const variableToId = {};

    statements.forEach((statement) => {
        const createNode = statement.match(/^Node\*\s+(\w+)\s*=\s*new\s+Node\((-?\d+)\)$/);
        const linkNode = statement.match(/^(\w+)->next\s*=\s*(\w+)$/);

        if (createNode) {
            const variableName = createNode[1];
            const value = Number(createNode[2]);

            if (variableToId[variableName]) {
                throw new Error(`${variableName} 포인터는 이미 사용 중입니다.`);
            }

            const id = `${variableName}_${nodes.length}`;
            variableToId[variableName] = id;
            nodes.push({ id, variableName, value, next: null });

            frames.push({
                type: 'list',
                nodes: structuredClone(nodes),
                activeId: id,
                description: `${variableName} 포인터가 값 ${value}을(를) 가진 새 노드를 가리킵니다.`
            });
            return;
        }

        if (linkNode) {
            const from = linkNode[1];
            const to = linkNode[2];
            const fromId = variableToId[from];
            const toId = variableToId[to];

            if (!fromId) throw new Error(`${from} 노드가 아직 생성되지 않았습니다.`);
            if (!toId) throw new Error(`${to} 노드가 아직 생성되지 않았습니다.`);

            const fromNode = nodes.find((node) => node.id === fromId);
            fromNode.next = toId;

            frames.push({
                type: 'list',
                nodes: structuredClone(nodes),
                activeId: fromId,
                description: `${from}->next가 ${to} 노드를 가리키도록 연결했습니다.`
            });
            return;
        }

        throw new Error(`해석할 수 없는 명령입니다: ${statement}`);
    });

    return frames;
}

function renderArray(frame) {
    visualStage.innerHTML = '';

    frame.state.forEach((value, index) => {
        const item = document.createElement('div');
        item.className = 'array-item';

        const cell = document.createElement('div');
        cell.className = 'array-cell';
        if (index === frame.activeIndex) cell.classList.add('active');
        cell.textContent = value;

        const indexLabel = document.createElement('div');
        indexLabel.className = 'array-index';
        indexLabel.textContent = index;

        item.append(cell, indexLabel);
        visualStage.appendChild(item);
    });
}

function renderList(frame) {
    visualStage.innerHTML = '';

    const chain = document.createElement('div');
    chain.className = 'list-chain';

    frame.nodes.forEach((node, index) => {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'list-node';
        if (node.id === frame.activeId) nodeElement.classList.add('active');

        nodeElement.innerHTML = `
            <div class="node-data">${node.value}</div>
            <div class="node-next">next</div>
        `;

        chain.appendChild(nodeElement);

        const shouldShowArrow = index < frame.nodes.length - 1;
        if (shouldShowArrow) {
            const arrow = document.createElement('span');
            arrow.className = 'arrow';
            arrow.textContent = '→';
            chain.appendChild(arrow);
        }
    });

    const nullBox = document.createElement('span');
    nullBox.className = 'null-box';
    nullBox.textContent = 'NULL';
    chain.appendChild(nullBox);

    visualStage.appendChild(chain);
}

function play(frames) {
    stopPlayer();
    statusMsg.classList.remove('error');

    if (!frames.length) {
        showError('실행할 명령이 없습니다. 예시 코드를 확인해주세요.');
        return;
    }

    let index = 0;

    const renderCurrentFrame = () => {
        const frame = frames[index];
        stepBadge.textContent = `Step ${index + 1} / ${frames.length}`;
        statusMsg.textContent = frame.description;

        if (frame.type === 'array') renderArray(frame);
        if (frame.type === 'list') renderList(frame);

        index++;
        if (index >= frames.length) stopPlayer();
    };

    renderCurrentFrame();
    timerId = setInterval(renderCurrentFrame, 1000);
}

function runVisualization() {
    try {
        const frames = currentMode === 'array'
            ? parseArrayCode(editor.value)
            : parseListCode(editor.value);

        play(frames);
    } catch (error) {
        showError(error.message);
    }
}

tabButtons.forEach((button) => {
    button.addEventListener('click', () => setMode(button.dataset.mode));
});

runBtn.addEventListener('click', runVisualization);
resetBtn.addEventListener('click', () => setMode(currentMode));
stopBtn.addEventListener('click', () => {
    stopPlayer();
    statusMsg.textContent = '재생을 정지했습니다. 다시 실행하면 처음부터 재생됩니다.';
});

setMode('array');
