/* ICEM 2026 — ABIM Critical Care Medicine Exam Simulator */

const ACCESS_CODE  = "ICEM9000";
const EXAM_SECONDS = 6 * 60 * 60;
const PASSING_PCT  = 70;
const STORAGE_KEY  = "icem2026_exam_state_v1";

let questions = [];
let state = {
  phase:     "gate",
  answers:   {},
  flags:     {},
  current:   1,
  timeLeft:  EXAM_SECONDS,
  submitted: false,
  startTime: null,
};

let timerInterval = null;

// ── Boot ───────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  shuffleExamQuestions();
  document.getElementById("access-gate").style.display = "flex";
  bindGate();
  bindResultsFilter();
});

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleExamQuestions() {
  const letters = ["A", "B", "C", "D"];
  const base = (typeof QUESTIONS !== "undefined") ? QUESTIONS : [];
  if (!base.length) {
    console.error("QUESTIONS not found — check questions.js is loaded.");
    return;
  }
  const shuffledOrder = shuffleArray(base);
  questions = shuffledOrder.map((q, idx) => {
    const newLetters = shuffleArray([...letters]);
    const newOptions = {};
    let newCorrect = q.answer;
    letters.forEach((oldLetter, i) => {
      const newLetter = newLetters[i];
      newOptions[newLetter] = q.options[oldLetter];
      if (oldLetter === q.answer) newCorrect = newLetter;
    });
    return {
      ...q,
      num:     idx + 1,
      options: newOptions,
      correct: newCorrect,
    };
  });
}

// ── Persistence ────────────────────────────────────────────────────────────────
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function restoreState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (parsed && parsed.phase) {
      if (parsed.phase === "exam" && !parsed.submitted && parsed.startTime) {
        const elapsed = Math.floor((Date.now() - parsed.startTime) / 1000);
        parsed.timeLeft = Math.max(0, parsed.timeLeft - elapsed);
      }
      Object.assign(state, parsed);
      state.startTime = Date.now();
    }
  } catch (e) { /* ignore */ }
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
}

// ── Access Gate ────────────────────────────────────────────────────────────────
function bindGate() {
  const codeInput = document.getElementById("access-code-input");
  const submitBtn = document.getElementById("gate-submit");
  const errorEl   = document.getElementById("gate-error");

  function attempt() {
    const val = codeInput.value.trim().toUpperCase();
    if (val === ACCESS_CODE) {
      errorEl.textContent = "";
      restoreState();

      if (state.phase === "results") {
        showResults();
      } else if (state.phase === "exam" && !state.submitted) {
        showExam();
        startTimer();
        renderQuestion(state.current);
        renderGrid();
      } else {
        shuffleExamQuestions();
        state = {
          phase:     "exam",
          answers:   {},
          flags:     {},
          current:   1,
          timeLeft:  EXAM_SECONDS,
          submitted: false,
          startTime: Date.now(),
        };
        saveState();
        showExam();
        startTimer();
        renderQuestion(1);
        renderGrid();
      }
    } else {
      errorEl.textContent = "Incorrect access code. Please try again.";
      codeInput.value = "";
      codeInput.focus();
    }
  }

  submitBtn.addEventListener("click", attempt);
  codeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") attempt(); });
}

// ── Display Control ────────────────────────────────────────────────────────────
function showExam() {
  document.getElementById("access-gate").style.display  = "none";
  document.getElementById("exam-app").style.display     = "block";
  document.getElementById("results-page").style.display = "none";
}

// ── Timer ──────────────────────────────────────────────────────────────────────
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    state.timeLeft--;
    saveState();
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById("timer-value");
  const h = Math.floor(state.timeLeft / 3600);
  const m = Math.floor((state.timeLeft % 3600) / 60);
  const s = state.timeLeft % 60;
  el.textContent = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  el.classList.remove("warning", "critical");
  if (state.timeLeft < 300) el.classList.add("critical");
  else if (state.timeLeft < 900) el.classList.add("warning");
}

// ── Question Rendering ─────────────────────────────────────────────────────────
function renderQuestion(num) {
  state.current = num;
  const q = questions[num - 1];
  if (!q) return;

  document.getElementById("q-num-label").textContent = `Question ${num} of ${questions.length}`;

  const badge = document.getElementById("domain-badge");
  badge.textContent = domainLabel(q.domain);
  badge.className = "domain-badge " + slugify(q.domain);

  const flagBtn   = document.getElementById("flag-btn");
  const flagLabel = document.getElementById("flag-label");
  const isFlagged = !!state.flags[num];
  flagBtn.classList.toggle("flagged", isFlagged);
  flagLabel.textContent = isFlagged ? "Flagged" : "Flag";

  document.getElementById("question-text").textContent = q.question;

  const list     = document.getElementById("options-list");
  list.innerHTML = "";
  const answered   = state.answers[num];
  const showAnswer = state.submitted;

  ["A", "B", "C", "D"].forEach(letter => {
    if (!q.options[letter]) return;
    const li = document.createElement("li");
    li.className = "option-item";

    if (showAnswer) {
      li.classList.add("disabled");
      if (letter === q.correct) li.classList.add("correct");
      else if (letter === answered && letter !== q.correct) li.classList.add("wrong");
    } else if (answered === letter) {
      li.classList.add("selected");
    }

    const icon = showAnswer
      ? (letter === q.correct ? "✓" : (letter === answered ? "✗" : ""))
      : "";

    li.innerHTML = `
      <div class="option-letter">${letter}</div>
      <div class="option-text">${q.options[letter]}</div>
      <div class="option-check">${icon}</div>
    `;

    if (!showAnswer) {
      li.addEventListener("click", () => selectAnswer(num, letter));
    }

    list.appendChild(li);
  });

  const expPanel = document.getElementById("explanation-panel");
  if (showAnswer && q.explanation) {
    expPanel.innerHTML = `<div class="exp-label">&#9432; Explanation</div>${q.explanation}`;
    expPanel.classList.add("show");
  } else {
    expPanel.classList.remove("show");
    expPanel.innerHTML = "";
  }

  document.getElementById("btn-prev").disabled = num <= 1;
  document.getElementById("btn-next").disabled = num >= questions.length;

  const submitBtn = document.getElementById("btn-submit-exam");
  submitBtn.disabled = !!state.submitted;
  submitBtn.style.opacity = state.submitted ? "0.4" : "";

  const answeredCount = Object.keys(state.answers).length;
  const pct = (answeredCount / questions.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").textContent =
    `${answeredCount} of ${questions.length} answered`;

  updateGridDot(num);
  saveState();
}

function selectAnswer(num, letter) {
  if (state.submitted) return;
  state.answers[num] = letter;
  saveState();
  renderQuestion(num);
  renderGrid();
}

// ── Navigation bindings ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("btn-prev")?.addEventListener("click", () => {
      if (state.current > 1) { renderQuestion(state.current - 1); renderGrid(); }
    });
    document.getElementById("btn-next")?.addEventListener("click", () => {
      if (state.current < questions.length) { renderQuestion(state.current + 1); renderGrid(); }
    });
    document.getElementById("btn-submit-exam")?.addEventListener("click", handleSubmitClick);
    document.getElementById("btn-submit-header")?.addEventListener("click", handleSubmitClick);
    document.getElementById("btn-submit-mobile")?.addEventListener("click", () => {
      closeMobileMap();
      handleSubmitClick();
    });
    document.getElementById("flag-btn")?.addEventListener("click", () => {
      const num = state.current;
      state.flags[num] = !state.flags[num];
      if (!state.flags[num]) delete state.flags[num];
      document.getElementById("flag-btn").classList.toggle("flagged", !!state.flags[num]);
      document.getElementById("flag-label").textContent = state.flags[num] ? "Flagged" : "Flag";
      saveState();
      renderGrid();
    });

    // Mobile map toggle
    document.getElementById("btn-map-toggle")?.addEventListener("click", openMobileMap);
    document.getElementById("mobile-map-close")?.addEventListener("click", closeMobileMap);
    document.getElementById("mobile-map-overlay")?.addEventListener("click", (e) => {
      if (e.target === document.getElementById("mobile-map-overlay")) closeMobileMap();
    });
  }, 100);
});

function openMobileMap() {
  renderGridMobile();
  document.getElementById("mobile-map-overlay").classList.add("open");
}

function closeMobileMap() {
  document.getElementById("mobile-map-overlay").classList.remove("open");
}

function renderGridMobile() {
  const grid = document.getElementById("q-grid-mobile");
  if (!grid) return;
  grid.innerHTML = "";
  questions.forEach((_, i) => {
    const num = i + 1;
    const dot = document.createElement("div");
    dot.className = "q-dot";
    dot.textContent = num;
    if (state.answers[num]) dot.classList.add("answered");
    if (state.flags[num])   dot.classList.add("flagged");
    if (num === state.current) dot.classList.add("current");
    dot.title = `Question ${num}`;
    dot.addEventListener("click", () => {
      closeMobileMap();
      renderQuestion(num);
      renderGrid();
    });
    grid.appendChild(dot);
  });
}

// ── Submit Modal ───────────────────────────────────────────────────────────────
function handleSubmitClick() {
  if (state.submitted) return;
  const unansweredNums = questions.map((_, i) => i + 1).filter(n => !state.answers[n]);
  if (unansweredNums.length > 0) {
    showBlockModal(unansweredNums);
  } else {
    showConfirmModal();
  }
}

function showBlockModal(unansweredNums) {
  const overlay = document.getElementById("submit-modal-overlay");
  document.getElementById("sm-icon").textContent  = "⚠";
  document.getElementById("sm-title").textContent = `${unansweredNums.length} Question${unansweredNums.length > 1 ? "s" : ""} Unanswered`;
  document.getElementById("sm-body").innerHTML = `
    <p>You must answer <strong>all 300 questions</strong> before submitting. Click any question number below to go to it.</p>
    <div class="sm-q-list">
      ${unansweredNums.map(n => `<button class="sm-q-btn" data-num="${n}">Q${n}</button>`).join("")}
    </div>
  `;
  document.getElementById("sm-actions").innerHTML = `
    <button class="sm-btn-close" id="sm-close">Close &amp; Continue</button>
  `;
  overlay.classList.add("open");

  document.getElementById("sm-close").onclick = closeModal;
  document.querySelectorAll(".sm-q-btn").forEach(btn => {
    btn.onclick = () => {
      closeModal();
      renderQuestion(parseInt(btn.dataset.num, 10));
      renderGrid();
    };
  });
}

function showConfirmModal() {
  const overlay = document.getElementById("submit-modal-overlay");
  document.getElementById("sm-icon").textContent  = "✓";
  document.getElementById("sm-title").textContent = "Submit Exam?";
  document.getElementById("sm-body").innerHTML = `
    <p>You have answered all <strong>300 questions</strong>.<br>
    This will end your exam and you will not be able to change your answers.</p>
  `;
  document.getElementById("sm-actions").innerHTML = `
    <button class="sm-btn-cancel" id="sm-cancel">Cancel</button>
    <button class="sm-btn-submit" id="sm-confirm">Submit &amp; See Results</button>
  `;
  overlay.classList.add("open");

  document.getElementById("sm-cancel").onclick  = closeModal;
  document.getElementById("sm-confirm").onclick = () => { closeModal(); submitExam(false); };
}

function closeModal() {
  document.getElementById("submit-modal-overlay").classList.remove("open");
}

document.addEventListener("keydown", (e) => {
  if (state.phase !== "exam" || state.submitted) return;
  if (["A","B","C","D"].includes(e.key.toUpperCase()) && !e.ctrlKey && !e.metaKey) {
    const t = document.activeElement;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
    selectAnswer(state.current, e.key.toUpperCase());
  }
  if (e.key === "ArrowRight" && state.current < questions.length) { renderQuestion(state.current + 1); renderGrid(); }
  if (e.key === "ArrowLeft"  && state.current > 1)                { renderQuestion(state.current - 1); renderGrid(); }
});

// ── Grid ───────────────────────────────────────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById("q-grid");
  if (!grid) return;
  grid.innerHTML = "";
  questions.forEach((_, i) => {
    const num = i + 1;
    const dot = document.createElement("div");
    dot.className = "q-dot";
    dot.textContent = num;
    if (state.answers[num]) dot.classList.add("answered");
    if (state.flags[num])   dot.classList.add("flagged");
    if (num === state.current) dot.classList.add("current");
    dot.title = `Question ${num}`;
    dot.addEventListener("click", () => { renderQuestion(num); renderGrid(); });
    grid.appendChild(dot);
  });

  document.getElementById("stat-answered").textContent  = Object.keys(state.answers).length;
  document.getElementById("stat-flagged").textContent   = Object.keys(state.flags).length;
  document.getElementById("stat-remaining").textContent = questions.length - Object.keys(state.answers).length;
}

function updateGridDot(currentNum) {
  document.querySelectorAll(".q-dot").forEach((dot, i) => {
    dot.classList.toggle("current", i + 1 === currentNum);
  });
}

// ── Submit ─────────────────────────────────────────────────────────────────────
function submitExam(timedOut) {
  clearInterval(timerInterval);
  state.submitted = true;
  state.phase     = "results";
  saveState();
  showResults(timedOut);
}

// ── Results ────────────────────────────────────────────────────────────────────
let allReviewItems = [];

function showResults(timedOut = false) {
  document.getElementById("exam-app").style.display     = "none";
  document.getElementById("results-page").style.display = "block";

  let correct = 0;
  const domainStats = {};
  questions.forEach(q => {
    const d = q.domain;
    if (!domainStats[d]) domainStats[d] = { correct: 0, total: 0 };
    domainStats[d].total++;
    if (state.answers[q.num] === q.correct) {
      correct++;
      domainStats[d].correct++;
    }
  });

  const total  = questions.length;
  const pct    = Math.round((correct / total) * 100);
  const passed = pct >= PASSING_PCT;

  document.getElementById("res-score").textContent  = `${correct}/${total}`;
  document.getElementById("res-pct").textContent    = `${pct}%`;
  document.getElementById("res-status").textContent = passed ? "PASS" : "FAIL";
  document.getElementById("res-sub").textContent    = passed
    ? "You met the passing benchmark!"
    : `Need ${PASSING_PCT}% to pass — keep studying!`;
  document.getElementById("res-icon").textContent = passed ? "✓" : "✗";

  const statusCard = document.getElementById("res-status-card");
  statusCard.classList.remove("pass", "fail");
  statusCard.classList.add(passed ? "pass" : "fail");

  if (timedOut) document.getElementById("res-timeout-msg").style.display = "block";

  const breakdownEl = document.getElementById("domain-breakdown-rows");
  breakdownEl.innerHTML = "";

  const domainOrder = Object.keys(domainStats).sort(
    (a, b) => domainStats[b].total - domainStats[a].total
  );

  const palette = [
    "#1B3A6B","#C05A10","#0A7E8C","#8A1F1F","#2D7A2D",
    "#5B1E8A","#7A5200","#1A5C7A","#6B3A1B","#2D4A2D",
    "#1A4A6B","#4A2D6B",
  ];

  domainOrder.forEach((d, i) => {
    const st = domainStats[d];
    const dp = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
    const color = palette[i % palette.length];
    const row = document.createElement("div");
    row.className = "domain-row";
    row.innerHTML = `
      <div class="dr-label">${domainLabel(d)}</div>
      <div class="dr-bar-wrap">
        <div class="dr-bar" style="width:0%;background:${color};border-radius:6px;" data-width="${dp}"></div>
      </div>
      <div class="dr-stat">${st.correct}/${st.total}</div>
      <div class="dr-pct">${dp}%</div>
    `;
    breakdownEl.appendChild(row);
  });

  requestAnimationFrame(() => {
    document.querySelectorAll(".dr-bar[data-width]").forEach(bar => {
      bar.style.width = bar.dataset.width + "%";
    });
  });

  allReviewItems = [];
  questions.forEach(q => {
    const given     = state.answers[q.num] || null;
    const isCorrect = given === q.correct;
    const isSkipped = !given;
    allReviewItems.push({
      q, given, isCorrect, isSkipped,
      givenText:   given ? q.options[given] : null,
      correctText: q.options[q.correct],
    });
  });

  renderReviewList("all");

  document.getElementById("btn-print").onclick = () => window.print();
  document.getElementById("btn-reset").onclick  = resetExam;
}

function renderReviewList(filter) {
  const reviewEl = document.getElementById("review-list");
  reviewEl.innerHTML = "";

  const items = filter === "wrong"
    ? allReviewItems.filter(i => !i.isCorrect)
    : filter === "correct"
    ? allReviewItems.filter(i => i.isCorrect && !i.isSkipped)
    : allReviewItems;

  items.forEach(({ q, given, isCorrect, isSkipped, givenText, correctText }) => {
    const item = document.createElement("div");
    item.className = "review-item " + (isCorrect ? "correct-item" : "wrong-item");

    const badgeClass = isSkipped ? "skip-badge" : isCorrect ? "correct-badge" : "wrong-badge";
    const badgeText  = isSkipped ? "Not Answered" : isCorrect ? "✓ Correct" : "✗ Incorrect";

    let answersHtml = "";
    if (isSkipped) {
      answersHtml = `<div><span class="ri-wrong-ans">Not answered</span></div>`;
    } else if (isCorrect) {
      answersHtml = `<div><span class="ri-correct-ans">✓ Your answer (${given}): ${givenText}</span></div>`;
    } else {
      answersHtml = `
        <div><span class="ri-wrong-ans">✗ Your answer (${given}): ${givenText}</span></div>
        <div><span class="ri-correct-ans">✓ Correct answer (${q.correct}): ${correctText}</span></div>
      `;
    }

    item.innerHTML = `
      <div class="ri-header">
        <div class="ri-num">Q${q.num} &mdash; ${domainLabel(q.domain)}</div>
        <div class="ri-badge ${badgeClass}">${badgeText}</div>
      </div>
      <div class="ri-q">${q.question}</div>
      <div class="ri-answers">${answersHtml}</div>
      ${q.explanation ? `
        <div class="ri-exp">
          <div class="ri-exp-label">Explanation</div>
          ${q.explanation}
        </div>` : ""}
    `;
    reviewEl.appendChild(item);
  });

  if (items.length === 0) {
    reviewEl.innerHTML = `<p style="color:var(--muted);text-align:center;padding:24px;">No questions in this category.</p>`;
  }
}

function bindResultsFilter() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderReviewList(btn.dataset.filter);
  });
}

function resetExam() {
  if (!confirm("Start a new exam? All current answers will be lost.")) return;
  clearState();
  shuffleExamQuestions();
  state = {
    phase:     "exam",
    answers:   {},
    flags:     {},
    current:   1,
    timeLeft:  EXAM_SECONDS,
    submitted: false,
    startTime: Date.now(),
  };
  allReviewItems = [];
  saveState();
  showExam();
  if (timerInterval) clearInterval(timerInterval);
  startTimer();
  renderQuestion(1);
  renderGrid();
}

// ── Utilities ──────────────────────────────────────────────────────────────────
function slugify(str) {
  return (str || "").toLowerCase().replace(/[^a-z0-9]+/g, "_");
}

function domainLabel(d) {
  const map = {
    "Pulmonary":               "Pulmonary",
    "Shock":                   "Shock",
    "Renal/Metabolic":         "Renal/Metabolic",
    "Cardiovascular":          "Cardiovascular",
    "Infectious Disease":      "Infectious Disease",
    "Neurologic":              "Neurologic",
    "Gastrointestinal":        "Gastrointestinal",
    "Hematologic/Oncologic":   "Hematologic/Oncologic",
    "Surgical/Trauma":         "Surgical/Trauma",
    "Pharmacology/Toxicology": "Pharmacology/Toxicology",
    "Ultrasound/Procedures":   "Ultrasound/Procedures",
    "Ethics/Palliative Care":  "Ethics/Palliative Care",
  };
  return map[d] || d;
}
