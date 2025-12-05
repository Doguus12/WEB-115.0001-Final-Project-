// Task store: array of objects
// { id, name, priority, isImportant, isCompleted, date }
const tasks = [];
let nextId = 1;

const els = {
  form: document.getElementById('taskForm'),
  name: document.getElementById('taskName'),
  priority: document.getElementById('taskPriority'),
  important: document.getElementById('taskImportant'),
  completed: document.getElementById('taskCompleted'),
  list: document.getElementById('taskmanager')
};

// Utility: log full task list as JSON
function logTasks() {
  console.log(JSON.stringify(tasks));
}

// Utility: safe text (basic)
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

// Create a task object
function createTask({ name, priority, isImportant, isCompleted }) {
  const now = new Date();
  return {
    id: nextId++,
    name,
    priority,                // "High" | "Medium" | "Low"
    isImportant: !!isImportant,
    isCompleted: !!isCompleted,
    date: now                // Date object
  };
}

// Render tasks into #taskmanager using innerHTML
function render() {
  let html = '';

  for (const t of tasks) {
    // Build card HTML; styles required to be applied via .style in JS — done post-render
    html += `
      <article class="task-card" data-id="${t.id}">
        <div>
          <p class="task-title">${escapeHTML(t.name)}</p>
          <p class="task-meta">
            Priority: ${t.priority} · Added: ${t.date.toLocaleString()}
          </p>
          <div class="task-flags">
            <label>
              <input type="checkbox" class="toggle-completed" ${t.isCompleted ? 'checked' : ''}>
              Completed
            </label>
            <label>
              <input type="checkbox" class="toggle-important" ${t.isImportant ? 'checked' : ''}>
              Important
            </label>
          </div>
        </div>
        <div class="actions">
          <button class="icon-btn danger delete-btn" aria-label="Delete task">Delete</button>
        </div>
      </article>
    `;
  }

  // Inject cards
  els.list.innerHTML = html;

  // Apply conditional styling via .style property
  const cards = els.list.querySelectorAll('.task-card');
  cards.forEach((card) => {
    const id = Number(card.getAttribute('data-id'));
    const task = tasks.find(t => t.id === id);
    const titleEl = card.querySelector('.task-title');

    // Important tasks highlighted in red
    if (task.isImportant) {
      titleEl.style.color = '#ff5a5f'; // red
    } else {
      titleEl.style.color = ''; // reset
    }

    // Completed tasks have strikethrough
    if (task.isCompleted) {
      titleEl.style.textDecoration = 'line-through';
      titleEl.style.opacity = '0.75';
    } else {
      titleEl.style.textDecoration = '';
      titleEl.style.opacity = '';
    }

    // Optional: priority cue via border or left accent
    // (Allowed under "Apply styling based on priority")
    const borderColor =
      task.priority === 'High'   ? '#ffb703' :
      task.priority === 'Medium' ? '#7aa2f7' :
      '#66bb6a'; // Low
    card.style.borderLeft = `4px solid ${borderColor}`;
    card.style.paddingLeft = '0.75rem';
  });

  // Bind per-card events (completion, importance toggle, delete)
  bindCardEvents();
}

// Attach events after rendering
function bindCardEvents() {
  els.list.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.task-card');
      const id = Number(card.getAttribute('data-id'));
      deleteTask(id);
    });
  });

  els.list.querySelectorAll('.toggle-completed').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const card = e.target.closest('.task-card');
      const id = Number(card.getAttribute('data-id'));
      updateTask(id, { isCompleted: e.target.checked });
    });
  });

  els.list.querySelectorAll('.toggle-important').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const card = e.target.closest('.task-card');
      const id = Number(card.getAttribute('data-id'));
      updateTask(id, { isImportant: e.target.checked });
    });
  });
}

// Add task handler
function addTask(e) {
  e.preventDefault();

  const name = els.name.value.trim();
  const priority = els.priority.value;
  const isImportant = els.important.checked;
  const isCompleted = els.completed.checked;

  // Prevent invalid input (empty task names)
  if (name.length === 0) {
    alert('Please enter a task name.');
    els.name.focus();
    return;
  }

  const task = createTask({ name, priority, isImportant, isCompleted });
  tasks.push(task);
  render();
  logTasks(); // Log entire task list after add

  // Reset form after successful addition
  els.form.reset();
  els.priority.value = 'Medium'; // default
}

// Update task (partial updates)
function updateTask(id, changes) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return;

  tasks[idx] = { ...tasks[idx], ...changes };
  render();
  logTasks(); // Log entire task list after update
}

// Delete task
function deleteTask(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return;

  tasks.splice(idx, 1);
  render();
  logTasks(); // Log entire task list after delete
}

// Initial bindings
els.form.addEventListener('submit', addTask);

// Initial render (empty state)
render();
