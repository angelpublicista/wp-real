console.log("Carga login")



jQuery(function ($) {
    $('.login').css('background-image', `url(${vars_inline.varHome}/wp-content/themes/master-template-woo-child/assets/img/bg-login.png)`);
    $('#loginform, #lostpasswordform').prepend(`<img src='${vars_inline.varHome}/wp-content/themes/master-template-woo-child/assets/img/logo-royal-color.png' style='display: block; margin: auto'>`);
    $('#loginform').addClass('shadow')

    $('#login h1').html('<span class="rgc-login-title">INICIAR SESIÓN</span>')
    $('.login-action-lostpassword #login h1').html('<span class="rgc-login-title">OLVIDÉ MI CLAVE</span>')
    $('.login #nav a').last().text('Olvidé mi clave')

    $mensaje_lost = $('.login-action-lostpassword .message').text()

    $('#lostpasswordform img').after(`<p class='message-lost'>${$mensaje_lost}</p>`)

    console.log($mensaje_lost)

    $enlaces = $('.login #nav a')

    $('.login #nav').html($enlaces)
});