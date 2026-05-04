const allQuestions = [
    // =========================
    // EASY (20)
    // =========================
    {
        category: "Array",
        difficulty: "easy",
        question: "배열에서 원소에 접근하는 가장 일반적인 방법은?",
        options: ["인덱스", "포인터", "키", "링크"],
        answer: "인덱스"
    },
    {
        category: "Array",
        difficulty: "easy",
        question: "배열의 메모리 구조는?",
        options: ["연속적", "분산적", "랜덤", "계층적"],
        answer: "연속적"
    },
    {
        category: "List",
        difficulty: "easy",
        question: "Singly Linked List의 각 노드는 무엇을 가진다?",
        options: ["값과 다음 노드", "값만", "이전 노드", "인덱스"],
        answer: "값과 다음 노드"
    },
    {
        category: "DoublyList",
        difficulty: "easy",
        question: "Doubly Linked List는 몇 개의 링크를 가진다?",
        options: ["2개", "1개", "3개", "0개"],
        answer: "2개"
    },
    {
        category: "Sequence",
        difficulty: "easy",
        question: "Sequence ADT는 무엇을 관리하는가?",
        options: ["순서 있는 데이터", "그래프", "트리", "키-값"],
        answer: "순서 있는 데이터"
    },
    {
        category: "Stack",
        difficulty: "easy",
        question: "Stack의 삽입 연산은?",
        options: ["Push", "Pop", "Enqueue", "Dequeue"],
        answer: "Push"
    },
    {
        category: "Stack",
        difficulty: "easy",
        question: "Stack의 삭제 연산은?",
        options: ["Pop", "Push", "Insert", "Shift"],
        answer: "Pop"
    },
    {
        category: "Queue",
        difficulty: "easy",
        question: "Queue의 기본 원칙은?",
        options: ["FIFO", "LIFO", "Random", "Sorted"],
        answer: "FIFO"
    },
    {
        category: "Queue",
        difficulty: "easy",
        question: "Queue의 삽입 위치는?",
        options: ["Rear", "Front", "Top", "Middle"],
        answer: "Rear"
    },
    {
        category: "Tree",
        difficulty: "easy",
        question: "트리의 최상위 노드는?",
        options: ["Root", "Leaf", "Parent", "Child"],
        answer: "Root"
    },
    {
        category: "Array",
        difficulty: "easy",
        question: "배열의 첫 번째 원소 인덱스는 일반적으로?",
        options: ["0", "1", "-1", "2"],
        answer: "0"
    },
    {
        category: "Array",
        difficulty: "easy",
        question: "배열의 크기를 초과하여 접근하면 발생할 수 있는 문제는?",
        options: ["오류", "자동 정렬", "메모리 증가", "링크 생성"],
        answer: "오류"
    },
    {
        category: "List",
        difficulty: "easy",
        question: "연결 리스트는 주로 어떤 방식으로 데이터를 연결하는가?",
        options: ["포인터", "인덱스", "키", "정렬"],
        answer: "포인터"
    },
    {
        category: "DoublyList",
        difficulty: "easy",
        question: "이중 연결 리스트의 마지막 노드를 가리키는 것은?",
        options: ["Tail", "Head", "Root", "Leaf"],
        answer: "Tail"
    },
    {
        category: "Sequence",
        difficulty: "easy",
        question: "Sequence ADT는 데이터의 어떤 특성을 중요하게 다루는가?",
        options: ["순서", "색상", "크기", "속도"],
        answer: "순서"
    },
    {
        category: "Stack",
        difficulty: "easy",
        question: "Stack에서 가장 마지막에 들어간 데이터가 먼저 나오는 구조는?",
        options: ["LIFO", "FIFO", "Priority", "Sorted"],
        answer: "LIFO"
    },
    {
        category: "Queue",
        difficulty: "easy",
        question: "Queue에서 먼저 들어간 데이터가 먼저 나오는 구조는?",
        options: ["FIFO", "LIFO", "Stack", "Heap"],
        answer: "FIFO"
    },
    {
        category: "Tree",
        difficulty: "easy",
        question: "트리에서 부모가 같은 노드끼리는 무엇이라 하는가?",
        options: ["Sibling", "Leaf", "Root", "Branch"],
        answer: "Sibling"
    },
    {
        category: "Tree",
        difficulty: "easy",
        question: "트리에서 자식이 없는 노드는?",
        options: ["Leaf", "Root", "Parent", "Edge"],
        answer: "Leaf"
    },
    {
        category: "Queue",
        difficulty: "easy",
        question: "Queue의 삭제 연산은?",
        options: ["Dequeue", "Enqueue", "Push", "Pop"],
        answer: "Dequeue"
    },

    // =========================
    // MEDIUM (20)
    // =========================
    {
        category: "Array",
        difficulty: "medium",
        question: "배열의 중간 삽입 평균 시간복잡도는?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        answer: "O(n)"
    },
    {
        category: "Array",
        difficulty: "medium",
        question: "배열 삭제 시 주로 필요한 작업은?",
        options: ["시프트", "정렬", "링크 연결", "루트 교체"],
        answer: "시프트"
    },
    {
        category: "List",
        difficulty: "medium",
        question: "Linked List의 장점은?",
        options: ["동적 크기", "빠른 인덱스 접근", "정렬 자동화", "메모리 절약"],
        answer: "동적 크기"
    },
    {
        category: "DoublyList",
        difficulty: "medium",
        question: "Doubly Linked List의 장점은?",
        options: ["양방향 탐색", "빠른 정렬", "배열화", "루트 관리"],
        answer: "양방향 탐색"
    },
    {
        category: "Sequence",
        difficulty: "medium",
        question: "Sequence에서 rank 기반 접근은?",
        options: ["순서 번호 접근", "키 접근", "포인터 접근", "랜덤 접근"],
        answer: "순서 번호 접근"
    },
    {
        category: "Stack",
        difficulty: "medium",
        question: "Stack의 구조는?",
        options: ["LIFO", "FIFO", "Priority", "Sorted"],
        answer: "LIFO"
    },
    {
        category: "Queue",
        difficulty: "medium",
        question: "Queue의 삭제 위치는?",
        options: ["Front", "Rear", "Top", "Bottom"],
        answer: "Front"
    },
    {
        category: "Tree",
        difficulty: "medium",
        question: "자식이 없는 노드는?",
        options: ["Leaf", "Root", "Parent", "Sibling"],
        answer: "Leaf"
    },
    {
        category: "Tree",
        difficulty: "medium",
        question: "Binary Tree의 최대 자식 수는?",
        options: ["2", "3", "1", "무제한"],
        answer: "2"
    },
    {
        category: "Queue",
        difficulty: "medium",
        question: "원형 큐의 장점은?",
        options: ["공간 재사용", "정렬", "트리 변환", "루트 관리"],
        answer: "공간 재사용"
    },
    {
        category: "Array",
        difficulty: "medium",
        question: "배열의 장점으로 가장 적절한 것은?",
        options: ["빠른 인덱스 접근", "동적 크기", "양방향 탐색", "자동 정렬"],
        answer: "빠른 인덱스 접근"
    },
    {
        category: "List",
        difficulty: "medium",
        question: "단일 연결 리스트에서 마지막 노드 탐색 시간복잡도는?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        answer: "O(n)"
    },
    {
        category: "DoublyList",
        difficulty: "medium",
        question: "이중 연결 리스트는 어떤 탐색이 가능한가?",
        options: ["양방향", "단방향", "랜덤", "계층형"],
        answer: "양방향"
    },
    {
    category: "Sequence",
    difficulty: "medium",
    question: "Sequence에서 insertAtRank는 무엇을 의미하는가?",
    options: ["특정 위치 삽입", "맨 뒤 삭제", "정렬", "탐색 종료"],
    answer: "특정 위치 삽입"
},
{
        category: "Stack",
        difficulty: "medium",
        question: "Stack의 top은 무엇을 의미하는가?",
        options: ["가장 위 원소", "가장 아래 원소", "중간 원소", "루트 노드"],
        answer: "가장 위 원소"
    },
    {
        category: "Queue",
        difficulty: "medium",
        question: "Queue를 배열로 구현할 때 발생할 수 있는 문제는?",
        options: ["공간 낭비", "정렬 오류", "재귀 실패", "루트 손실"],
        answer: "공간 낭비"
    },
    {
        category: "Tree",
        difficulty: "medium",
        question: "트리의 간선 수는 노드 수가 n일 때?",
        options: ["n-1", "n", "2n", "log n"],
        answer: "n-1"
    },
    {
        category: "Tree",
        difficulty: "medium",
        question: "레벨 순서 탐색에 사용되는 자료구조는?",
        options: ["Queue", "Stack", "Heap", "List"],
        answer: "Queue"
    },
    {
        category: "Stack",
        difficulty: "medium",
        question: "괄호 검사 알고리즘에 주로 사용하는 자료구조는?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Stack"
    },
    {
        category: "Array",
        difficulty: "medium",
        question: "배열의 마지막 위치에 원소를 추가하는 연산은 일반적으로?",
        options: ["Append", "Shift", "Traverse", "Sort"],
        answer: "Append"
    },

    // =========================
    // HARD (20+)
    // =========================
    {
        category: "Array",
        difficulty: "hard",
        question: "배열의 단점은?",
        options: ["고정 크기", "빠른 접근", "연속 메모리", "간단 구조"],
        answer: "고정 크기"
    },
    {
        category: "List",
        difficulty: "hard",
        question: "Singly Linked List의 마지막 노드는?",
        options: ["NULL 가리킴", "Head 가리킴", "Root 가리킴", "자기 자신"],
        answer: "NULL 가리킴"
    },
    {
        category: "DoublyList",
        difficulty: "hard",
        question: "Doubly Linked List의 첫 노드 prev는?",
        options: ["NULL", "Head", "Tail", "Self"],
        answer: "NULL"
    },
    {
        category: "Sequence",
        difficulty: "hard",
        question: "Sequence ADT는 구현 방식으로 무엇을 사용할 수 있는가?",
        options: ["배열과 리스트", "트리만", "큐만", "스택만"],
        answer: "배열과 리스트"
    },
    {
        category: "Stack",
        difficulty: "hard",
        question: "재귀 호출은 어떤 자료구조를 사용하나?",
        options: ["Stack", "Queue", "Sequence", "list"],
        answer: "Stack"
    },
    {
        category: "Queue",
        difficulty: "hard",
        question: "BFS 탐색에 사용되는 자료구조는?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: "Queue"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "트리의 높이는?",
        options: ["최대 깊이", "노드 수", "리프 수", "루트 수"],
        answer: "최대 깊이"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "Preorder 순회 순서는?",
        options: ["Root-Left-Right", "Left-Root-Right", "Left-Right-Root", "Right-Root-Left"],
        answer: "Root-Left-Right"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "Inorder 순회 순서는?",
        options: ["Left-Root-Right", "Root-Left-Right", "Right-Left-Root", "Left-Right-Root"],
        answer: "Left-Root-Right"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "Postorder 순회 순서는?",
        options: ["Left-Right-Root", "Root-Left-Right", "Left-Root-Right", "Right-Root-Left"],
        answer: "Left-Right-Root"
    },
    {
        category: "Array",
        difficulty: "hard",
        question: "동적 배열(Vector)의 재할당 시 평균 삽입 시간복잡도는?",
        options: ["O(1)", "O(n)", "O(log n)", "amortized O(1)"],
        answer: "amortized O(1)"
    },
    {
        category: "Array",
        difficulty: "hard",
        question: "배열의 이진 탐색이 가능한 전제 조건은?",
        options: ["정렬", "연결", "순환", "동적 크기"],
        answer: "정렬"
    },
    {
        category: "List",
        difficulty: "hard",
        question: "특정 노드를 일반적으로 삭제하기 위해 필요한 것은?",
        options: ["이전 노드 정보", "다음 노드 정보", "루트 노드", "인덱스"],
        answer: "이전 노드 정보"
    },
    {
        category: "List",
        difficulty: "hard",
        question: "연결 리스트의 탐색 시간복잡도는?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
        answer: "O(n)"
    },
    {
        category: "DoublyList",
        difficulty: "hard",
        question: "이중 연결 리스트의 단점은?",
        options: ["추가 메모리 사용", "순차 접근 불가", "삽입 불가", "삭제 불가"],
        answer: "추가 메모리 사용"
    },
    {
        category: "DoublyList",
        difficulty: "hard",
        question: "이중 연결 리스트에서 Tail 기준 역방향 탐색은?",
        options: ["가능", "불가능", "정렬 필요", "루트 필요"],
        answer: "가능"
    },
    {
        category: "Sequence",
        difficulty: "hard",
        question: "Sequence ADT의 핵심 연산이 아닌 것은?",
        options: ["해시", "insertAtRank", "removeAtRank", "elementAtRank"],
    answer: "해시"
    },
    {
        category: "Sequence",
        difficulty: "hard",
        question: "배열 기반 Sequence의 중간 삽입 비용은?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        answer: "O(n)"
    },
    {
        category: "Stack",
        difficulty: "hard",
        question: "수식 계산에서 후위 표기식 평가에 주로 쓰이는 것은?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Stack"
    },
    {
        category: "Stack",
        difficulty: "hard",
        question: "함수 호출 스택이 가득 차면 발생하는 것은?",
        options: ["Stack Overflow", "Heap Overflow", "Queue Overflow", "Memory Leak"],
        answer: "Stack Overflow"
    },
    {
        category: "Queue",
        difficulty: "hard",
        question: "우선순위 큐의 일반 구현 구조는?",
        options: ["Heap", "Stack", "Array only", "Linked List only"],
        answer: "Heap"
    },
    {
        category: "Queue",
        difficulty: "hard",
        question: "Deque는 무엇을 의미하는가?",
        options: ["양쪽 삽입/삭제 가능", "정렬 큐", "우선순위 큐", "원형 배열"],
        answer: "양쪽 삽입/삭제 가능"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "완전 이진 트리의 특징은?",
        options: ["왼쪽부터 채워짐", "정렬됨", "모든 노드가 2개 자식", "균형 유지"],
        answer: "왼쪽부터 채워짐"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "포화 이진 트리의 조건은?",
        options: ["모든 내부 노드가 2자식", "높이 균형", "루트 제외 1자식", "정렬 상태"],
        answer: "모든 내부 노드가 2자식"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "BST의 중위 순회 결과는?",
        options: ["오름차순", "내림차순", "무작위", "레벨 순서"],
        answer: "오름차순"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "AVL Tree의 목적은?",
        options: ["균형 유지", "정렬 제거", "메모리 절약", "순환 연결"],
        answer: "균형 유지"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "Heap의 루트 노드는?",
        options: ["최댓값 또는 최솟값", "중앙값", "무작위", "항상 0"],
        answer: "최댓값 또는 최솟값"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "Red-Black Tree는 무엇을 보장하는가?",
        options: ["균형에 가까운 구조", "완전 이진 트리", "포화 상태", "단일 방향"],
        answer: "균형에 가까운 구조"
    },
    {
        category: "Tree",
        difficulty: "hard",
        question: "B-Tree는 주로 어디에 사용되는가?",
        options: ["데이터베이스", "스택 구현", "네트워크", "그래프 탐색"],
        answer: "데이터베이스"
    }
];

const questionRevisions = {
    "배열에서 원소에 접근하는 가장 일반적인 방법은?": {
        question: "Array에서 특정 원소에 접근할 때 주로 사용하는 값은?",
        explanation: "Array는 각 원소의 위치를 index로 구분하고 접근합니다."
    },
    "배열의 메모리 구조는?": {
        question: "Array의 원소들은 메모리에 보통 어떻게 배치되는가?",
        explanation: "Array는 원소들이 연속된 메모리 공간에 저장되는 구조입니다."
    },
    "Singly Linked List의 각 노드는 무엇을 가진다?": {
        question: "Singly Linked List의 노드는 보통 어떤 정보를 저장하는가?",
        explanation: "단일 연결 리스트의 노드는 값과 다음 노드를 가리키는 정보를 함께 저장합니다."
    },
    "Doubly Linked List는 몇 개의 링크를 가진다?": {
        question: "Doubly Linked List의 한 노드는 앞뒤 이동을 위해 몇 개의 링크를 사용하는가?",
        explanation: "이중 연결 리스트는 이전 노드와 다음 노드를 가리키는 두 링크를 사용합니다."
    },
    "Sequence ADT는 무엇을 관리하는가?": {
        category: "List",
        question: "Array/List처럼 순서가 있는 자료구조가 주로 관리하는 것은?",
        explanation: "Sequence는 데이터의 순서를 중요하게 다루는 추상 자료형입니다."
    },
    "Stack의 삽입 연산은?": {
        question: "Stack에 데이터를 넣는 연산은 무엇인가?",
        explanation: "Stack에서는 push 연산으로 top에 데이터를 추가합니다."
    },
    "Stack의 삭제 연산은?": {
        question: "Stack에서 top 데이터를 꺼내는 연산은 무엇인가?",
        explanation: "Stack에서는 pop 연산으로 가장 위의 데이터를 제거합니다."
    },
    "Queue의 기본 원칙은?": {
        question: "Queue는 어떤 순서로 데이터를 처리하는가?",
        explanation: "Queue는 먼저 들어온 데이터가 먼저 나가는 FIFO 구조입니다."
    },
    "Queue의 삽입 위치는?": {
        question: "Queue에서 새 데이터는 어느 쪽에 추가되는가?",
        explanation: "Queue에서는 rear 쪽에 새 데이터를 추가합니다."
    },
    "트리의 최상위 노드는?": {
        question: "Tree에서 가장 위에 있는 시작 노드는 무엇인가?",
        explanation: "Tree의 시작 노드는 root라고 부릅니다."
    },
    "배열의 첫 번째 원소 인덱스는 일반적으로?": {
        question: "Array에서 첫 번째 원소의 index는 일반적으로 무엇인가?",
        explanation: "대부분의 프로그래밍 언어에서 Array index는 0부터 시작합니다."
    },
    "배열의 크기를 초과하여 접근하면 발생할 수 있는 문제는?": {
        question: "Array의 범위를 넘어 접근하면 어떤 문제가 생길 수 있는가?",
        explanation: "정해진 범위를 벗어난 접근은 오류나 예기치 않은 동작을 일으킬 수 있습니다."
    },
    "연결 리스트는 주로 어떤 방식으로 데이터를 연결하는가?": {
        question: "List는 노드 사이를 주로 무엇으로 연결하는가?",
        explanation: "연결 리스트는 각 노드가 다음 노드를 가리키는 포인터 또는 참조로 이어집니다."
    },
    "이중 연결 리스트의 마지막 노드를 가리키는 것은?": {
        question: "Doubly Linked List에서 마지막 노드를 가리키는 이름은 무엇인가?",
        explanation: "연결 리스트의 마지막 노드는 일반적으로 tail이라고 부릅니다."
    },
    "Sequence ADT는 데이터의 어떤 특성을 중요하게 다루는가?": {
        category: "Array",
        question: "Array/List 계열 자료구조에서 특히 중요한 데이터의 특성은 무엇인가?",
        explanation: "순차 자료구조는 데이터가 놓인 순서를 핵심으로 다룹니다."
    },
    "Stack에서 가장 마지막에 들어간 데이터가 먼저 나오는 구조는?": {
        question: "Stack처럼 마지막에 들어간 데이터가 먼저 나오는 구조를 무엇이라 하는가?",
        explanation: "Stack은 Last In, First Out의 약자인 LIFO 구조입니다."
    },
    "Queue에서 먼저 들어간 데이터가 먼저 나오는 구조는?": {
        question: "Queue처럼 먼저 들어간 데이터가 먼저 나오는 구조를 무엇이라 하는가?",
        explanation: "Queue는 First In, First Out의 약자인 FIFO 구조입니다."
    },
    "트리에서 부모가 같은 노드끼리는 무엇이라 하는가?": {
        question: "Tree에서 같은 부모를 가진 노드들을 무엇이라 하는가?",
        explanation: "같은 부모를 공유하는 노드들은 sibling이라고 부릅니다."
    },
    "트리에서 자식이 없는 노드는?": {
        question: "Tree에서 자식 노드가 없는 노드를 무엇이라 하는가?",
        explanation: "자식이 없는 노드는 leaf 노드입니다."
    },
    "Queue의 삭제 연산은?": {
        question: "Queue에서 앞쪽 데이터를 꺼내는 연산은 무엇인가?",
        explanation: "Queue에서는 dequeue 연산으로 front의 데이터를 제거합니다."
    },
    "배열의 중간 삽입 평균 시간복잡도는?": {
        question: "Array 중간에 원소를 삽입할 때 평균 시간복잡도는?",
        explanation: "중간 삽입은 뒤쪽 원소들을 이동해야 하므로 일반적으로 O(n)이 걸립니다."
    },
    "배열 삭제 시 주로 필요한 작업은?": {
        question: "Array에서 원소를 삭제한 뒤 주로 필요한 작업은 무엇인가?",
        explanation: "삭제 후 빈자리를 메우기 위해 뒤 원소들을 앞으로 shift해야 합니다."
    },
    "Queue의 삭제 위치는?": {
        question: "Queue에서 데이터가 삭제되는 위치는 어디인가?",
        explanation: "Queue는 front에서 데이터를 삭제합니다."
    },
    "자식이 없는 노드는?": {
        question: "Tree에서 자식이 없는 노드를 무엇이라 하는가?",
        explanation: "자식이 없는 노드는 leaf 노드입니다."
    },
    "Binary Tree의 최대 자식 수는?": {
        question: "Binary Tree에서 한 노드가 가질 수 있는 최대 자식 수는?",
        explanation: "Binary Tree의 각 노드는 최대 두 개의 자식을 가질 수 있습니다."
    },
    "원형 큐의 장점은?": {
        question: "원형 Queue의 대표 장점은 무엇인가?",
        explanation: "원형 Queue는 배열 앞쪽에 생긴 빈 공간을 다시 사용할 수 있습니다."
    },
    "배열의 장점으로 가장 적절한 것은?": {
        question: "Array의 대표 장점으로 가장 적절한 것은?",
        explanation: "Array는 index를 이용한 직접 접근이 빠릅니다."
    },
    "단일 연결 리스트에서 마지막 노드 탐색 시간복잡도는?": {
        question: "Singly Linked List에서 마지막 노드를 찾는 시간복잡도는?",
        explanation: "단일 연결 리스트는 head부터 차례대로 따라가야 하므로 O(n)이 걸립니다."
    },
    "이중 연결 리스트는 어떤 탐색이 가능한가?": {
        question: "Doubly Linked List에서는 어떤 방향의 탐색이 가능한가?",
        explanation: "이중 연결 리스트는 prev와 next를 이용해 양방향으로 이동할 수 있습니다."
    },
    "Stack의 top은 무엇을 의미하는가?": {
        question: "Stack에서 top은 무엇을 가리키는가?",
        explanation: "top은 Stack에서 삽입과 삭제가 일어나는 가장 위의 원소를 뜻합니다."
    },
    "Queue를 배열로 구현할 때 발생할 수 있는 문제는?": {
        question: "Array로 Queue를 단순 구현할 때 생길 수 있는 문제는?",
        explanation: "앞쪽에서 삭제가 반복되면 배열 앞부분의 빈 공간이 낭비될 수 있습니다."
    },
    "트리의 간선 수는 노드 수가 n일 때?": {
        question: "Tree의 노드 수가 n개일 때 간선 수는 보통 몇 개인가?",
        explanation: "일반적인 Tree는 노드가 n개이면 간선은 n-1개입니다."
    },
    "레벨 순서 탐색에 사용되는 자료구조는?": {
        question: "Tree의 레벨 순서 탐색에서 사용하는 자료구조는 무엇인가?",
        explanation: "레벨 순서 탐색은 가까운 레벨부터 방문하므로 Queue를 사용합니다."
    },
    "괄호 검사 알고리즘에 주로 사용하는 자료구조는?": {
        question: "괄호 짝을 검사할 때 주로 사용하는 자료구조는 무엇인가?",
        explanation: "괄호 검사는 가장 최근에 열린 괄호를 먼저 확인해야 하므로 Stack을 사용합니다."
    },
    "배열의 마지막 위치에 원소를 추가하는 연산은 일반적으로?": {
        question: "Array의 마지막 위치에 원소를 추가하는 연산을 보통 무엇이라 하는가?",
        explanation: "배열의 끝에 값을 추가하는 연산은 append라고 부릅니다."
    },
    "Linked List의 장점은?": {
        question: "Linked List가 배열보다 유리한 대표 상황은?",
        options: ["중간 삽입/삭제가 잦을 때", "인덱스로 즉시 접근할 때", "항상 정렬할 때", "고정 크기만 필요할 때"],
        answer: "중간 삽입/삭제가 잦을 때",
        explanation: "연결 리스트는 노드의 연결만 바꾸면 삽입/삭제가 가능하므로, 위치를 이미 알고 있다면 배열보다 이동 비용이 작습니다."
    },
    "Doubly Linked List의 장점은?": {
        question: "이중 연결 리스트의 대표 장점은?",
        options: ["양방향 탐색", "빠른 정렬", "배열화", "루트 관리"],
        answer: "양방향 탐색",
        explanation: "이중 연결 리스트는 prev와 next 링크를 모두 가져 앞뒤 방향으로 이동할 수 있습니다."
    },
    "Sequence에서 rank 기반 접근은?": {
        category: "Array",
        question: "배열에서 rank 또는 index 기반 접근은 무엇을 의미하는가?",
        options: ["순서 번호로 원소에 접근", "키로 원소에 접근", "포인터만 따라 접근", "무작위로만 접근"],
        answer: "순서 번호로 원소에 접근",
        explanation: "배열은 index를 사용해 특정 순서의 원소에 직접 접근하는 구조입니다."
    },
    "Sequence에서 insertAtRank는 무엇을 의미하는가?": {
        category: "List",
        question: "List에서 insertAtRank는 무엇을 의미하는가?",
        options: ["특정 위치에 삽입", "맨 뒤 삭제", "정렬", "탐색 종료"],
        answer: "특정 위치에 삽입",
        explanation: "insertAtRank는 순서상 특정 위치에 새 원소를 넣는 연산입니다."
    },
    "Sequence ADT의 핵심 연산이 아닌 것은?": {
        category: "Array",
        question: "Array/List 계열 순차 구조의 핵심 연산으로 보기 어려운 것은?",
        options: ["해시", "insertAtRank", "removeAtRank", "elementAtRank"],
        answer: "해시",
        explanation: "해시는 Hash Table의 핵심 개념이고, 순차 구조의 기본 rank 연산과는 거리가 있습니다."
    },
    "Sequence ADT는 구현 방식으로 무엇을 사용할 수 있는가?": {
        category: "List",
        question: "순차 자료구조를 구현할 때 사용할 수 있는 대표 방식은?",
        options: ["배열과 리스트", "트리만", "큐만", "스택만"],
        answer: "배열과 리스트",
        explanation: "순서가 있는 데이터를 저장할 때 배열 기반 또는 연결 리스트 기반 구현을 선택할 수 있습니다."
    },
    "재귀 호출은 어떤 자료구조를 사용하나?": {
        difficulty: "medium",
        question: "재귀 호출의 실행 흐름을 설명할 때 가장 관련 깊은 자료구조는?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: "Stack",
        explanation: "함수 호출은 호출 스택에 쌓이고, 가장 나중에 호출된 함수가 먼저 종료됩니다."
    },
    "BFS 탐색에 사용되는 자료구조는?": {
        difficulty: "medium",
        question: "BFS 탐색에서 다음에 방문할 노드를 관리하는 자료구조는?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: "Queue",
        explanation: "BFS는 먼저 발견한 노드부터 방문해야 하므로 FIFO 구조인 Queue를 사용합니다."
    },
    "트리의 높이는?": {
        difficulty: "medium",
        question: "Tree의 높이는 무엇을 의미하는가?",
        options: ["루트에서 가장 깊은 노드까지의 최대 깊이", "전체 노드 수", "리프 노드 수", "루트 노드 수"],
        answer: "루트에서 가장 깊은 노드까지의 최대 깊이",
        explanation: "트리의 높이는 루트에서 가장 깊은 리프까지 내려가는 경로의 길이로 이해할 수 있습니다."
    },
    "배열의 단점은?": {
        difficulty: "medium",
        question: "고정 크기 배열의 대표적인 단점은?",
        options: ["크기 변경이 어렵다", "인덱스 접근이 느리다", "연속 메모리를 쓰지 않는다", "구조가 항상 복잡하다"],
        answer: "크기 변경이 어렵다",
        explanation: "고정 크기 배열은 생성 후 크기를 늘리기 어렵고, 더 큰 공간으로 복사해야 할 수 있습니다."
    },
    "Singly Linked List의 마지막 노드는?": {
        question: "Singly Linked List의 마지막 노드는 다음 노드로 무엇을 가리키는가?",
        explanation: "마지막 노드는 더 이어지는 노드가 없으므로 next가 NULL을 가리킵니다."
    },
    "Doubly Linked List의 첫 노드 prev는?": {
        question: "Doubly Linked List의 첫 노드에서 prev는 무엇을 가리키는가?",
        explanation: "첫 노드 앞에는 이전 노드가 없으므로 prev는 NULL입니다."
    },
    "배열의 이진 탐색이 가능한 전제 조건은?": {
        question: "Array에서 이진 탐색을 사용하려면 어떤 조건이 필요한가?",
        explanation: "이진 탐색은 중간값을 기준으로 범위를 줄이므로 데이터가 정렬되어 있어야 합니다."
    },
    "특정 노드를 일반적으로 삭제하기 위해 필요한 것은?": {
        question: "Singly Linked List에서 특정 노드를 삭제할 때 보통 필요한 정보는?",
        explanation: "삭제할 노드 앞의 연결을 다음 노드로 바꿔야 하므로 이전 노드 정보가 필요합니다."
    },
    "연결 리스트의 탐색 시간복잡도는?": {
        question: "Linked List에서 원하는 값을 찾는 탐색 시간복잡도는?",
        explanation: "Linked List는 처음부터 순서대로 따라가며 확인해야 하므로 O(n)이 걸립니다."
    },
    "이중 연결 리스트의 단점은?": {
        question: "Doubly Linked List의 대표적인 단점은 무엇인가?",
        explanation: "각 노드가 이전/다음 링크를 모두 저장하므로 단일 연결 리스트보다 추가 메모리가 필요합니다."
    },
    "이중 연결 리스트에서 Tail 기준 역방향 탐색은?": {
        question: "Doubly Linked List에서 tail부터 거꾸로 탐색할 수 있는가?",
        explanation: "각 노드가 prev 링크를 가지므로 tail에서 head 방향으로 이동할 수 있습니다."
    },
    "수식 계산에서 후위 표기식 평가에 주로 쓰이는 것은?": {
        question: "후위 표기식 계산에 주로 사용하는 자료구조는 무엇인가?",
        explanation: "후위 표기식은 피연산자를 쌓아 두었다가 연산자를 만났을 때 꺼내 계산하므로 Stack을 사용합니다."
    },
    "함수 호출 스택이 가득 차면 발생하는 것은?": {
        question: "함수 호출 Stack이 한계를 넘으면 어떤 문제가 발생하는가?",
        explanation: "호출이 너무 깊어 Stack 공간을 초과하면 Stack Overflow가 발생할 수 있습니다."
    },
    "우선순위 큐의 일반 구현 구조는?": {
        question: "Priority Queue를 구현할 때 자주 사용하는 자료구조는 무엇인가?",
        explanation: "Priority Queue는 우선순위가 높은 값을 빠르게 꺼내기 위해 Heap으로 자주 구현합니다."
    },
    "Deque는 무엇을 의미하는가?": {
        question: "Deque는 어떤 Queue 구조를 의미하는가?",
        explanation: "Deque는 양쪽 끝에서 삽입과 삭제가 모두 가능한 double-ended queue입니다."
    },
    "완전 이진 트리의 특징은?": {
        question: "Complete Binary Tree의 대표적인 특징은 무엇인가?",
        explanation: "Complete Binary Tree는 마지막 레벨을 제외하고 노드가 채워지며, 마지막 레벨은 왼쪽부터 채워집니다."
    },
    "포화 이진 트리의 조건은?": {
        question: "Full Binary Tree의 조건은 무엇인가?",
        explanation: "Full Binary Tree는 모든 내부 노드가 정확히 두 개의 자식을 갖습니다."
    },
    "BST의 중위 순회 결과는?": {
        question: "BST를 inorder로 순회하면 어떤 순서의 결과가 나오는가?",
        explanation: "BST를 inorder로 순회하면 값이 오름차순으로 나옵니다."
    },
    "AVL Tree의 목적은?": {
        question: "AVL Tree를 사용하는 주된 목적은 무엇인가?",
        explanation: "AVL Tree는 높이 균형을 유지해 탐색 성능을 안정적으로 만들기 위한 Tree입니다."
    },
    "Heap의 루트 노드는?": {
        question: "Heap에서 root 노드에는 보통 어떤 값이 위치하는가?",
        explanation: "Max Heap은 최댓값, Min Heap은 최솟값이 root에 위치합니다."
    },
    "Red-Black Tree는 무엇을 보장하는가?": {
        question: "Red-Black Tree가 유지하려는 핵심 성질은 무엇인가?",
        explanation: "Red-Black Tree는 완전한 균형은 아니지만 균형에 가까운 구조를 유지합니다."
    },
    "B-Tree는 주로 어디에 사용되는가?": {
        question: "B-Tree는 주로 어떤 분야에서 사용되는가?",
        explanation: "B-Tree는 디스크 접근을 줄이기 좋아 데이터베이스와 파일 시스템에서 자주 사용됩니다."
    }
};

const additionalQuestions = [
    {
        category: "Stack",
        difficulty: "easy",
        question: "Stack에서 데이터를 넣는 위치는?",
        options: ["Top", "Front", "Rear", "Root"],
        answer: "Top",
        explanation: "Stack은 top 한쪽 끝에서 push와 pop이 일어납니다."
    },
    {
        category: "Stack",
        difficulty: "medium",
        question: "Stack이 적합한 예시는?",
        options: ["되돌리기 기능", "대기열 처리", "정렬된 검색", "최단 거리 저장"],
        answer: "되돌리기 기능",
        explanation: "되돌리기는 가장 최근 작업부터 취소하므로 LIFO 구조와 잘 맞습니다."
    },
    {
        category: "Queue",
        difficulty: "easy",
        question: "Queue에서 가장 먼저 삭제되는 데이터는?",
        options: ["가장 먼저 들어온 데이터", "가장 나중에 들어온 데이터", "가장 큰 데이터", "가장 작은 데이터"],
        answer: "가장 먼저 들어온 데이터",
        explanation: "Queue는 FIFO 구조라 먼저 들어온 값이 먼저 나갑니다."
    },
    {
        category: "Queue",
        difficulty: "medium",
        question: "원형 큐가 필요한 주된 이유는?",
        options: ["앞쪽 빈 공간을 재사용하기 위해", "항상 정렬하기 위해", "트리를 만들기 위해", "재귀 호출을 저장하기 위해"],
        answer: "앞쪽 빈 공간을 재사용하기 위해",
        explanation: "배열 큐에서 dequeue 후 생긴 앞쪽 빈칸을 원형으로 다시 사용할 수 있습니다."
    },
    {
        category: "Array",
        difficulty: "easy",
        question: "Array에서 index 접근의 평균 시간복잡도는?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: "O(1)",
        explanation: "배열은 시작 주소와 index로 원소 위치를 바로 계산할 수 있습니다."
    },
    {
        category: "Array",
        difficulty: "medium",
        question: "Array 중간에 원소를 삽입할 때 비용이 커지는 이유는?",
        options: ["뒤 원소들을 이동해야 해서", "항상 트리를 만들어서", "포인터를 두 개 저장해서", "루트가 바뀌어서"],
        answer: "뒤 원소들을 이동해야 해서",
        explanation: "배열 중간 삽입은 삽입 위치 뒤의 원소들을 한 칸씩 밀어야 합니다."
    },
    {
        category: "List",
        difficulty: "easy",
        question: "Singly Linked List에서 head는 어떤 노드를 가리키는가?",
        options: ["첫 번째 노드", "마지막 노드", "중간 노드", "부모 노드"],
        answer: "첫 번째 노드",
        explanation: "head는 연결 리스트 순회의 시작점인 첫 번째 노드를 가리킵니다."
    },
    {
        category: "List",
        difficulty: "medium",
        question: "Linked List에서 특정 값을 찾는 일반적인 시간복잡도는?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
        answer: "O(n)",
        explanation: "연결 리스트는 head부터 next를 따라 순차적으로 확인해야 합니다."
    },
    {
        category: "Tree",
        difficulty: "easy",
        question: "Tree에서 root는 어떤 특징을 갖는가?",
        options: ["부모가 없는 시작 노드", "자식이 없는 노드", "항상 가장 작은 값", "마지막 노드"],
        answer: "부모가 없는 시작 노드",
        explanation: "root는 트리의 시작점이며 부모 노드가 없습니다."
    },
    {
        category: "Tree",
        difficulty: "medium",
        question: "Tree 순회가 필요한 이유는?",
        options: ["모든 노드를 일정한 순서로 방문하기 위해", "배열 크기를 고정하기 위해", "큐의 앞쪽을 비우기 위해", "스택의 top만 보기 위해"],
        answer: "모든 노드를 일정한 순서로 방문하기 위해",
        explanation: "트리는 계층 구조라 preorder, postorder 같은 순회 규칙으로 모든 노드를 방문합니다."
    }
];

function inferSequenceCategory(question) {
    const text = `${question.question} ${question.options.join(" ")}`;

    if (text.includes("배열") || text.includes("index") || text.includes("인덱스") || text.includes("이진 탐색")) {
        return "Array";
    }

    return "List";
}

function normalizeQuestion(question) {
    const revision = questionRevisions[question.question] || {};
    const merged = { ...question, ...revision };

    if (question.category === "DoublyList") {
        merged.category = "List";
        merged.explanation = merged.explanation || "이중 연결 리스트는 연결 리스트의 한 종류이며, List 범주에서 함께 다룹니다.";
    }

    if (question.category === "Sequence") {
        merged.category = revision.category || inferSequenceCategory(question);
        merged.explanation = merged.explanation || "Sequence 개념은 구현 관점에 따라 Array 또는 List 범주에서 함께 다룹니다.";
    }

    if (merged.difficulty === "hard" && ["Stack", "Queue", "Array", "List", "Tree"].includes(merged.category)) {
        merged.difficulty = "medium";
    }

    merged.explanation = merged.explanation || `${merged.category}의 핵심 개념을 확인하는 문제입니다.`;

    return merged;
}

const quizQuestions = [
    ...allQuestions.map(normalizeQuestion),
    ...additionalQuestions
];

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let chartInstance = null;
let answerLocked = false;

const stats = {
    Stack: { correct: 0, total: 0 },
    Queue: { correct: 0, total: 0 },
    Array: { correct: 0, total: 0 },
    List: { correct: 0, total: 0 },
    Tree: { correct: 0, total: 0 }
};

const categoryMap = {
    all: null,
    stack: "Stack",
    queue: "Queue",
    array: "Array",
    list: "List",
    tree: "Tree"
};

const setupScreen = document.getElementById("setupScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const difficultySelect = document.getElementById("difficultySelect");
const countSelect = document.getElementById("countSelect");
const categorySelect = document.getElementById("categorySelect");
const setupMessage = document.getElementById("setupMessage");

const quizTitle = document.getElementById("quizTitle");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

const nextBtn = document.getElementById("nextBtn");
const scorePill = document.getElementById("scorePill");
const answerFeedback = document.getElementById("answerFeedback");

const resultSummary = document.getElementById("resultSummary");
const feedbackMessage = document.getElementById("feedbackMessage");
const resultBadge = document.getElementById("resultBadge");

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("retryBtn").addEventListener("click", resetQuiz);
nextBtn.addEventListener("click", nextQuestion);
categorySelect.addEventListener("change", updateSetupMessage);
difficultySelect.addEventListener("change", updateSetupMessage);
countSelect.addEventListener("change", updateSetupMessage);

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function prepareQuestion(question) {
    return {
        ...question,
        options: shuffleArray(question.options)
    };
}

function getSelectedCategory() {
    return categoryMap[categorySelect.value] || null;
}

function getCategoryLabel() {
    if (categorySelect.value === "all") return "전체";
    return categorySelect.options[categorySelect.selectedIndex].textContent;
}

function getFilteredQuestions() {
    const difficulty = difficultySelect.value;
    const category = getSelectedCategory();

    return quizQuestions.filter(q => {
        const difficultyMatches = q.difficulty === difficulty;
        const categoryMatches = category === null || q.category === category;

        return difficultyMatches && categoryMatches;
    });
}

function showScreen(screen) {
    setupScreen.hidden = screen !== setupScreen;
    quizScreen.hidden = screen !== quizScreen;
    resultScreen.hidden = screen !== resultScreen;
}

function setFeedback(message, type = "") {
    answerFeedback.hidden = false;
    answerFeedback.textContent = message;
    answerFeedback.className = "feedback-box";

    if (type) {
        answerFeedback.classList.add(type);
    }
}

function updateSetupMessage() {
    const filtered = getFilteredQuestions();
    const categoryLabel = getCategoryLabel();
    const difficultyLabel = difficultySelect.options[difficultySelect.selectedIndex].textContent;
    const count = Number(countSelect.value);
    const shortageText = filtered.length > 0 && filtered.length < count
        ? " 선택한 문항 수보다 적으면 가능한 문제를 모두 출제합니다."
        : "";

    setupMessage.textContent =
        `${categoryLabel} / ${difficultyLabel} 조건에서 ${filtered.length}개 문제를 사용할 수 있습니다.${shortageText}`;

    setupMessage.className = "status-box";
}

function applyCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const category = (params.get("category") || "").toLowerCase();

    if (category && categoryMap[category]) {
        categorySelect.value = category;
    }

    updateSetupMessage();
}

function startQuiz() {
    const count = Number(countSelect.value);
    const filtered = getFilteredQuestions();
    const quizCount = Math.min(count, filtered.length);

    if (quizCount === 0) {
        setupMessage.textContent =
            "선택한 조건에 사용할 수 있는 문제가 없습니다. 조건을 바꿔주세요.";
        setupMessage.className = "status-box status-warning";
        return;
    }

    selectedQuestions = shuffleArray(filtered)
        .slice(0, quizCount)
        .map(prepareQuestion);

    currentIndex = 0;
    score = 0;
    answerLocked = false;

    for (let key in stats) {
        stats[key].correct = 0;
        stats[key].total = 0;
    }

    quizTitle.textContent = `${getCategoryLabel()} Quiz`;
    scorePill.textContent = "0 correct";
    nextBtn.hidden = true;
    answerFeedback.hidden = true;

    showScreen(quizScreen);
    loadQuestion();
}

function loadQuestion() {
    const q = selectedQuestions[currentIndex];
    const percent = Math.round(((currentIndex + 1) / selectedQuestions.length) * 100);

    answerLocked = false;

    questionText.textContent = q.question;
    progressText.textContent =
        `${currentIndex + 1} / ${selectedQuestions.length}`;
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    scorePill.textContent = `${score} correct`;
    answerFeedback.hidden = true;
    answerFeedback.textContent = "";

    optionsContainer.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;

        btn.addEventListener("click", () => {
            checkAnswer(option);
        });

        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (answerLocked) return;

    const q = selectedQuestions[currentIndex];
    answerLocked = true;

    if (!stats[q.category]) {
        stats[q.category] = { correct: 0, total: 0 };
    }

    stats[q.category].total++;

    if (selected.trim() === q.answer.trim()) {
        score++;
        stats[q.category].correct++;
        setFeedback(`정답입니다. ${q.explanation}`, "correct");
    } else {
        setFeedback(`오답입니다. 정답은 "${q.answer}"입니다. ${q.explanation}`, "wrong");
    }

    Array.from(optionsContainer.children).forEach(btn => {
        const option = btn.textContent.trim();

        if (option === selected.trim()) {
            btn.classList.add("selected");
        }

        if (option === q.answer.trim()) {
            btn.classList.add("correct");
        } else if (option === selected.trim()) {
            btn.classList.add("wrong");
        }

        btn.disabled = true;
    });

    scorePill.textContent = `${score} correct`;
    nextBtn.hidden = false;
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex >= selectedQuestions.length) {
        showResults();
        return;
    }

    nextBtn.hidden = true;
    loadQuestion();
}

function showResults() {
    showScreen(resultScreen);
    const total = selectedQuestions.length;
    const accuracy = Math.round((score / total) * 100);

    resultSummary.textContent =
        `총 ${total}문제 중 ${score}문제 정답`;
    resultBadge.textContent = `${accuracy}%`;

    if (score === total) {
        feedbackMessage.textContent =
            "완벽합니다. 선택한 범위의 핵심 개념을 잘 이해했습니다.";
        feedbackMessage.className = "feedback-box correct";
        drawChart();
        return;
    }

    let weakestCategories = [];
    let lowestRate = 101;
    const reliableMinimum = 2;
    const eligibleStats = Object.entries(stats)
        .filter(([, value]) => value.total >= reliableMinimum);
    const targetStats = eligibleStats.length > 0
        ? eligibleStats
        : Object.entries(stats).filter(([, value]) => value.total > 0);

    targetStats.forEach(([key, value]) => {
        const rate = (value.correct / value.total) * 100;

        if (rate < lowestRate) {
            lowestRate = rate;
            weakestCategories = [key];
        } else if (rate === lowestRate) {
            weakestCategories.push(key);
        }
    });

    const weakText = weakestCategories.length > 0
        ? weakestCategories.join(", ")
        : "특정 분야";
    const sampleNote = eligibleStats.length > 0
        ? ""
        : " 다만 카테고리별 문제 수가 적어 약점 분야는 참고용으로만 보세요.";

    feedbackMessage.textContent =
        `${getScoreFeedback(accuracy)} 틀린 문제가 있어 ${weakText} 분야를 한 번 더 확인하면 좋습니다.${sampleNote}`;
    feedbackMessage.className = "feedback-box warning";

    drawChart();
}

function getScoreFeedback(accuracy) {
    if (accuracy >= 85) {
        return "전반적으로 잘 이해했습니다.";
    }

    if (accuracy >= 65) {
        return "핵심 흐름은 잡혀 있습니다.";
    }

    if (accuracy >= 40) {
        return "기본 개념을 다시 연결해보면 좋아집니다.";
    }

    return "기초 개념부터 차근차근 복습하는 것을 추천합니다.";
}

function drawChart() {
    const ctx = document.getElementById("resultChart");

    if (typeof Chart === "undefined") {
        return;
    }

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(stats),
            datasets: [{
                label: "정답률 (%)",
                data: Object.keys(stats).map(key => {
                    if (stats[key].total === 0) return 0;
                    return Math.round(
                        (stats[key].correct / stats[key].total) * 100
                    );
                })
            }]
        },
        options: {
            responsive: true
        }
    });
}

function resetQuiz() {
    answerLocked = false;
    answerFeedback.hidden = true;
    nextBtn.hidden = true;
    updateSetupMessage();
    showScreen(setupScreen);
}

applyCategoryFromUrl();
