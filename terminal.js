/* ============================================================
   MACOS TERMINAL INTERFACE — Karri Varshith Reddy Portfolio
   Only active under [data-theme="console"]
   ============================================================ */

(function () {
  'use strict';

  /* ── Portfolio Data (pulled from codebase) ─────────────── */
  const DATA = {
    about: {
      name: 'Karri Varshith Reddy',
      role: 'B.Tech CSE Student',
      university: 'IIITDM Kancheepuram',
      desc: 'Computer Science and Engineering undergraduate at IIITDM Kancheepuram with a strong foundation in programming, Data Structures & Algorithms, Object-Oriented Programming, and database systems. Focused on software engineering and developing efficient software solutions.',
      status: 'Available for Opportunities',
      areas: [
        { icon: '💻', title: 'Software Engineering', desc: 'Hands-on experience developing software applications using C and Python, with practical knowledge of SQL, PostgreSQL, and modular system design.' },
        { icon: '🧠', title: 'Problem Solving & DSA', desc: 'Sharpening algorithmic thinking through data structures, hash tables, linked lists, and problem solving to build efficient software systems.' },
        { icon: '🗄️', title: 'Database Technologies', desc: 'Practical experience designing relational schemas, writing queries, and managing workflows using SQL and PostgreSQL.' },
        { icon: '⚙️', title: 'Core CS Fundamentals', desc: 'Strong foundation in Object-Oriented Programming, Finite State Machines (FSM), memory management, and algorithm implementation.' },
      ]
    },
    education: [
      { level: 'School', name: 'Future Kids School', board: 'ICSE Board', score: '94%', current: false, gold: false },
      { level: 'Intermediate', name: 'Sri Shirdi Sai Vidya Nikethan', board: 'CBSE Board', score: '91%', current: false, gold: false },
      { level: 'University (Current)', name: 'IIITDM Kancheepuram', board: 'B.Tech — Computer Science & Engineering', score: 'CGPA: 8.7/10', extra: 'Expected Graduation: 2029', current: true, gold: false },
      { level: 'Achievement', name: 'JEE Mains', board: 'Common Rank List', score: 'CRL Rank: 22250', current: false, gold: true },
    ],
    skills: [
      { name: 'C', category: 'Programming Language', level: 100 },
      { name: 'C++', category: 'Programming Language', level: 100 },
      { name: 'Java', category: 'Programming Language', level: 100 },
      { name: 'Python', category: 'Programming Language', level: 100 },
      { name: 'SQL', category: 'Database Query Language', level: 100 },
      { name: 'DSA', category: 'Data Structures & Algorithms', level: 100 },
      { name: 'Git & GitHub', category: 'Version Control & Collaboration', level: 100 },
    ],
    projects: [
      {
        name: 'Fraud Transaction Investigation System',
        lang: 'Python · PostgreSQL',
        desc: 'A fraud detection and investigation system to identify suspicious banking transactions and manage investigation workflows.',
        features: ['Detects suspicious banking transactions', '5 rule-based fraud detection algorithms', 'Suspicious transaction pattern matching', 'Severity classification and alert generation', 'Finite State Machine (FSM) case lifecycle', 'Investigation workflow state transitions'],
        tech: ['Python', 'PostgreSQL', 'Relational Database Modeling', 'Finite State Machine (FSM)', 'Rule-based detection algorithms'],
        github: 'https://github.com/varshithreddy1109/Fraud-Transaction-Investigation-System',
        demo: null,
      },
      {
        name: 'Banking System in C',
        lang: 'C · Data Structures',
        desc: 'A Banking System project implemented in C using Hash Table with Linked List chaining for efficient account management.',
        features: ['Create new bank account', 'Login with account number and PIN', 'PIN reset using DOB verification', 'Deposit money', 'Withdraw money with balance check', 'View account balance', 'Hash table-based account storage', 'Collision handling using linked list'],
        tech: ['C Programming', 'Data Structures (Hash Table, Linked List)', 'Dynamic Memory Allocation (malloc / free)'],
        github: 'https://github.com/varshithreddy1109/banking-system-project-c',
        demo: null,
      },
    ],
    experience: [
      {
        title: 'AI for Sustainability Virtual Intern',
        type: 'Virtual Internship',
        org: '1M1B (One Million for One Billion)',
        period: 'July 2026 – September 2026',
        support: 'Supported by AICTE & IBM SkillsBuild',
        desc: 'Successfully completed the AI for Sustainability Virtual Internship organized by 1M1B (One Million for One Billion), supported by AICTE in collaboration with IBM SkillsBuild. Gained practical exposure to AI, responsible AI usage, and sustainability concepts aligned with the United Nations Sustainable Development Goals (SDGs). Explored Agentic AI and Retrieval-Augmented Generation (RAG) systems for solving real-world problems.',
        skills: ['Agentic AI', 'Retrieval-Augmented Generation (RAG)', 'Responsible AI', 'UN SDGs', 'Sustainability'],
        cert: '1m1b-internship-certificate.pdf',
      }
    ],
    certificates: [
      {
        name: 'Google AI Essentials',
        issuer: 'Coursera – Google',
        year: '2026',
        skills: ['Artificial Intelligence', 'Generative AI', 'Prompt Engineering', 'AI Productivity Tools', 'Responsible AI Usage'],
        desc: 'Completed a foundational course on Artificial Intelligence offered by Google through Coursera. Gained practical understanding of AI concepts, generative AI tools, prompt engineering techniques, responsible AI usage, and real-world applications of AI for productivity and problem-solving.',
        link: 'https://coursera.org/share/ce6bab0317080c19c5683e05c928095e',
      },
      {
        name: 'Google Prompting Essentials',
        issuer: 'Coursera – Google',
        year: '2026',
        skills: ['AI Agent Design', 'Multimodal Prompting', 'Prompt Chaining', 'Prompt Design', 'Prompt Evaluation & Iteration', 'Responsible AI'],
        desc: 'Completed the Google Prompting Essentials Specialization offered by Google through Coursera. Gained practical understanding of prompt engineering techniques, designing effective prompts for different tasks, using AI for productivity, data analysis, presentations, and leveraging AI as a creative and expert partner for real-world applications.',
        link: 'https://coursera.org/share/0048147721c98651579770d5616f7af8',
      },
    ],
    contact: {
      email: 'varshithreddy1206@gmail.com',
      github: 'https://github.com/varshithreddy1109',
      linkedin: 'https://www.linkedin.com/in/karrivarshithreddy/',
      blog: 'https://varshithtechjournal.hashnode.dev/',
    },
    resume: 'resume.pdf',
  };

  /* ── Color helpers ─────────────────────────────────────── */
  const C = {
    green:  s => `<span style="color:#4ec9b0">${s}</span>`,
    blue:   s => `<span style="color:#569cd6">${s}</span>`,
    yellow: s => `<span style="color:#dcdcaa">${s}</span>`,
    purple: s => `<span style="color:#c586c0">${s}</span>`,
    orange: s => `<span style="color:#ce9178">${s}</span>`,
    gray:   s => `<span style="color:#858585">${s}</span>`,
    white:  s => `<span style="color:#d4d4d4">${s}</span>`,
    comment:s => `<span style="color:#6a9955">${s}</span>`,
    link:   (text, href, download) =>
      `<a href="${href}" ${download ? 'download' : 'target="_blank" rel="noopener"'} style="color:#4ec9b0;text-decoration:underline;cursor:pointer;" onmouseover="this.style.color='#9cdcfe'" onmouseout="this.style.color='#4ec9b0'">${text}</a>`,
  };

  /* ── Command Outputs ───────────────────────────────────── */
  const COMMANDS = {

    help() {
      return `
${C.green('┌─────────────────────────────────────────────────────────────┐')}
${C.green('│')}  ${C.yellow('kvr@portfolio — Available Commands')}                          ${C.green('│')}
${C.green('└─────────────────────────────────────────────────────────────┘')}

  ${C.blue('about')}         ${C.gray('→')} ${C.white('Display info about Karri Varshith Reddy')}
  ${C.blue('education')}     ${C.gray('→')} ${C.white('Show education history & achievements')}
  ${C.blue('skills')}        ${C.gray('→')} ${C.white('List tech stack and skill levels')}
  ${C.blue('projects')}      ${C.gray('→')} ${C.white('View projects with GitHub links')}
  ${C.blue('experience')}    ${C.gray('→')} ${C.white('Show work & internship experience')}
  ${C.blue('certificates')}  ${C.gray('→')} ${C.white('List certificates with verification links')}
  ${C.blue('contact')}       ${C.gray('→')} ${C.white('Get contact details & send a message')}
  ${C.blue('resume')}        ${C.gray('→')} ${C.white('Open / download resume PDF')}
  ${C.blue('whoami')}        ${C.gray('→')} ${C.white('Who is this portfolio about?')}
  ${C.blue('ls')}            ${C.gray('→')} ${C.white('List all available sections')}
  ${C.blue('clear')}         ${C.gray('→')} ${C.white('Clear the terminal screen')}

${C.comment('# Press ↑ / ↓ to navigate command history')}
${C.comment('# Press Tab to auto-complete commands')}
`.trim();
    },

    whoami() {
      return `${C.green(DATA.about.name)}
${C.gray('Role    :')} ${C.yellow(DATA.about.role)}
${C.gray('School  :')} ${C.white(DATA.about.university)}
${C.gray('Status  :')} ${C.green('● ' + DATA.about.status)}`;
    },

    ls() {
      const sections = ['about', 'education', 'skills', 'projects', 'experience', 'certificates', 'contact', 'resume'];
      return sections.map(s => C.blue(s + '/') + C.gray('  →  portfolio/' + s)).join('\n');
    },

    about() {
      const a = DATA.about;
      let out = `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ ABOUT — ' + a.name.toUpperCase())}                   ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}

${C.blue('const')} ${C.yellow('profile')} ${C.white('=')} {
  ${C.green('name')}       ${C.white(':')} ${C.orange('"' + a.name + '"')},
  ${C.green('role')}       ${C.white(':')} ${C.orange('"' + a.role + '"')},
  ${C.green('university')} ${C.white(':')} ${C.orange('"' + a.university + '"')},
  ${C.green('status')}     ${C.white(':')} ${C.orange('"' + a.status + '"')},
};

${C.comment('/**')}
${C.comment(' * ' + a.desc)}
${C.comment(' */')}

${C.blue('const')} ${C.yellow('focusAreas')} ${C.white('=')} [`.trim();

      a.areas.forEach((ar, i) => {
        out += `\n  ${C.comment('// ' + ar.icon + ' ' + ar.title)}`;
        out += `\n  ${C.orange('"' + ar.desc.replace(/"/g, "'") + '"')}` + (i < a.areas.length - 1 ? ',' : '');
      });
      out += `\n${C.white(']')};`;
      return out;
    },

    education() {
      let out = `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ EDUCATION HISTORY')}                              ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}\n`.trim();

      DATA.education.forEach(e => {
        const badge = e.gold ? C.yellow('[🏆 Achievement]') : e.current ? C.green('[● Current]') : C.gray('[  Completed ]');
        out += `\n\n${badge}`;
        out += `\n  ${C.blue(e.name)}`;
        out += `\n  ${C.gray(e.level + ' · ' + e.board)}`;
        out += `\n  ${C.orange('Score: ' + e.score)}`;
        if (e.extra) out += `  ${C.gray('· ' + e.extra)}`;
      });
      return out;
    },

    skills() {
      let out = `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ TECH SKILLS & STACK')}                            ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}\n`.trim();

      DATA.skills.forEach(s => {
        const bar = C.green('█'.repeat(20)) + C.gray('░'.repeat(0));
        const pct = C.yellow(`[${s.level}%]`);
        out += `\n\n  ${C.blue(s.name.padEnd(14))} ${pct}  ${bar}`;
        out += `\n  ${C.gray('  └─ ' + s.category)}`;
      });
      return out;
    },

    projects() {
      let out = `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ PROJECTS')}                                       ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}\n`.trim();

      DATA.projects.forEach((p, i) => {
        out += `\n\n${C.yellow('['  + (i + 1) + ']')} ${C.blue(p.name)}`;
        out += `\n  ${C.purple(p.lang)}`;
        out += `\n  ${C.gray(p.desc)}`;
        out += `\n\n  ${C.comment('// Features:')}`;
        p.features.slice(0, 4).forEach(f => { out += `\n  ${C.gray('  ▸ ')}${C.white(f)}`; });
        if (p.features.length > 4) out += `\n  ${C.gray('  ▸ ...' + (p.features.length - 4) + ' more')}`;
        out += `\n\n  ${C.comment('// Tech Stack:')} ${C.orange(p.tech.join(', '))}`;
        if (p.github) out += `\n  ${C.green('GitHub →')} ${C.link(p.github, p.github)}`;
        if (p.demo)   out += `\n  ${C.green('Demo   →')} ${C.link(p.demo, p.demo)}`;
      });
      return out;
    },

    experience() {
      let out = `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ EXPERIENCE')}                                     ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}\n`.trim();

      DATA.experience.forEach((e, i) => {
        out += `\n\n${C.yellow('['  + (i + 1) + ']')} ${C.blue(e.title)}`;
        out += `\n  ${C.purple(e.type)}`;
        out += `\n  ${C.gray('Organization:')} ${C.white(e.org)}`;
        out += `\n  ${C.gray('Period      :')} ${C.orange(e.period)}`;
        out += `\n  ${C.gray('Recognition :')} ${C.white(e.support)}`;
        out += `\n\n  ${C.comment('// About:')}`;
        const lines = e.desc.match(/.{1,70}(\s|$)/g) || [e.desc];
        lines.forEach(l => { out += `\n  ${C.gray(l.trim())}`; });
        out += `\n\n  ${C.comment('// Focus Areas:')} ${C.orange(e.skills.join(' · '))}`;
        out += `\n  ${C.green('Certificate →')} ${C.link('View Certificate', e.cert, false)}`;
      });
      return out;
    },

    certificates() {
      let out = `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ CERTIFICATES')}                                   ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}\n`.trim();

      DATA.certificates.forEach((c, i) => {
        out += `\n\n${C.yellow('[' + (i + 1) + ']')} ${C.blue(c.name)}`;
        out += `\n  ${C.gray('Issuer:')} ${C.white(c.issuer)}  ${C.gray('Year:')} ${C.orange(c.year)}`;
        out += `\n  ${C.comment('// Skills:')} ${C.orange(c.skills.join(' · '))}`;
        out += `\n  ${C.green('Verify →')} ${C.link('View Certificate', c.link)}`;
      });
      return out;
    },

    contact() {
      return `
${C.green('╔══════════════════════════════════════════════════╗')}
${C.green('║')}  ${C.yellow('▸ CONTACT')}                                        ${C.green('║')}
${C.green('╚══════════════════════════════════════════════════╝')}

  ${C.gray('Email    →')} ${C.link(DATA.contact.email, 'mailto:' + DATA.contact.email)}
  ${C.gray('GitHub   →')} ${C.link(DATA.contact.github, DATA.contact.github)}
  ${C.gray('LinkedIn →')} ${C.link(DATA.contact.linkedin, DATA.contact.linkedin)}
  ${C.gray('Blog     →')} ${C.link(DATA.contact.blog, DATA.contact.blog)}
__TRIGGER_CONTACT_FORM__`.trim();
    },

    message() {
      return '__START_CONTACT_FORM__';
    },

    resume() {
      window.open(DATA.resume, '_blank');
      return `${C.green('✓')} Opening resume…\n  ${C.link('Click here if it did not open automatically', DATA.resume, false)}`;
    },

    clear() {
      return '__CLEAR__';
    },
  };

  /* ── Contact form flow ─────────────────────────────────── */
  let contactFlow = null;
  let contactData  = {};

  function startContactFlow(output, promptFn) {
    contactFlow = { step: 'name' };
    contactData = {};
    output(`\n${C.green('┌─ Interactive Contact Form ─────────────────────────────┐')}`);
    output(`${C.green('│')}  ${C.comment('# Press Ctrl+C or type "cancel" to abort')}`);
    output(`${C.green('└───────────────────────────────────────────────────────┘')}\n`);
    promptFn(`${C.yellow('Enter your name')} : `);
  }

  function handleContactStep(val, output, promptFn) {
    if (!contactFlow) return false;
    if (val.trim().toLowerCase() === 'cancel') {
      contactFlow = null;
      output(C.gray('Form aborted.'));
      promptFn(null);   // null = use default kvr@portfolio prompt
      return true;
    }
    if (contactFlow.step === 'name') {
      if (!val.trim()) { promptFn(`${C.yellow('Enter your name')} : `); return true; }
      contactData.name = val.trim();
      contactFlow.step = 'email';
      promptFn(`${C.yellow('Enter your email')} : `);
      return true;
    }
    if (contactFlow.step === 'email') {
      if (!val.trim() || !val.includes('@')) {
        output(C.orange('  Please enter a valid email.'));
        promptFn(`${C.yellow('Enter your email')} : `);
        return true;
      }
      contactData.email = val.trim();
      contactFlow.step = 'message';
      promptFn(`${C.yellow('Your message')} : `);
      return true;
    }
    if (contactFlow.step === 'message') {
      if (!val.trim()) { promptFn(`${C.yellow('Your message')} : `); return true; }
      contactData.message = val.trim();
      contactFlow = null;
      output(`\n${C.comment('# Submitting…')}`);
      submitContactForm(contactData, output, promptFn);
      return true;
    }
    return false;
  }

  function submitContactForm(data, output, promptFn) {
    const body = new URLSearchParams({ 'form-name': 'portfolio-contact', name: data.name, email: data.email, message: data.message });
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      .then(() => {
        output(`${C.green('✓')} Message sent successfully!`);
        output(`${C.gray('  Thanks, ')}${C.white(data.name)}${C.gray('. I\'ll get back to you soon.')}`);
        if (promptFn) promptFn(null);
      })
      .catch(() => {
        output(`${C.orange('⚠')} Could not send via form. Please email directly:`);
        output(`  ${C.link(DATA.contact.email, 'mailto:' + DATA.contact.email)}`);
        if (promptFn) promptFn(null);
      });
  }

  /* ── Prompt label HTML ─────────────────────────────────── */
  const PROMPT_LABEL_HTML =
    `<span style="color:#4ec9b0">kvr</span>` +
    `<span style="color:#858585">@</span>` +
    `<span style="color:#569cd6">portfolio</span>` +
    `<span style="color:#858585">:</span>` +
    `<span style="color:#dcdcaa">~</span>` +
    `<span style="color:#858585">$&nbsp;</span>`;

  /* ── Build the terminal DOM ────────────────────────────── */
  function buildTerminal() {
    const wrap = document.createElement('div');
    wrap.id = 'kvr-terminal-wrap';
    wrap.innerHTML = `
<div id="kvr-terminal">
  <!-- Title bar -->
  <div id="kvr-titlebar">
    <div class="kvr-titlebar-left">
      <span class="kvr-titlebar-title">kvr@iiitdm: ~/portfolio — -zsh</span>
    </div>
    <div class="kvr-titlebar-right">
      <div id="kvr-theme-switcher-clone"></div>
      <span class="kvr-dot kvr-red"   title="Close"></span>
      <span class="kvr-dot kvr-yellow" title="Minimize"></span>
      <span class="kvr-dot kvr-green"  title="Maximize"></span>
    </div>
  </div>

  <!-- Scrollable output area — inline prompt lives here -->
  <div id="kvr-output" aria-live="polite" role="log"></div>

  <!-- Quick command bar — stays pinned at bottom -->
  <div id="kvr-quickbar">
    ${['help','about','education','skills','projects','experience','certificates','contact','resume','clear']
        .map(c => `<button class="kvr-chip" data-cmd="${c}">${c}</button>`).join('')}
  </div>
</div>`;
    return wrap;
  }

  /* ── Clone theme-switcher into titlebar ─────────────────── */
  function cloneThemeSwitcher() {
    const orig = document.getElementById('themeSwitcher');
    const slot = document.getElementById('kvr-theme-switcher-clone');
    if (!orig || !slot) return;
    const clone = orig.cloneNode(true);
    clone.id = 'kvr-theme-switcher-terminal';
    // Wire each button to use the SAME applyTheme from script.js
    // by clicking the original buttons — which the main script already listens on.
    clone.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const theme = btn.dataset.theme;
        // Click the matching original button to invoke the main theme system
        const origBtn = orig.querySelector(`.theme-btn[data-theme="${theme}"]`);
        if (origBtn) origBtn.click();
      });
    });
    slot.appendChild(clone);

    // Keep clone in sync whenever the main switcher updates
    const syncClone = () => {
      const active = document.documentElement.getAttribute('data-theme') || 'default';
      clone.querySelectorAll('.theme-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.theme === active);
      });
    };
    new MutationObserver(syncClone).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    syncClone();
  }

  /* ── Terminal controller ───────────────────────────────── */
  function initTerminal() {
    const wrap = buildTerminal();
    document.body.appendChild(wrap);
    cloneThemeSwitcher();

    const outputEl = document.getElementById('kvr-output');
    const chips    = document.querySelectorAll('.kvr-chip');

    let history = [];
    let histIdx  = -1;
    let inputEl  = null;   // the live <input> inside the active prompt row

    const AVAILABLE_CMDS = Object.keys(COMMANDS).concat(['message']);

    /* ── helpers ───────────────────────────────────────────── */
    function escHtml(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    /* print a static HTML line into the output */
    function print(html, cls) {
      // Insert BEFORE the active-prompt row so it appears above the new prompt
      const active = document.getElementById('kvr-active-prompt');
      const div = document.createElement('div');
      div.className = 'kvr-line' + (cls ? ' ' + cls : '');
      div.innerHTML = html;
      if (active) outputEl.insertBefore(div, active);
      else        outputEl.appendChild(div);
      scrollBottom();
    }

    function scrollBottom() {
      outputEl.scrollTop = outputEl.scrollHeight;
    }

    /* ── inline prompt management ──────────────────────────── */

    /*
     * freezePrompt()
     *   - Converts the live active-prompt row into a static echo line.
     *   - Returns the typed value so the caller can use it.
     */
    function freezePrompt(customLabel) {
      const active = document.getElementById('kvr-active-prompt');
      if (!active) return '';

      const val  = inputEl ? inputEl.value : '';
      const label = customLabel || PROMPT_LABEL_HTML;

      // Replace the interactive row with a frozen static line
      const frozen = document.createElement('div');
      frozen.className = 'kvr-line kvr-prompt-echo';
      frozen.innerHTML = label + `<span style="color:#d4d4d4">${escHtml(val)}</span>`;
      outputEl.replaceChild(frozen, active);

      inputEl = null;
      return val;
    }

    /*
     * appendPrompt(label?)
     *   - Creates a new live active-prompt row at the bottom of output.
     *   - Wires keyboard events to the new <input>.
     */
    function appendPrompt(label) {
      // Remove any stale active prompt first (shouldn't happen, but guard)
      const stale = document.getElementById('kvr-active-prompt');
      if (stale) stale.remove();

      const row = document.createElement('div');
      row.id = 'kvr-active-prompt';
      row.className = 'kvr-active-prompt kvr-line';

      const labelSpan = document.createElement('span');
      labelSpan.className = 'kvr-active-label';
      labelSpan.innerHTML = label || PROMPT_LABEL_HTML;

      const inp = document.createElement('input');
      inp.type = 'text';
      inp.autocomplete = 'off';
      inp.spellcheck = false;
      inp.setAttribute('aria-label', 'Terminal input');
      inp.className = 'kvr-active-input';
      // Show placeholder only on the very first prompt
      if (history.length === 0 && !contactFlow) {
        inp.placeholder = "type a command… (try 'help')";
      }

      row.appendChild(labelSpan);
      row.appendChild(inp);
      outputEl.appendChild(row);

      inputEl = inp;
      bindInputEvents(inp);
      scrollBottom();
      inp.focus();
    }

    /* update only the label of the current active prompt (contact flow) */
    function setActiveLabel(html) {
      const lbl = document.querySelector('#kvr-active-prompt .kvr-active-label');
      if (lbl) lbl.innerHTML = html;
    }

    /* ── input event binding (called each time a new input is created) ── */
    function bindInputEvents(inp) {
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          runCmd(inp.value);

        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (histIdx < history.length - 1) { histIdx++; inp.value = history[histIdx]; }
          // move caret to end
          setTimeout(() => inp.setSelectionRange(inp.value.length, inp.value.length), 0);

        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (histIdx > 0) { histIdx--; inp.value = history[histIdx]; }
          else             { histIdx = -1; inp.value = ''; }
          setTimeout(() => inp.setSelectionRange(inp.value.length, inp.value.length), 0);

        } else if (e.key === 'Tab') {
          e.preventDefault();
          tabComplete(inp);

        } else if (e.key === 'c' && e.ctrlKey) {
          e.preventDefault();
          if (contactFlow) {
            const frozen = freezePrompt();
            contactFlow = null;
            print(C.gray('^C'));
            appendPrompt();
          } else {
            freezePrompt();
            print(C.gray('^C'));
            appendPrompt();
          }
        }
      });
    }

    /* ── Tab completion ──────────────────────────────────── */
    function tabComplete(inp) {
      const val = inp.value;
      const matches = AVAILABLE_CMDS.filter(c => c.startsWith(val));
      if (matches.length === 1) {
        inp.value = matches[0];
      } else if (matches.length > 1) {
        // freeze current prompt showing partial input, list completions, re-open
        const partial = inp.value;
        freezePrompt();
        print(matches.map(m => C.blue(m)).join('  '));
        appendPrompt();
        if (inputEl) inputEl.value = partial;
      }
    }

    /* ── run command ─────────────────────────────────────── */
    function runCmd(raw) {
      const cmd = raw.trim().toLowerCase();

      /* contact flow intercept */
      if (contactFlow) {
        freezePrompt(document.querySelector('#kvr-active-prompt .kvr-active-label')?.innerHTML);
        const handled = handleContactStep(
          raw,
          s   => print(s),
          lbl => { appendPrompt(lbl || null); }  // null = default kvr@ prompt
        );
        if (handled) return;
      }

      if (!cmd) {
        // empty enter — freeze and open fresh prompt
        freezePrompt();
        appendPrompt();
        return;
      }

      /* history */
      if (raw.trim() && raw.trim() !== history[0]) history.unshift(raw.trim());
      if (history.length > 50) history.pop();
      histIdx = -1;

      /* freeze the prompt row (shows the typed command inline) */
      freezePrompt();

      /* execute */
      if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd]();
        if (result === '__CLEAR__') {
          outputEl.innerHTML = '';
          appendPrompt();
          return;
        } else if (result.includes('__TRIGGER_CONTACT_FORM__') || result === '__START_CONTACT_FORM__') {
          const text = result.replace('__TRIGGER_CONTACT_FORM__', '').trim();
          if (text) {
            text.split('\n').forEach(line => print(line));
          }
          startContactFlow(
            s   => print(s),
            lbl => { appendPrompt(lbl); }
          );
          return;
        } else {
          result.trim().split('\n').forEach(line => print(line));
        }
      } else {
        print(
          C.orange(`bash: ${escHtml(cmd)}: command not found`) +
          C.gray('  — type ') + C.blue('help') + C.gray(' for a list of commands')
        );
      }

      appendPrompt();
    }

    /* ── chip bar ────────────────────────────────────────── */
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (inputEl) inputEl.value = chip.dataset.cmd;
        runCmd(chip.dataset.cmd);
      });
    });

    /* ── window control buttons ──────────────────────────── */
    document.querySelector('.kvr-dot.kvr-red')?.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelector('#navbar .theme-btn[data-theme="default"]')?.click();
    });
    document.querySelector('.kvr-dot.kvr-yellow')?.addEventListener('click', (e) => {
      e.stopPropagation();
      runCmd('clear');
    });
    document.querySelector('.kvr-dot.kvr-green')?.addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('kvr-terminal')?.classList.toggle('kvr-maximized');
      document.getElementById('kvr-terminal-wrap')?.classList.toggle('kvr-maximized-wrap');
    });

    /* ── click anywhere → focus active input ─────────────── */
    outputEl.addEventListener('click', e => {
      // Don't steal focus if user clicked a link
      if (e.target.tagName === 'A') return;
      if (inputEl) inputEl.focus();
    });
    document.getElementById('kvr-terminal').addEventListener('click', e => {
      if (e.target.tagName === 'A') return;
      if (inputEl) inputEl.focus();
    });

    /* ── Welcome banner ──────────────────────────────────── */
    const banner = [
      C.green('  ██╗  ██╗██╗   ██╗██████╗ '),
      C.green('  ██║ ██╔╝██║   ██║██╔══██╗'),
      C.green('  █████╔╝ ██║   ██║██████╔╝'),
      C.green('  ██╔═██╗ ╚██╗ ██╔╝██╔══██╗'),
      C.green('  ██║  ██╗ ╚████╔╝ ██║  ██║'),
      C.green('  ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝'),
      '',
      C.yellow('  Karri Varshith Reddy — Interactive Portfolio Terminal'),
      C.gray('  ─────────────────────────────────────────────────────'),
      C.white('  Type ') + C.blue('help') + C.white(' to see all available commands.'),
      C.comment('  # Up/Down = history  |  Tab = autocomplete  |  Ctrl+C = abort'),
      '',
    ];
    banner.forEach(l => print(l));

    /* render the first live prompt */
    appendPrompt();
  }

  /* ── Page elements to toggle ───────────────────────────── */
  const PAGE_SELECTORS = [
    '#home', '#about', '#education', '#skills',
    '#projects', '#experience', '#certificates',
    '#contact', '#footer', '#navbar'
  ];

  /* ── Show / hide terminal based on theme ────────────────── */
  function syncVisibility() {
    const isConsole = document.documentElement.getAttribute('data-theme') === 'console';
    let wrap = document.getElementById('kvr-terminal-wrap');

    if (isConsole) {
      // Build terminal on first switch to console
      if (!wrap) { initTerminal(); wrap = document.getElementById('kvr-terminal-wrap'); }
      if (wrap) wrap.style.display = 'flex';

      // Sync the cloned switcher active state
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'default';
      const clone = document.getElementById('kvr-theme-switcher-terminal');
      if (clone) {
        clone.querySelectorAll('.theme-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.theme === activeTheme);
        });
      }

      // Hide native page sections
      PAGE_SELECTORS.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.setProperty('display', 'none', 'important');
      });
      // Hide all modals
      document.querySelectorAll('.proj-modal,.exp-modal,.cert-modal').forEach(m => {
        m.style.setProperty('display', 'none', 'important');
      });
      // Prevent body scroll behind terminal
      document.body.style.overflow = 'hidden';

    } else {
      // Hide terminal, restore page
      if (wrap) wrap.style.display = 'none';

      PAGE_SELECTORS.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.removeProperty('display');
      });
      document.querySelectorAll('.proj-modal,.exp-modal,.cert-modal').forEach(m => {
        m.style.removeProperty('display');
      });
      document.body.style.overflow = '';
    }
  }

  /* ── Watch for theme changes via MutationObserver ───────── */
  function patchAttr() {
    const obs = new MutationObserver(() => syncVisibility());
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  /* ── Boot ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    patchAttr();
    syncVisibility();
  });

  // also run now in case DOM is already ready
  if (document.readyState !== 'loading') {
    patchAttr();
    syncVisibility();
  }
}());
