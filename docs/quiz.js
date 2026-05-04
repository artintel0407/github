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
    DoublyList: { correct: 0, total: 0 },
    Sequence: { correct: 0, total: 0 },
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

    return allQuestions.filter(q => {
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

    selectedQuestions = shuffleArray(filtered).slice(0, quizCount);

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
        setFeedback("정답입니다. 좋아요, 다음 문제로 넘어가세요.", "correct");
    } else {
        setFeedback(`오답입니다. 정답은 "${q.answer}"입니다.`, "wrong");
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

    resultSummary.textContent =
        `총 ${selectedQuestions.length}문제 중 ${score}문제 정답`;
    resultBadge.textContent =
        `${Math.round((score / selectedQuestions.length) * 100)}%`;

    let weakest = "None";
    let lowestRate = 101;

    for (let key in stats) {
        if (stats[key].total > 0) {
            const rate =
                (stats[key].correct / stats[key].total) * 100;

            if (rate < lowestRate) {
                lowestRate = rate;
                weakest = key;
            }
        }
    }

    feedbackMessage.textContent =
        `${weakest} 분야의 복습이 필요합니다.`;
    feedbackMessage.className = "feedback-box";

    drawChart();
}

function drawChart() {
    const ctx = document.getElementById("resultChart");

    if (typeof Chart === "undefined") {
        feedbackMessage.textContent =
            "차트를 불러오지 못했습니다. 점수와 취약 분야는 위 결과를 참고하세요.";
        feedbackMessage.className = "feedback-box warning";
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
