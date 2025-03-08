function displayResume() {
    // Personal details
    const details = {
      name: "Pratoosh Garg",
      title: "Full Stack Developer & Tech Innovator",
      contact: {
        email: "pratoosh10garg@gmail.com",
        portfolio: "https://portfolio-pratoosh-garg.vercel.app/",
        linkedin: "https://www.linkedin.com/in/pratoosh-garg/",
        github: "https://github.com/Pratoosh-18"
      },
      tagline: "Building scalable solutions with MERN stack & cloud expertise",
      skills: {
        "Frontend": "⚛️ React.js, ⏭️ Next.js, 📱 Responsive Design, 🎨 UI/UX",
        "Backend": "🟢 Node.js, 🐍 Python, 🔄 RESTful APIs, 🔌 WebSockets",
        "Database": "🍃 MongoDB, 🐬 MySQL",
        "DevOps": "🐳 Docker, ☁️ AWS, 🚀 Vercel, 🔄 CI/CD",
        "Tools": "🔧 Git, 📦 npm, 📝 Postman"
      },
      experience: [
        { company: "Horyzen", role: "System Engineer Intern", period: "Jan 2025 - Present", highlight: "Engineered real-time video apps & managed multiple python services on AWS" },
        { company: "CodeFeast", role: "SDE Intern", period: "Jul - Sep 2024", highlight: "Crafted LLM-based frontend integrations with optimized API architecture" },
        { company: "ADM Education", role: "Full Stack Developer", period: "May - Jul 2024", highlight: "Architected a scalable React app with intuitive admin dashboard" }
      ],
      projects: [
        { name: "Samraksh", desc: "Kumbh Mela Crowd Management System", link: "https://github.com/Pratoosh-18/Samraksh" },
        { name: "EstateEdge", desc: "Modern Real Estate Marketplace", link: "https://estate-edge-real-estate-marketplace.vercel.app/" },
        { name: "AI Chatbot", desc: "Intelligent Conversational Assistant", link: "https://enigma-ai-chatbot-by-pratooshgarg.vercel.app/" }
      ]
    };
  
    // Color palette
    const c = {
      reset: "\x1b[0m",
      bright: "\x1b[1m",
      underscore: "\x1b[4m",
      
      fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        teal: "\x1b[38;5;45m",
        orange: "\x1b[38;5;208m",
        lime: "\x1b[38;5;118m",
        purple: "\x1b[38;5;141m",
        pink: "\x1b[38;5;213m"
      },
      
      bg: {
        black: "\x1b[40m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m"
      }
    };
  
    // Utility functions
    const divider = () => console.log(`${c.fg.blue}${"─".repeat(60)}${c.reset}`);
    const header = text => console.log(`\n${c.fg.orange}${c.bright}${text}${c.reset}`);
    
    // Clear console and start display
    console.clear();
    
    // More compact and attractive name display
    console.log("\n");
    console.log(`${c.fg.teal}${c.bright}╭${"─".repeat(58)}╮${c.reset}`);
    console.log(`${c.fg.teal}${c.bright}│${" ".repeat(22)}${c.fg.pink}${c.bright}PRATOOSH GARG${c.fg.teal}${" ".repeat(22)}│${c.reset}`);
    console.log(`${c.fg.teal}${c.bright}╰${"─".repeat(58)}╯${c.reset}`);
    
    // Title and tagline
    console.log(`\n${c.fg.lime}${c.bright}⚡ ${details.title} ⚡${c.reset}`);
    console.log(`${c.fg.purple}✨ ${details.tagline}${c.reset}`);
    
    // Contact info (compact format)
    header("📱 CONTACT ME");
    console.log(`${c.fg.lime}MAIL : ${c.fg.cyan}📧 ${details.contact.email} | ${c.fg.lime} PORTFOLIO : ${c.fg.cyan}🌐 ${details.contact.portfolio}`);
    console.log(`${c.fg.lime}LINKEDIN : ${c.fg.cyan}💼 ${details.contact.linkedin} | ${c.fg.lime} GITHUB : ${c.fg.cyan}⭐ ${details.contact.github}${c.reset}`);
    
    divider();
    
    // Skills section (expanded with icons as requested)
    header("🚀 TECHNICAL SKILLS");
    
    Object.entries(details.skills).forEach(([category, skills]) => {
      console.log(`${c.fg.yellow}${c.bright}${category}:${c.reset} ${skills}`);
    });
    
    divider();
    
    // Experience section (more compact)
    header("💼 EXPERIENCE");
    
    details.experience.forEach((exp) => {
      console.log(`${c.fg.lime}${c.bright}${exp.company}${c.reset} | ${c.fg.magenta}${exp.role}${c.reset} | ${exp.period}`);
      console.log(`  ${c.fg.white}→ ${exp.highlight}${c.reset}`);
    });
    
    divider();
    
    // Projects section (compact)
    header("🛠️ PROJECTS");
    
    details.projects.forEach((proj) => {
      console.log(`${c.fg.lime}${c.bright}${proj.name}${c.reset}: ${proj.desc}`);
      console.log(`  ${c.fg.blue}${c.underscore}${proj.link}${c.reset}`);
    });
    
    divider();
    
    // Closing message (single line, more compact)
    console.log(`\n${c.fg.teal}${c.bright}🔥 Let's connect and build something amazing together!${c.reset}\n`);
  }
  
  displayResume();