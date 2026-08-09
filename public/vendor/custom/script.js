$(function () {
    'use strict';

    // Preloader
    $(window).on('load', function () {
        $('#preloader').addClass('hidden');
        setTimeout(function () {
            $('#preloader').remove();
        }, 600);
    });

    // Navbar shrink on scroll
    var $nav = $('#mainNav');
    var $backToTop = $('#backToTop');

    function onScroll() {
        var y = $(window).scrollTop();
        $nav.toggleClass('scrolled', y > 60);
        $backToTop.toggleClass('show', y > 500);
    }

    $(window).on('scroll', onScroll).trigger('scroll');

    // Smooth scroll (native CSS scroll-behavior also handles anchor jumps)
    $(document).on('click', 'a[href^="#"]', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length && this.getAttribute('href') !== '#') {
            e.preventDefault();
            $('html, body').animate({ scrollTop: target.offset().top - 78 }, 600);
        }
    });

    // Active nav link on scroll
    var sections = $('section[id], div[id].section-anchor').map(function () {
        return this.id;
    });

    function highlightNav() {
        var pos = $(window).scrollTop() + 120;
        var current = '';
        sections.each(function () {
            if (pos >= $('#' + this).offset().top) {
                current = this;
            }
        });
        if (current) {
            $('.main-nav .nav-link').removeClass('active')
                .filter('[href="#' + current + '"]').addClass('active');
        }
    }

    $(window).on('scroll', highlightNav);

    // Back to top
    $backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Typed roles effect
    var roles = [
        'Full-Stack Software Engineer',
        'Laravel & PHP Specialist',
        'RESTful API Architect',
        'JavaScript Enthusiast',
        'Open to New Opportunities'
    ];
    var roleIndex = 0, charIndex = 0, deleting = false;
    var $typed = $('.typed');

    function type() {
        var word = roles[roleIndex];
        if (deleting) {
            charIndex--;
            $typed.text(word.substring(0, charIndex));
        } else {
            charIndex++;
            $typed.text(word.substring(0, charIndex));
        }

        var delay = deleting ? 40 : 90;
        if (!deleting && charIndex === word.length) {
            delay = 1800;
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 350;
        }
        setTimeout(type, delay);
    }
    if ($typed.length) { type(); }

    // Reveal on scroll
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    $('.reveal').each(function () {
        revealObserver.observe(this);
    });

    // Skill bars animate when visible
    var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var $bar = $(entry.target);
                $bar.css('width', $bar.data('width') + '%');
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    $('.skill-bar-fill').each(function () {
        barObserver.observe(this);
    });

    // Contact form (demo handler)
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var $btn = $(this).find('button[type="submit"]');
        var $status = $('.form-status');

        $btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-2"></span>Sending...');

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize() + '&_token=' + $('meta[name="csrf-token"]').attr('content'),
            success: function (res) {
                $btn.prop('disabled', false).html('Send Message <i class="bi bi-send ms-1"></i>');
                $('#contactForm')[0].reset();
                $status.removeClass('alert-danger').addClass('alert alert-success').text(res.message || 'Message sent successfully!').fadeIn();
                setTimeout(function () { $status.fadeOut(); }, 5000);
            },
            error: function (xhr) {
                $btn.prop('disabled', false).html('Send Message <i class="bi bi-send ms-1"></i>');
                $status.removeClass('alert-success').addClass('alert alert-danger')
                    .text(xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'Something went wrong. Please try again.').fadeIn();
            }
        });
    });
});
