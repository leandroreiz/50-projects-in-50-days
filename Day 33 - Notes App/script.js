////////////////////////////////
// Add button selector
const addBtn = document.getElementById('add');

////////////////////////////////
// Add a new note
const addNewNote = (text = '') => {
  // Create the note element
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  document.body.appendChild(note);

  // Selectors
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked.parse(text);

  // Listeners
  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLS();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = marked.parse(value);

    updateLS();
  });
};

////////////////////////////////
// Update the local storage
const updateLS = () => {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
};

////////////////////////////////
// Init localStorage
const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) notes.forEach((note) => addNewNote(note));

////////////////////////////////
// Add new notes listener
addBtn.addEventListener('click', addNewNote.bind(null, ''));
