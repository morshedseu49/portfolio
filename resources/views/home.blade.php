@extends('layouts.app')

@section('title', 'Md. Golam Morshed | Full-Stack Software Engineer')

@section('content')

<!-- ===================== HERO ===================== -->
<section id="home" class="hero section-anchor">
    <div class="container">
        <div class="row align-items-center g-5">
            <div class="col-lg-7">
                <div class="hero-eyebrow reveal"><span class="dot"></span> Available for new opportunities</div>
                <h1 class="hero-title reveal">Hello, I'm<br><span class="gradient-text">Md. Golam Morshed</span></h1>
                <div class="hero-role reveal reveal-delay-1">
                    <span class="typed"></span><span class="cursor">&nbsp;</span>
                </div>
                <p class="hero-desc reveal reveal-delay-2">
                    Full-Stack Software Engineer with 3+ years of experience specializing in PHP, Laravel and
                    JavaScript — architecting scalable applications for enterprise and government sectors with a focus
                    on REST APIs, database performance and responsive UI design.
                </p>
                <div class="hero-actions reveal reveal-delay-2">
                    <a href="{{ asset('Golam_Morshed_Resume.pdf') }}" class="btn btn-gradient" target="_blank" rel="noopener">
                        <i class="bi bi-file-earmark-person"></i> View Resume
                    </a>
                    <a href="#contact" class="btn btn-outline-gradient"><i class="bi bi-envelope"></i> Contact Me</a>
                </div>
                <div class="hero-social reveal reveal-delay-3">
                    <a href="https://github.com/morshedseu49" target="_blank" rel="noopener" aria-label="GitHub"><i class="bi bi-github"></i></a>
                    <a href="https://linkedin.com/in/morshedseu49" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                    <a href="mailto:morshedseu.49@gmail.com" aria-label="Email"><i class="bi bi-envelope-fill"></i></a>
                    <a href="tel:+8801623623039" aria-label="Phone"><i class="bi bi-telephone-fill"></i></a>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="hero-image-wrap reveal reveal-delay-2">
                    <div class="hero-image-frame">
                        <img src="{{ asset('morshed.jpeg') }}" alt="Md. Golam Morshed" class="img-fluid">
                    </div>
                    <div class="float-chip chip-1">
                        <i class="bi bi-award"></i>
                        <div>
                            <div class="chip-label">Experience</div>
                            <div class="chip-value">3+ Years</div>
                        </div>
                    </div>
                    <div class="float-chip chip-2">
                        <i class="bi bi-stack"></i>
                        <div>
                            <div class="chip-label">Specialist</div>
                            <div class="chip-value">Laravel / PHP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="#about" class="scroll-down" aria-label="Scroll down"><i class="bi bi-chevron-double-down"></i></a>
</section>

<!-- ===================== ABOUT ===================== -->
<section id="about" class="section">
    <div class="container">
        <div class="row align-items-center g-5">
            <div class="col-lg-5">
                <div class="about-photo-wrap reveal">
                    <img src="{{ asset('morshed.jpeg') }}" alt="Md. Golam Morshed - portrait">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="section-head text-start reveal" style="margin:0 0 24px;">
                    <span class="section-tag">About Me</span>
                    <h2 class="section-title">Professional <span class="gradient-text">Summary</span></h2>
                </div>
                <p class="reveal" style="color:var(--text-muted); font-size:1.02rem;">
                    Full-Stack Software Engineer with <strong style="color:#fff;">3+ years of professional experience</strong>
                    specializing in <strong style="color:#fff;">PHP, Laravel and JavaScript</strong>. Expertise in architecting
                    scalable applications for enterprise and government sectors, focusing on REST APIs, database performance and
                    responsive UI design. Experienced in collaborative project management and Git-based workflows to ensure
                    high-quality, timely feature delivery and system performance enhancements.
                </p>
                <div class="about-badges mt-4 reveal reveal-delay-1">
                    <div class="about-badge">
                        <i class="bi bi-person-badge"></i>
                        <div>
                            <div class="b-label">Name</div>
                            <div class="b-value">Md. Golam Morshed</div>
                        </div>
                    </div>
                    <div class="about-badge">
                        <i class="bi bi-geo-alt"></i>
                        <div>
                            <div class="b-label">Location</div>
                            <div class="b-value">Dhaka, Bangladesh</div>
                        </div>
                    </div>
                    <div class="about-badge">
                        <i class="bi bi-envelope"></i>
                        <div>
                            <div class="b-label">Email</div>
                            <div class="b-value" style="font-size:.85rem;">morshedseu.49@gmail.com</div>
                        </div>
                    </div>
                    <div class="about-badge">
                        <i class="bi bi-github"></i>
                        <div>
                            <div class="b-label">GitHub</div>
                            <div class="b-value">morshedseu49</div>
                        </div>
                    </div>
                </div>
                <a href="{{ asset('Golam_Morshed_Resume.pdf') }}" class="btn btn-gradient mt-4 reveal reveal-delay-2" target="_blank" rel="noopener">
                    <i class="bi bi-download"></i> Download Resume
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ===================== EXPERIENCE ===================== -->
<section id="experience" class="section section-alt">
    <div class="container">
        <div class="section-head reveal">
            <span class="section-tag">Career Path</span>
            <h2 class="section-title">Work <span class="gradient-text">Experience</span></h2>
            <p class="section-sub">A journey of building scalable, enterprise-grade software solutions.</p>
        </div>

        <div class="timeline">
            <div class="timeline-item reveal">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-role">Assistant Software Engineer</div>
                    <div class="timeline-company">Swapnoloke · Mirpur-DOHS, Dhaka</div>
                    <span class="timeline-date">Jan 2026 — Present</span>
                    <ul>
                        <li>Own the full feature lifecycle from planning to production, ensuring quality and timely delivery.</li>
                        <li>Manage Git workflows and pull request reviews to ensure codebase integrity.</li>
                        <li>Implemented a secure multi-auth system using Laravel Guards to handle distinct access levels for administrators and field members.</li>
                        <li>Mentor and support junior developers with code reviews, Laravel best practices, design patterns and clean code principles.</li>
                    </ul>
                </div>
            </div>

            <div class="timeline-item reveal">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-role">Junior Software Engineer</div>
                    <div class="timeline-company">Swapnoloke · Mirpur-DOHS, Dhaka</div>
                    <span class="timeline-date">Mar 2024 — Dec 2025</span>
                    <ul>
                        <li>Designed and implemented RESTful APIs for the AVMIS mobile application to ensure seamless data synchronization.</li>
                        <li>Improved storage and system speed through automated image compression for large uploads.</li>
                        <li>Optimized database performance using efficient Eloquent ORM queries and Laravel Collections.</li>
                        <li>Managed large-scale Excel imports and asynchronous SMS delivery via Laravel Queues and Workers.</li>
                    </ul>
                </div>
            </div>

            <div class="timeline-item reveal">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-role">Apprentice Software Engineer</div>
                    <div class="timeline-company">Swapnoloke · Mirpur-DOHS, Dhaka</div>
                    <span class="timeline-date">Jun 2023 — Mar 2024</span>
                    <ul>
                        <li>Contributed to building scalable web applications using PHP, Laravel, MySQL and JavaScript.</li>
                        <li>Collaborated with senior engineers to deliver 3+ enterprise-grade projects on schedule.</li>
                        <li>Developed responsive, user-centric web interfaces using Bootstrap, CSS and jQuery.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===================== SKILLS ===================== -->
<section id="skills" class="section">
    <div class="container">
        <div class="section-head reveal">
            <span class="section-tag">What I Do</span>
            <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
            <p class="section-sub">A versatile toolkit covering the full software development stack.</p>
        </div>

        <div class="row g-4">
            <div class="col-md-6 col-xl-3 reveal">
                <div class="skill-cat">
                    <div class="skill-cat-head">
                        <i class="bi bi-code-slash"></i>
                        <h3>Languages</h3>
                    </div>
                    <div class="skill-badges">
                        @foreach(['PHP', 'JavaScript (ES6+)', 'SQL', 'Node.js', 'C/C++'] as $s)
                            <span class="skill-badge">{{ $s }}</span>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 reveal reveal-delay-1">
                <div class="skill-cat">
                    <div class="skill-cat-head">
                        <i class="bi bi-boxes"></i>
                        <h3>Frameworks &amp; Libraries</h3>
                    </div>
                    <div class="skill-badges">
                        @foreach(['Laravel', 'Express.js', 'jQuery', 'Bootstrap'] as $s)
                            <span class="skill-badge">{{ $s }}</span>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 reveal reveal-delay-2">
                <div class="skill-cat">
                    <div class="skill-cat-head">
                        <i class="bi bi-database"></i>
                        <h3>Databases &amp; ORM</h3>
                    </div>
                    <div class="skill-badges">
                        @foreach(['MySQL', 'Eloquent ORM'] as $s)
                            <span class="skill-badge">{{ $s }}</span>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 reveal reveal-delay-3">
                <div class="skill-cat">
                    <div class="skill-cat-head">
                        <i class="bi bi-tools"></i>
                        <h3>Tools &amp; Platforms</h3>
                    </div>
                    <div class="skill-badges">
                        @foreach(['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'HeidiSQL', 'Trello', 'Slack'] as $s)
                            <span class="skill-badge">{{ $s }}</span>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mt-2">
            <div class="col-lg-10">
                <div class="skill-bar-group reveal">
                    <div class="row g-4">
                        @php
                            $bars = [
                                ['PHP', 95],
                                ['Laravel', 92],
                                ['JavaScript (ES6+)', 88],
                                ['MySQL & SQL', 90],
                                ['Node.js / Express', 80],
                                ['Bootstrap & jQuery', 93],
                            ];
                        @endphp
                        @foreach($bars as $bar)
                            <div class="col-md-6">
                                <div class="skill-bar-item">
                                    <div class="skill-bar-label">
                                        <span>{{ $bar[0] }}</span>
                                        <span class="gradient-text">{{ $bar[1] }}%</span>
                                    </div>
                                    <div class="skill-bar-track">
                                        <div class="skill-bar-fill" data-width="{{ $bar[1] }}"></div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mt-3">
            <div class="col-lg-10">
                <div class="glass-card reveal">
                    <div class="card-top-line"></div>
                    <h4 style="color:#fff; font-weight:700; font-size:1.05rem;" class="mb-2"><i class="bi bi-stars me-2 gradient-text"></i>Specializations</h4>
                    <div class="skill-badges">
                        @foreach(['RESTful API Development', 'Responsive UI Design', 'Performance Optimization', 'Project Management'] as $s)
                            <span class="skill-badge">{{ $s }}</span>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===================== PROJECTS ===================== -->
<section id="projects" class="section section-alt">
    <div class="container">
        <div class="section-head reveal">
            <span class="section-tag">My Work</span>
            <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
            <p class="section-sub">Enterprise and government-scale solutions built for real users.</p>
        </div>

        <div class="row g-4">
            @php
                $projects = [
                    [
                        'icon' => 'bi-shield-lock',
                        'title' => 'Ansar & VDP Management and Information System (AVMIS)',
                        'sub' => 'Government Platform',
                        'points' => [
                            'Developed a centralized MIS with RESTful APIs for seamless mobile data synchronization.',
                            'Engineered an automated onboarding system with NID verification and multi-tier admin approval workflows.',
                            'Implemented dynamic reporting and profile management to automate verification and assignment tracking in large-scale databases.',
                        ],
                        'link' => 'https://avmis.ansarvdp.gov.bd',
                        'link_text' => 'avmis.ansarvdp.gov.bd',
                    ],
                    [
                        'icon' => 'bi-people',
                        'title' => 'Short-Term Deployment Management System (STDMS)',
                        'sub' => 'Paramount Force Platform',
                        'points' => [
                            'Engineered an automated deployment and payroll generation system for paramilitary forces, integrating real-time MFS account validation.',
                            'Implemented secure MFS-based disbursement engines and dynamic reporting modules for fund distribution with comprehensive audit trails.',
                        ],
                        'link' => 'https://stdms.ansarvdp.gov.bd',
                        'link_text' => 'stdms.ansarvdp.gov.bd',
                    ],
                    [
                        'icon' => 'bi-airplane-engines',
                        'title' => 'HSIA Web Portal',
                        'sub' => 'High-Traffic Airport Portal',
                        'points' => [
                            'Built a high-traffic airport portal integrating live flight schedules and passenger service modules to enhance user experience.',
                        ],
                        'link' => 'https://hsia.gov.bd',
                        'link_text' => 'hsia.gov.bd',
                    ],
                    [
                        'icon' => 'bi-chat-dots',
                        'title' => 'CRM System for HSIA',
                        'sub' => 'Communication CRM',
                        'points' => [
                            'Developed a communication-focused CRM allowing multi-user messaging and automated inquiry routing for airport administration.',
                        ],
                        'link' => null,
                        'link_text' => 'Confidential',
                    ],
                    [
                        'icon' => 'bi-mortarboard',
                        'title' => 'DSCSC Portal',
                        'sub' => 'Military Education Platform',
                        'points' => [
                            'Designed a secure, multi-user membership system with role-based access control (RBAC) and profile management for military personnel.',
                        ],
                        'link' => 'https://dscsc.mil.bd',
                        'link_text' => 'dscsc.mil.bd',
                    ],
                    [
                        'icon' => 'bi-file-earmark-check',
                        'title' => 'Online Exam Management System',
                        'sub' => 'City Bank',
                        'points' => [
                            'Developed a software solution using a custom REST API to automate the management and secure delivery of exam results for City Bank.',
                        ],
                        'link' => null,
                        'link_text' => 'Confidential',
                    ],
                    [
                        'icon' => 'bi-laptop',
                        'title' => 'MAC Finder Application',
                        'sub' => 'Node.js Utility',
                        'points' => [
                            'Built a Node.js and Express-based utility to identify client MAC addresses, focusing on low-latency network communication.',
                        ],
                        'link' => null,
                        'link_text' => 'Personal Project',
                    ],
                ];
            @endphp
            @foreach($projects as $p)
                <div class="col-md-6 col-xl-4 reveal {{ $loop->iteration % 2 === 0 ? 'reveal-delay-1' : '' }}">
                    <div class="project-card">
                        <div class="project-head">
                            <div class="project-icon"><i class="bi {{ $p['icon'] }}"></i></div>
                            <div>
                                <div class="project-title">{{ $p['title'] }}</div>
                                <div class="project-sub">{{ $p['sub'] }}</div>
                            </div>
                        </div>
                        <div class="project-body">
                            <ul>
                                @foreach($p['points'] as $pt)
                                    <li>{{ $pt }}</li>
                                @endforeach
                            </ul>
                            @if($p['link'])
                                <a href="{{ $p['link'] }}" target="_blank" rel="noopener" class="project-link mt-3">
                                    {{ $p['link_text'] }} <i class="bi bi-box-arrow-up-right"></i>
                                </a>
                            @else
                                <span class="project-link mt-3" style="cursor:default; -webkit-text-fill-color:var(--text-muted);">
                                    {{ $p['link_text'] }} <i class="bi bi-lock"></i>
                                </span>
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>

<!-- ===================== EDUCATION & CERTS & PUBLICATION ===================== -->
<section id="education" class="section">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-7">
                <div class="section-head text-start reveal" style="margin:0 0 30px;">
                    <span class="section-tag">Academic</span>
                    <h2 class="section-title">Education</h2>
                </div>
                <div class="edu-card reveal">
                    <div class="edu-icon"><i class="bi bi-mortarboard"></i></div>
                    <h4>Bachelor of Science in Computer Science &amp; Engineering</h4>
                    <div class="org">Southeast University · Dhaka, Bangladesh</div>
                    <div class="period">Jan 2018 — Dec 2022</div>
                </div>

                <div class="section-head text-start reveal mt-5" style="margin:0 0 30px;">
                    <span class="section-tag">Credentials</span>
                    <h2 class="section-title">Certifications</h2>
                </div>
                <div class="cert-item reveal">
                    <i class="bi bi-patch-check"></i>
                    <div>
                        <h5>PHP with Laravel Framework</h5>
                        <p>Skills for Employment Investment Program (SEIP), Bangladesh · 2022</p>
                    </div>
                </div>
                <div class="cert-item reveal">
                    <i class="bi bi-chat-square-text"></i>
                    <div>
                        <h5>Professional English Communication Skill</h5>
                        <p>WSDA, New Zealand · 2022</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="section-head text-start reveal" style="margin:0 0 30px;">
                    <span class="section-tag">Research</span>
                    <h2 class="section-title">Publication</h2>
                </div>
                <div class="pub-card reveal">
                    <div class="pub-badge"><i class="bi bi-journal-text me-1"></i> International Journal · Feb 2023</div>
                    <h4>Forecasting Student Clothes Purchases Intention in Bangladesh: A Machine Learning Approach</h4>
                    <div class="pub-meta">
                        Md. Golam Morshed, et al.<br>
                        International Journal of Recent Technology and Engineering (IJRTE)
                    </div>
                    <a href="https://www.ijrte.org/portfolio-item/F74950311623" target="_blank" rel="noopener" class="project-link">
                        Read Publication <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>

                <div class="glass-card mt-4 reveal">
                    <div class="card-top-line"></div>
                    <h4 style="color:#fff; font-weight:700;" class="mb-2"><i class="bi bi-lightning-charge me-2 gradient-text"></i>What I Deliver</h4>
                    <ul class="mb-0" style="padding-left:18px; color:var(--text-muted); font-size:.93rem;">
                        <li class="mb-2">Secure, scalable RESTful APIs</li>
                        <li class="mb-2">Optimized database performance</li>
                        <li class="mb-2">Responsive, user-centric UI</li>
                        <li class="mb-2">Timely, production-ready delivery</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===================== CONTACT ===================== -->
<section id="contact" class="section section-alt">
    <div class="container">
        <div class="section-head reveal">
            <span class="section-tag">Get In Touch</span>
            <h2 class="section-title">Let's Work <span class="gradient-text">Together</span></h2>
            <p class="section-sub">Have a project in mind or a role to fill? I'd love to hear from you.</p>
        </div>

        <div class="row g-4 mb-4">
            <div class="col-md-6 col-xl-3 reveal">
                <a href="mailto:morshedseu.49@gmail.com" class="contact-card">
                    <i class="bi bi-envelope"></i>
                    <div>
                        <h5>Email</h5>
                        <p>morshedseu.49@gmail.com</p>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-xl-3 reveal reveal-delay-1">
                <a href="tel:+8801623623039" class="contact-card">
                    <i class="bi bi-telephone"></i>
                    <div>
                        <h5>Phone</h5>
                        <p>+88 01623623039</p>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-xl-3 reveal reveal-delay-2">
                <a href="https://linkedin.com/in/morshedseu49" target="_blank" rel="noopener" class="contact-card">
                    <i class="bi bi-linkedin"></i>
                    <div>
                        <h5>LinkedIn</h5>
                        <p>in/morshedseu49</p>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-xl-3 reveal reveal-delay-3">
                <a href="https://github.com/morshedseu49" target="_blank" rel="noopener" class="contact-card">
                    <i class="bi bi-github"></i>
                    <div>
                        <h5>GitHub</h5>
                        <p>morshedseu49</p>
                    </div>
                </a>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="glass-card reveal">
                    <div class="card-top-line"></div>
                    <h4 style="color:#fff; font-weight:700;" class="mb-4"><i class="bi bi-send me-2 gradient-text"></i>Send a Message</h4>
                    <form id="contactForm" class="contact-form" action="{{ url('/contact') }}" method="POST">
                        @csrf
                        <div class="row g-3">
                            <div class="col-md-6">
                                <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                            </div>
                            <div class="col-md-6">
                                <input type="email" name="email" class="form-control" placeholder="Your Email" required>
                            </div>
                            <div class="col-12">
                                <input type="text" name="subject" class="form-control" placeholder="Subject">
                            </div>
                            <div class="col-12">
                                <textarea name="message" class="form-control" placeholder="Your Message..." required></textarea>
                            </div>
                            <div class="col-12">
                                <div class="form-status mb-3" role="alert"></div>
                                <button type="submit" class="btn btn-gradient w-100">
                                    Send Message <i class="bi bi-send ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
