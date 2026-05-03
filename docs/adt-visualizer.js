const examples = {
  array: {
    title: 'Array',
    visualTitle: 'Array 상태 변화',
    help: '배열은 index로 접근합니다. set, insert, erase가 어떤 칸을 바꾸는지 확인해보세요.',
    syntax: 'array(size), set(index, value), insert(index, value), erase(index)',
    code: `array(6);
set(0, 10);
set(1, 20);
set(2, 30);
insert(1, 50);
erase(3);`
  },
  stack: {
    title: 'Stack',
    visualTitle: 'Stack 상태 변화',
    help: 'Stack은 LIFO 구조입니다. push는 top에 추가되고 pop은 top에서 제거됩니다.',
    syntax: 'push(value), pop()',
    code: `push(10);
push(20);
push(30);
pop();
push(40);`
  },
  queue: {
    title: 'Queue',
    visualTitle: 'Queue 상태 변화',
    help: 'Queue는 FIFO 구조입니다. enqueue는 rear에 추가되고 dequeue는 front에서 제거됩니다.',
    syntax: 'enqueue(value), dequeue()',
    code: `enqueue(10);
enqueue(20);
enqueue(30);
dequeue();
enqueue(40);`
  },
  list: {
    title: 'Linked List',
    visualTitle: 'Linked List 상태 변화',
    help: 'Linked List는 elem과 next로 구성된 노드들이 연결된 구조입니다. push/pop 함수로 앞뒤 삽입 삭제를 확인합니다.',
    syntax: 'push_front(value), push_back(value), pop_front(), pop_back()',
    code: `push_back(10);
push_back(30);
push_front(5);
pop_front();
push_back(40);
pop_back();`
  },
  tree: {
    title: 'Tree',
    visualTitle: 'Tree 상태 변화',
    help: 'Tree는 root에서 시작하는 부모-자식 구조입니다. 순회 결과는 아래 결과 영역에 하나만 표시됩니다.',
    syntax: 'root(value), child(parent, value), remove(value), preorder(), postorder()',
    code: `root(1);
child(1, 2);
child(1, 3);
child(1, 4);
child(2, 5);
child(2, 6);
child(6, 7);
preorder();`
  }
};

const editor = document.getElementById('codeEditor');
const runBtn = document.getElementById('runBtn');
const stepBtn = document.getElementById('stepBtn');
const resetBtn = document.getElementById('resetBtn');
const visualStage = document.getElementById('visualStage');
const statusMsg = document.getElementById('statusMsg');
const stepBadge = document.getElementById('stepBadge');
const syntaxHelp = document.getElementById('syntaxHelp');
const supportedSyntax = document.getElementById('supportedSyntax');
const modeTitle = document.getElementById('modeTitle');
const visualTitle = document.getElementById('visualTitle');
const traversalResult = document.getElementById('traversalResult');
const tabButtons = document.querySelectorAll('.tab-btn');

let currentMode = 'array';
let currentFrames = [];
let currentStep = 0;
let timer = null;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function setMode(mode) {
  stopTimer();
  currentMode = mode;
  currentFrames = [];
  currentStep = 0;

  tabButtons.forEach((button) => button.classList.toggle('active', button.dataset.mode === mode));

  const info = examples[mode];
  editor.value = info.code;
  modeTitle.textContent = info.title;
  visualTitle.textContent = info.visualTitle;
  syntaxHelp.textContent = info.help;
  supportedSyntax.textContent = info.syntax;
  statusMsg.textContent = '예제를 실행하거나 코드를 수정한 뒤 Run을 눌러보세요.';
  stepBadge.textContent = 'Step 0 / 0';
  traversalResult.hidden = true;
  traversalResult.textContent = '';
  renderEmpty();
}

function renderEmpty() {
  visualStage.innerHTML = '<p class="empty-state">아직 실행 전입니다.<br>왼쪽 예제 코드를 확인한 뒤 Run을 눌러보세요.</p>';
}

function stopTimer() {
  if (timer) clearInterval(timer);
  timer = null;
}

function splitStatements(code) {
  return code.split(';').map((line) => line.trim()).filter(Boolean);
}

function parseCode(code, mode) {
  if (mode === 'array') return parseArray(code);
  if (mode === 'stack') return parseStack(code);
  if (mode === 'queue') return parseQueue(code);
  if (mode === 'list') return parseList(code);
  if (mode === 'tree') return parseTree(code);
  return [];
}

function parseArray(code) {
  const frames = [];
  let array = [];

  splitStatements(code).forEach((stmt) => {
    const init = stmt.match(/^array\((\d+)\)$/);
    const set = stmt.match(/^set\((\d+)\s*,\s*(-?\d+)\)$/);
    const insert = stmt.match(/^insert\((\d+)\s*,\s*(-?\d+)\)$/);
    const erase = stmt.match(/^erase\((\d+)\)$/);

    if (init) {
      const size = Number(init[1]);
      array = new Array(size).fill(0);
      frames.push({ type: 'array', state: [...array], active: -1, description: `${size}칸 배열을 생성했습니다.` });
      return;
    }

    if (array.length === 0) throw new Error('먼저 array(size)를 실행해야 합니다.');

    if (set) {
      const index = Number(set[1]);
      const value = Number(set[2]);
      checkIndex(index, array.length);
      array[index] = value;
      frames.push({ type: 'array', state: [...array], active: index, description: `set(${index}, ${value}) 실행: ${index}번 칸을 변경했습니다.` });
      return;
    }

    if (insert) {
      const index = Number(insert[1]);
      const value = Number(insert[2]);
      checkIndex(index, array.length);
      for (let i = array.length - 1; i > index; i--) {
        array[i] = array[i - 1];
        frames.push({ type: 'array', state: [...array], active: i, description: `${i - 1}번 값을 ${i}번으로 이동합니다.` });
      }
      array[index] = value;
      frames.push({ type: 'array', state: [...array], active: index, description: `insert(${index}, ${value}) 실행: ${index}번 위치에 삽입했습니다.` });
      return;
    }

    if (erase) {
      const index = Number(erase[1]);
      checkIndex(index, array.length);
      for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
        frames.push({ type: 'array', state: [...array], active: i, description: `${i + 1}번 값을 ${i}번으로 당겨옵니다.` });
      }
      array[array.length - 1] = 0;
      frames.push({ type: 'array', state: [...array], active: array.length - 1, description: '마지막 칸을 0으로 초기화했습니다.' });
      return;
    }

    throw new Error(`지원하지 않는 명령입니다: ${stmt}`);
  });

  return frames;
}

function parseStack(code) {
  const frames = [];
  const stack = [];

  splitStatements(code).forEach((stmt) => {
    const push = stmt.match(/^push\((-?\d+)\)$/);
    const pop = stmt.match(/^pop\(\)$/);

    if (push) {
      const value = Number(push[1]);
      stack.push(value);
      frames.push({ type: 'stack', state: [...stack], active: stack.length - 1, description: `push(${value}) 실행: top에 추가했습니다.` });
      return;
    }

    if (pop) {
      if (stack.length === 0) throw new Error('Stack is empty.');
      const index = stack.length - 1;
      const removed = stack[index];
      frames.push({ type: 'stack', state: [...stack], active: index, description: `pop() 실행: top의 ${removed}을(를) 제거합니다.` });
      stack.pop();
      frames.push({ type: 'stack', state: [...stack], active: stack.length - 1, description: `pop() 완료: ${removed}이(가) 제거되었습니다.` });
      return;
    }

    throw new Error(`지원하지 않는 명령입니다: ${stmt}`);
  });

  return frames;
}

function parseQueue(code) {
  const frames = [];
  const queue = [];

  splitStatements(code).forEach((stmt) => {
    const enqueue = stmt.match(/^enqueue\((-?\d+)\)$/);
    const dequeue = stmt.match(/^dequeue\(\)$/);

    if (enqueue) {
      const value = Number(enqueue[1]);
      queue.push(value);
      frames.push({ type: 'queue', state: [...queue], active: queue.length - 1, description: `enqueue(${value}) 실행: rear에 추가했습니다.` });
      return;
    }

    if (dequeue) {
      if (queue.length === 0) throw new Error('Queue is empty.');
      const removed = queue[0];
      frames.push({ type: 'queue', state: [...queue], active: 0, description: `dequeue() 실행: front의 ${removed}을(를) 제거합니다.` });
      queue.shift();
      frames.push({ type: 'queue', state: [...queue], active: 0, description: `dequeue() 완료: ${removed}이(가) 제거되었습니다.` });
      return;
    }

    throw new Error(`지원하지 않는 명령입니다: ${stmt}`);
  });

  return frames;
}

function parseList(code) {
  const frames = [];
  const list = [];

  splitStatements(code).forEach((stmt) => {
    const pushFront = stmt.match(/^push_front\((-?\d+)\)$/);
    const pushBack = stmt.match(/^push_back\((-?\d+)\)$/);
    const popFront = stmt.match(/^pop_front\(\)$/);
    const popBack = stmt.match(/^pop_back\(\)$/);

    if (pushFront) {
      const value = Number(pushFront[1]);
      list.unshift(value);
      frames.push({ type: 'list', state: [...list], active: 0, description: `push_front(${value}) 실행: head 앞에 추가했습니다.` });
      return;
    }

    if (pushBack) {
      const value = Number(pushBack[1]);
      list.push(value);
      frames.push({ type: 'list', state: [...list], active: list.length - 1, description: `push_back(${value}) 실행: tail 뒤에 추가했습니다.` });
      return;
    }

    if (popFront) {
      if (list.length === 0) throw new Error('List is empty.');
      const removed = list[0];
      frames.push({ type: 'list', state: [...list], active: 0, description: `pop_front() 실행: head의 ${removed}을(를) 제거합니다.` });
      list.shift();
      frames.push({ type: 'list', state: [...list], active: 0, description: `pop_front() 완료: ${removed}이(가) 제거되었습니다.` });
      return;
    }

    if (popBack) {
      if (list.length === 0) throw new Error('List is empty.');
      const index = list.length - 1;
      const removed = list[index];
      frames.push({ type: 'list', state: [...list], active: index, description: `pop_back() 실행: tail의 ${removed}을(를) 제거합니다.` });
      list.pop();
      frames.push({ type: 'list', state: [...list], active: list.length - 1, description: `pop_back() 완료: ${removed}이(가) 제거되었습니다.` });
      return;
    }

    throw new Error(`지원하지 않는 명령입니다: ${stmt}`);
  });

  return frames;
}

function parseTree(code) {
  const frames = [];
  let root = null;

  splitStatements(code).forEach((stmt) => {
    const rootMatch = stmt.match(/^root\((-?\w+)\)$/);
    const childMatch = stmt.match(/^child\((-?\w+)\s*,\s*(-?\w+)\)$/);
    const removeMatch = stmt.match(/^remove\((-?\w+)\)$/);
    const preorderMatch = stmt.match(/^preorder\(\)$/);
    const postorderMatch = stmt.match(/^postorder\(\)$/);

    if (rootMatch) {
      const value = rootMatch[1];
      root = new TreeNode(value);
      frames.push({ type: 'tree', root: cloneTree(root), active: value, traversal: '', description: `root(${value}) 실행: 루트 노드를 생성했습니다.` });
      return;
    }

    if (!root) throw new Error('먼저 root(value)를 실행해야 합니다.');

    if (childMatch) {
      const parentValue = childMatch[1];
      const value = childMatch[2];
      if (findTree(root, value)) throw new Error(`${value} 노드는 이미 존재합니다.`);
      const parent = findTree(root, parentValue);
      if (!parent) throw new Error(`${parentValue} 부모 노드를 찾을 수 없습니다.`);
      parent.children.push(new TreeNode(value));
      frames.push({ type: 'tree', root: cloneTree(root), active: value, traversal: '', description: `child(${parentValue}, ${value}) 실행: ${parentValue}의 자식으로 추가했습니다.` });
      return;
    }

    if (removeMatch) {
      const value = removeMatch[1];
      if (root.value === value) {
        root = null;
        frames.push({ type: 'tree', root: null, active: null, traversal: '', description: `remove(${value}) 실행: root를 제거했습니다.` });
        return;
      }
      const removed = removeTree(root, value);
      if (!removed) throw new Error(`${value} 노드를 찾을 수 없습니다.`);
      frames.push({ type: 'tree', root: cloneTree(root), active: null, traversal: '', description: `remove(${value}) 실행: 노드를 제거했습니다.` });
      return;
    }

    if (preorderMatch) {
      const result = [];
      preorder(root, result);
      frames.push({ type: 'tree', root: cloneTree(root), active: null, traversal: `Preorder: ${result.join(' → ')}`, description: 'preorder() 결과를 표시했습니다.' });
      return;
    }

    if (postorderMatch) {
      const result = [];
      postorder(root, result);
      frames.push({ type: 'tree', root: cloneTree(root), active: null, traversal: `Postorder: ${result.join(' → ')}`, description: 'postorder() 결과를 표시했습니다.' });
      return;
    }

    throw new Error(`지원하지 않는 명령입니다: ${stmt}`);
  });

  return frames;
}

function checkIndex(index, length) {
  if (!Number.isInteger(index) || index < 0 || index >= length) {
    throw new Error(`index ${index}는 범위를 벗어났습니다.`);
  }
}

function findTree(node, value) {
  if (!node) return null;
  if (node.value === value) return node;
  for (const child of node.children) {
    const found = findTree(child, value);
    if (found) return found;
  }
  return null;
}

function removeTree(node, value) {
  for (let i = 0; i < node.children.length; i++) {
    if (node.children[i].value === value) {
      node.children.splice(i, 1);
      return true;
    }
    if (removeTree(node.children[i], value)) return true;
  }
  return false;
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

function cloneTree(node) {
  return node ? JSON.parse(JSON.stringify(node)) : null;
}

function runAll() {
  try {
    stopTimer();
    currentFrames = parseCode(editor.value, currentMode);
    currentStep = 0;
    if (!currentFrames.length) throw new Error('실행할 명령이 없습니다.');
    playNext();
    timer = setInterval(() => {
      if (currentStep >= currentFrames.length) {
        stopTimer();
        return;
      }
      playNext();
    }, 900);
  } catch (error) {
    showError(error.message);
  }
}

function stepOnce() {
  try {
    stopTimer();
    if (!currentFrames.length || currentStep >= currentFrames.length) {
      currentFrames = parseCode(editor.value, currentMode);
      currentStep = 0;
    }
    if (!currentFrames.length) throw new Error('실행할 명령이 없습니다.');
    playNext();
  } catch (error) {
    showError(error.message);
  }
}

function playNext() {
  const frame = currentFrames[currentStep];
  renderFrame(frame);
  statusMsg.textContent = frame.description;
  stepBadge.textContent = `Step ${currentStep + 1} / ${currentFrames.length}`;
  currentStep++;
}

function showError(message) {
  stopTimer();
  statusMsg.textContent = message;
  stepBadge.textContent = 'Error';
}

function renderFrame(frame) {
  traversalResult.hidden = true;
  traversalResult.textContent = '';

  if (frame.type === 'array') renderArray(frame);
  if (frame.type === 'stack') renderStack(frame);
  if (frame.type === 'queue') renderQueue(frame);
  if (frame.type === 'list') renderList(frame);
  if (frame.type === 'tree') renderTree(frame);
}

function renderArray(frame) {
  setStageMode(null);
  visualStage.innerHTML = '';
  const view = document.createElement('div');
  view.className = 'array-view';

  frame.state.forEach((value, index) => {
    const item = document.createElement('div');
    item.className = 'array-item';
    const cell = document.createElement('div');
    cell.className = 'array-cell';
    if (index === frame.active) cell.classList.add('active-cell');
    cell.textContent = value;
    const label = document.createElement('div');
    label.className = 'array-index';
    label.textContent = index;
    item.append(cell, label);
    view.appendChild(item);
  });

  visualStage.appendChild(view);
}

function renderStack(frame) {
  setStageMode(null);
  visualStage.innerHTML = '';
  if (!frame.state.length) {
    visualStage.innerHTML = '<p class="empty-state">Stack is empty.</p>';
    return;
  }

  const view = document.createElement('div');
  view.className = 'stack-view';
  view.innerHTML = '<p class="stack-label">Top</p>';

  for (let i = frame.state.length - 1; i >= 0; i--) {
    const cell = document.createElement('div');
    cell.className = 'stack-cell';
    if (i === frame.active) cell.classList.add('active-cell');
    cell.textContent = frame.state[i];
    view.appendChild(cell);
  }

  visualStage.appendChild(view);
}

function renderQueue(frame) {
  setStageMode(null);
  visualStage.innerHTML = '';
  if (!frame.state.length) {
    visualStage.innerHTML = '<p class="empty-state">Queue is empty.</p>';
    return;
  }

  const view = document.createElement('div');
  view.className = 'queue-view';
  view.appendChild(makePointerLabel('Front'));

  frame.state.forEach((value, index) => {
    const cell = document.createElement('div');
    cell.className = 'queue-cell';
    if (index === frame.active) cell.classList.add('active-cell');
    cell.textContent = value;
    view.appendChild(cell);
  });

  view.appendChild(makePointerLabel('Rear'));
  visualStage.appendChild(view);
}

function makePointerLabel(text) {
  const label = document.createElement('span');
  label.className = 'pointer-label';
  label.textContent = text;
  return label;
}


function setStageMode(stageMode) {
  visualStage.classList.remove('list-stage', 'tree-stage');
  if (stageMode) visualStage.classList.add(stageMode);
}

function renderList(frame) {
  setStageMode('list-stage');
  visualStage.innerHTML = '';
  if (!frame.state.length) {
    visualStage.innerHTML = '<p class="empty-state">Linked List is empty.</p>';
    return;
  }

  const outer = document.createElement('div');
  outer.className = 'list-view';
  const chain = document.createElement('div');
  chain.className = 'list-chain';

  frame.state.forEach((value, index) => {
    const node = document.createElement('div');
    node.className = 'list-node';
    if (index === frame.active) node.classList.add('active');
    node.innerHTML = `
      <div class="list-elem">${value}</div>
      <div class="list-next"><span class="next-dot"></span></div>
    `;
    chain.appendChild(node);

    const arrow = document.createElement('span');
    arrow.className = 'list-arrow';
    chain.appendChild(arrow);
  });

  const nullNode = document.createElement('span');
  nullNode.className = 'null-pill';
  nullNode.textContent = 'NULL';
  chain.appendChild(nullNode);

  outer.appendChild(chain);
  visualStage.appendChild(outer);
}

function renderTree(frame) {
  setStageMode('tree-stage');
  visualStage.innerHTML = '';

  if (!frame.root) {
    visualStage.innerHTML = '<p class="empty-state">Tree is empty.</p>';
    return;
  }

  const canvas = document.createElement('div');
  canvas.className = 'tree-canvas';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('tree-lines');
  const rootView = document.createElement('div');
  rootView.className = 'tree-root';
  rootView.appendChild(createTreeElement(frame.root, frame.active));
  canvas.append(svg, rootView);
  visualStage.appendChild(canvas);

  if (frame.traversal) {
    traversalResult.hidden = false;
    traversalResult.textContent = frame.traversal;
  }

  setTimeout(() => {
    drawTreeLines(canvas, svg, frame.root);
    visualStage.scrollTop = 0;
  }, 0);
}

function createTreeElement(node, active) {
  const wrapper = document.createElement('div');
  wrapper.className = 'tree-node-wrapper';
  const box = document.createElement('div');
  box.className = 'tree-node';
  if (node.value === active) box.classList.add('active');
  box.textContent = node.value;
  box.dataset.value = node.value;
  wrapper.appendChild(box);

  if (node.children.length) {
    const children = document.createElement('div');
    children.className = 'children';
    node.children.forEach((child) => {
      const branch = document.createElement('div');
      branch.className = 'child-branch';
      branch.appendChild(createTreeElement(child, active));
      children.appendChild(branch);
    });
    wrapper.appendChild(children);
  }

  return wrapper;
}

function drawTreeLines(canvas, svg, root) {
  svg.innerHTML = '';
  const canvasRect = canvas.getBoundingClientRect();

  function connect(parent) {
    const parentEl = canvas.querySelector(`.tree-node[data-value="${CSS.escape(parent.value)}"]`);
    parent.children.forEach((child) => {
      const childEl = canvas.querySelector(`.tree-node[data-value="${CSS.escape(child.value)}"]`);
      if (parentEl && childEl) {
        const parentRect = parentEl.getBoundingClientRect();
        const childRect = childEl.getBoundingClientRect();
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', parentRect.left + parentRect.width / 2 - canvasRect.left);
        line.setAttribute('y1', parentRect.bottom - canvasRect.top);
        line.setAttribute('x2', childRect.left + childRect.width / 2 - canvasRect.left);
        line.setAttribute('y2', childRect.top - canvasRect.top);
        line.setAttribute('stroke', '#cbd5e1');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('stroke-linecap', 'round');
        svg.appendChild(line);
      }
      connect(child);
    });
  }

  connect(root);
}

runBtn.addEventListener('click', runAll);
stepBtn.addEventListener('click', stepOnce);
resetBtn.addEventListener('click', () => setMode(currentMode));
tabButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

setMode('array');
