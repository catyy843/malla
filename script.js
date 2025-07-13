// Mapa de desbloqueo: cada curso desbloquea una lista de cursos
const unlockMap = {
  'Fundamentos de Enfermería I': ['Integración al Desempeño Profesional I'],
  'Química General y Orgánica': ['Bioquímica'],
  'Biología Celular y Genética': ['Histología', 'Anatomía', 'Fisiología General', 'Biología del Desarrollo y Embriología Humana', 'Bioquímica'],
  'Matemáticas': ['Investigación en Salud I'],
  'Física': ['Fisiología General', 'Investigación en Salud I'],
  'Ciencias Sociales y Salud I': ['Ciencias Sociales y Salud II'],
  'Educación en Salud I': ['Educación en Salud II', 'Clínica de Salud Comunitaria'],
  'Inglés I': ['Inglés II'],

  'Salud Comunitaria I': ['Salud Comunitaria II', 'Clínica de Salud Comunitaria'],
  'Integración al Desempeño Profesional I': ['Neonatología I'],
  'Bioquímica': ['Farmacología'],
  'Biología del Desarrollo y Embriología Humana': ['Obstetricia Fisiológica I'],
  'Fisiología General': ['Fundamentos de Enfermería II', 'Agentes Vivos de Enfermedad', 'Neonatología I', 'Fisiología de Sistemas', 'Obstetricia Fisiológica I', 'Inmunología'],
  'Anatomía': ['Ginecología Fisiológica', 'Fundamentos de Enfermería II', 'Agentes Vivos de Enfermedad', 'Neonatología I', 'Obstetricia Fisiológica I'],
  'Histología': ['Ginecología Fisiológica', 'Fundamentos de Enfermería II', 'Agentes Vivos de Enfermedad', 'Neonatología I', 'Obstetricia Fisiológica I'],
  'Inglés II': ['Inglés III'],

  'Fundamentos de Enfermería II': ['Integración del Desempeño Profesional II'],
  'Obstetricia Fisiológica I': ['Obstetricia Fisiológica II'],
  'Neonatología I': ['Neonatología II'],
  'Fisiología de Sistemas': ['Ginecología Fisiológica', 'Integración Desempeño Profesional II', 'Neonatología II', 'Fisiopatología', 'Reproducción Humana', 'Farmacología', 'Obstetricia Fisiológica II'],
  'Inmunología': [],
  'Agentes Vivos de Enfermedad': ['Infectología', 'Neonatología II'],
  'Ciencias Sociales y Salud II': ['Ciencias Sociales y Salud III'],
  'Inglés III': ['Inglés IV'],

  'Neonatología II': ['Clínica Neonatal I', 'Clínica de Atención Primaria I', 'Clínica de Partos I', 'Clínica de Puerperio', 'Neonatología III', 'Obstetricia Patológica'],
  'Ginecología Fisiológica': ['Clínica de Atención Primaria I'],
  'Obstetricia Fisiológica II': ['Clínica de Partos I', 'Clínica de Puerperio', 'Neonatología III', 'Obstetricia Patológica'],
  'Integración Desempeño Profesional II': ['Clínica de Salud Comunitaria', 'Clínica Neonatal I', 'Clínica de Atención Primaria I', 'Clínica de Partos I', 'Clínica de Puerperio'],
  'Infectología': ['Clínica Neonatal I', 'Clínica de Atención Primaria I', 'Clínica de Partos I', 'Clínica de Puerperio'],
  'Fisiopatología': ['Clínica Neonatal I', 'Clínica de Atención Primaria I', 'Clínica de Partos I', 'Clínica de Puerperio', 'Neonatología III', 'Obstetricia Patológica'],
  'Farmacología': ['Clínica Neonatal I', 'Clínica de Atención Primaria I', 'Clínica de Partos I', 'Clínica de Puerperio', 'Neonatología III', 'Obstetricia Patológica'],
  'Investigación en Salud I': ['Gestión y Liderazgo en Salud I', 'Investigación en Salud II'],

  'Clínica Neonatal I': [],
  'Clínica de Partos I': [],
  'Clínica de Atención Primaria I': ['Ginecología Patológica'],
  'Clínica de Puerperio': [],
  'Clínica de Salud Comunitaria': [],
  'Módulo Integrado Interdisciplinario Multiprofesional I': ['Módulo Integrado Interdisciplinario Multiprofesional II'],

  'Neonatología III': ['Clínica Neonatal II', 'Enfermería Médico Quirúrgica'],
  'Obstetricia Patológica': ['Clínica de Atención Primaria II', 'Enfermería Médico Quirúrgica', 'Clínica de Alto Riesgo Obstétrico'],
  'Salud Comunitaria II': ['Clínica de Atención Primaria II'],
  'Educación en Salud II': [],
  'Gestión y Liderazgo en Salud I': ['Gestión y Liderazgo en Salud II'],
  'Investigación en Salud II': ['Investigación en Salud III'],
  'Ciencias Sociales y Salud III': ['Ciencias Sociales IV'],

  'Enfermería Médico Quirúrgica': ['Clínica de Enfermería Médico Quirúrgica', 'Clínica Neonatal II', 'Clínica de Partos II', 'Clínica de Alto Riesgo Obstétrico'],
  'Reproducción Humana': [],
  'Ginecología Patológica': ['Clínica de Atención Primaria II', 'Clínica de Enfermería Médico Quirúrgica'],
  'Gestión y Liderazgo en Salud II': [],
  'Inglés IV': [],
  'Investigación en Salud III': ['Seminario Unidad de Investigación I'],
  'Ciencias Sociales y Salud IV': [],

  'Clínica Neonatal II': ['Internado de Neonatología'],
  'Clínica de Partos II': ['Internado Obstetricia'],
  'Clínica de Atención Primaria II': ['Internado Atención Primaria'],
  'Clínica de Alto Riesgo Obstétrico': ['Internado Obstetricia'],
  'Clínica de Enfermería Médico Quirúrgica': ['Internado Ginecología'],
  'Módulo Integrado Interdisciplinario Multiprofesional II': [],

  'Internado de Neonatología': [],
  'Internado Obstetricia': [],
  'Internado Atención Primaria': [],
  'Internado Ginecología': [],
  'Internado Electivo': [],
  'Seminario Unidad de Investigación I': ['Seminario Unidad de Investigación II'],
  'Seminario Unidad de Investigación II': []
};

// Obtener todos los elementos li de cursos
const courseElements = document.querySelectorAll('li[data-course]');

const STORAGE_KEY = 'mallaUnlockedCourses';

// Cargar cursos desbloqueados desde localStorage o iniciar con los del primer semestre desbloqueados
let unlockedCourses = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  'Fundamentos de Enfermería I',
  'Química General y Orgánica',
  'Biología Celular y Genética',
  'Matemáticas',
  'Física',
  'Ciencias Sociales y Salud I',
  'Educación en Salud I',
  'Inglés I'
];

// Función para actualizar la visualización (clases desbloqueadas)
function updateCourses() {
  courseElements.forEach(li => {
    const courseName = li.dataset.course;
    if (unlockedCourses.includes(courseName)) {
      li.classList.add('unlocked');
      li.style.pointerEvents = 'auto';
    } else {
      li.classList.remove('unlocked');
      li.style.pointerEvents = 'none';
    }
  });
}

// Función para desbloquear cursos
function unlockCourses(coursesToUnlock) {
  let added = false;
  coursesToUnlock.forEach(course => {
    if (!unlockedCourses.includes(course)) {
      unlockedCourses.push(course);
      added = true;
    }
  });
  if (added) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedCourses));
    updateCourses();
  }
}

// Inicializar la visualización
updateCourses();

// Añadir evento click a cada curso desbloqueado para desbloquear los siguientes
courseElements.forEach(li => {
  li.addEventListener('click', () => {
    const courseName = li.dataset.course;
    if (!unlockedCourses.includes(courseName)) return; // no hace nada si está bloqueado
    const toUnlock = unlockMap[courseName];
    if (toUnlock && toUnlock.length > 0) {
      unlockCourses(toUnlock);
      alert(`Has desbloqueado:\n${toUnlock.join(', ')}`);
    } else {
      alert('No hay cursos para desbloquear a partir de este.');
    }
  });
});
