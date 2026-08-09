<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Md. Golam Morshed | Full-Stack Software Engineer')</title>
    <meta name="description" content="Portfolio of Md. Golam Morshed - Full-Stack Software Engineer specializing in PHP, Laravel, and JavaScript.">
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap-icons/bootstrap-icons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/custom/style.css') }}">
    @stack('styles')
</head>
<body data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="80">

    <!-- Preloader -->
    <div id="preloader">
        <div class="preloader-inner">
            <span class="preloader-logo">GM</span>
            <div class="preloader-bar"><span></span></div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top main-nav" id="mainNav">
        <div class="container">
            <a class="navbar-brand brand" href="#home">
                <span class="brand-badge">GM</span>
                <span class="brand-text">Golam<span class="brand-dot">Morshed</span></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
                aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto align-items-lg-center">
                    <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item ms-lg-2">
                        <a class="btn btn-gradient btn-sm nav-cta" href="{{ asset('Golam_Morshed_Resume.pdf') }}" target="_blank" rel="noopener">
                            <i class="bi bi-download"></i> Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    @yield('content')

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-top">
                <a class="brand" href="#home">
                    <span class="brand-badge">GM</span>
                    <span class="brand-text">Golam<span class="brand-dot">Morshed</span></span>
                </a>
                <ul class="footer-social">
                    <li><a href="https://github.com/morshedseu49" target="_blank" rel="noopener" aria-label="GitHub"><i class="bi bi-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/morshedseu49" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></li>
                    <li><a href="mailto:morshedseu.49@gmail.com" aria-label="Email"><i class="bi bi-envelope-fill"></i></a></li>
                    <li><a href="tel:+8801623623039" aria-label="Phone"><i class="bi bi-telephone-fill"></i></a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>&copy; {{ date('Y') }} Md. Golam Morshed. Crafted with <i class="bi bi-heart-fill"></i> using Laravel, Bootstrap &amp; jQuery.</p>
            </div>
        </div>
    </footer>

    <!-- Back to top -->
    <button id="backToTop" class="back-to-top" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>

    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('vendor/custom/script.js') }}"></script>
    @stack('scripts')
</body>
</html>
