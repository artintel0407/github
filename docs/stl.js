const structures = {
    stack: {
        title: 'Stack',
        category: 'Linear Structure',
        difficulty: 'Basic',
        description: 'Stack은 마지막에 들어온 데이터가 가장 먼저 나가는 LIFO 구조입니다. 함수 호출, 되돌리기 기능, 괄호 검사처럼 최근 작업을 먼저 처리해야 할 때 자주 사용됩니다.',
        concept: 'Top 위치에서만 삽입과 삭제가 일어납니다. 그래서 구조가 단순하고 push/pop 연산을 빠르게 이해할 수 있습니다.',
        operations: ['push(value): top에 삽입', 'pop(): top 원소 제거', 'top(): 가장 위 원소 확인'],
        complexities: ['push: O(1)', 'pop: O(1)', 'top: O(1)'],
        preview: 'Push를 누르면 값이 위쪽에 쌓이고, Pop을 누르면 가장 위 값부터 제거되는 흐름을 확인하세요.',
        link: 'visualizer.html?mode=stack'
    },
    queue: {
        title: 'Queue',
        category: 'Linear Structure',
        difficulty: 'Basic',
        description: 'Queue는 먼저 들어온 데이터가 먼저 나가는 FIFO 구조입니다. 대기열, BFS, 작업 처리 순서처럼 순서를 보장해야 하는 상황에서 사용됩니다.',
        concept: '삽입은 Rear에서, 삭제는 Front에서 일어납니다. Stack과 반대로 먼저 들어온 값이 먼저 처리됩니다.',
        operations: ['enqueue(value): rear에 삽입', 'dequeue(): front 원소 제거', 'front(): 가장 앞 원소 확인'],
        complexities: ['enqueue: O(1)', 'dequeue: O(1)', 'front: O(1)'],
        preview: 'Enqueue로 뒤에 값을 추가하고, Dequeue로 앞에서부터 값이 빠지는 과정을 확인하세요.',
        link: 'visualizer.html?mode=queue'
    },
    array: {
        title: 'Array',
        category: 'Sequence Structure',
        difficulty: 'Basic',
        description: 'Array는 같은 종류의 데이터를 연속된 메모리 공간에 저장하는 구조입니다. index를 이용해 특정 위치에 빠르게 접근할 수 있습니다.',
        concept: 'index 접근은 빠르지만, 중간 삽입과 삭제에서는 원소를 밀거나 당기는 shift 과정이 필요합니다.',
        operations: ['set(index, value): 값 변경', 'insert(index, value): 중간 삽입', 'erase(index): 특정 위치 삭제'],
        complexities: ['access: O(1)', 'insert: O(n)', 'erase: O(n)'],
        preview: 'Insert와 Erase를 실행할 때 원소들이 한 칸씩 이동하는 과정을 집중해서 보세요.',
        link: 'visualizer.html?mode=array'
    },
    list: {
        title: 'Linked List',
        category: 'Sequence Structure',
        difficulty: 'Basic',
        description: 'Linked List는 노드들이 포인터로 연결된 구조입니다. 배열처럼 연속된 메모리를 요구하지 않고, 노드 간 연결 관계가 핵심입니다.',
        concept: '각 노드는 데이터와 다음 노드 주소를 가집니다. Head부터 next를 따라가며 순차적으로 접근합니다.',
        operations: ['insert front: 맨 앞 삽입', 'insert back: 맨 뒤 삽입', 'remove front/back: 앞/뒤 삭제'],
        complexities: ['search: O(n)', 'insert front: O(1)', 'remove front: O(1)'],
        preview: '노드 사이에 화살표가 생기고 NULL로 끝나는 연결 구조를 확인하세요.',
        link: 'visualizer.html?mode=list'
    },
    tree: {
        title: 'Tree',
        category: 'Hierarchical Structure',
        difficulty: 'Intermediate',
        description: 'Tree는 부모-자식 관계를 표현하는 계층형 구조입니다. 파일 시스템, 조직도, 파싱 트리처럼 계층을 표현할 때 유용합니다.',
        concept: 'Root에서 시작해 여러 child로 뻗어 나갑니다. 일반 트리는 한 노드가 여러 자식을 가질 수 있습니다.',
        operations: ['add root: 루트 생성', 'add child: 부모 아래 자식 추가', 'preorder/postorder: 순회 결과 확인'],
        complexities: ['find node: O(n)', 'add child: O(n)', 'traversal: O(n)'],
        preview: '노드를 추가하면 SVG 선으로 부모와 자식이 연결됩니다. Preorder와 Postorder 결과도 비교해보세요.',
        link: 'visualizer.html?mode=tree'
    }
};

const cards = document.querySelectorAll('.structure-card');
const categoryLabel = document.getElementById('categoryLabel');
const difficultyBadge = document.getElementById('difficultyBadge');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const conceptText = document.getElementById('conceptText');
const operationList = document.getElementById('operationList');
const complexityList = document.getElementById('complexityList');
const previewText = document.getElementById('previewText');
const openVisualizerLink = document.getElementById('openVisualizerLink');

function renderList(target, items) {
    target.innerHTML = '';

    items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        target.appendChild(li);
    });
}

function selectStructure(key) {
    const data = structures[key];
    if (!data) return;

    cards.forEach((card) => {
        card.classList.toggle('active', card.dataset.key === key);
    });

    categoryLabel.textContent = data.category;
    difficultyBadge.textContent = data.difficulty;
    detailTitle.textContent = data.title;
    detailDescription.textContent = data.description;
    conceptText.textContent = data.concept;
    renderList(operationList, data.operations);
    renderList(complexityList, data.complexities);
    previewText.textContent = data.preview;
    openVisualizerLink.href = data.link;
    openVisualizerLink.textContent = `${data.title} 시각화 열기`;
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        selectStructure(card.dataset.key);
    });
});

selectStructure('stack');
