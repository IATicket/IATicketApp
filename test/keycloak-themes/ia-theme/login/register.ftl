<!DOCTYPE html>
<html lang="${(locale.current.language)! 'en'}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${kcSanitize(msg("registerTitle",(realm.displayNameHtml!'')))?no_esc}</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css" />
</head>
<body>
    <div class="loginContainer">
        <h1 class="loginHeading">${kcSanitize(msg("registerTitle",(realm.displayNameHtml!'')))?no_esc}</h1>

        <#if message?has_content>
            <div class="${properties.kcAlertClass!} ${properties.kcAlertErrorClass!} error">
                <div class="${properties.kcAlertTitleClass!}">${message.summary}</div>
            </div>
        </#if>

        <form id="kc-register-form" action="${url.registrationAction}" method="post">
            <#if !(realm.password && social.providers??)>
                <div class="kcFormGroupClass">
                    <label for="username">${msg("username")}</label>
                    <input id="username" class="kcInputClass" name="username" value="${(register.formData.username!'')}" type="text" autofocus autocomplete="off" />
                </div>
            </#if>

            <#if realm.password>
                <div class="kcFormGroupClass">
                    <label for="password">${msg("contraseña")}</label>
                    <input id="password" class="kcInputClass" name="password" type="password" autocomplete="new-password" />
                </div>
            </#if>

            <#if realm.password>
                <div class="kcFormGroupClass">
                    <label for="password-confirm">${msg("confirmar contraseña")}</label>
                    <input id="password-confirm" class="kcInputClass" name="password-confirm" type="password" autocomplete="new-password" />
                </div>
            </#if>

            <div class="kcFormGroupClass">
                <label for="email">${msg("email")}</label>
                <input id="email" class="kcInputClass" name="email" value="${(register.formData.email!'')}" type="text" autocomplete="email" />
            </div>

            <div id="kc-form-buttons" class="kcFormButtonsClass">
                <input class="kcButtonPrimaryClass" name="register" id="kc-register" type="submit" value="${msg("Registrarse")}" />
            </div>
        </form>

        <div id="kc-registration" class="kcFormGroupClass">
            <div class="kcFormSocialAccountSectionClass">
                <hr/>
                <div>${msg("Tienes una cuenta?")}</div>
                <hr/>
            </div>
            <div id="kc-registration-link" class="kcFormGroupClass">
                <span><a href="${url.loginUrl}">${msg("Login")}</a></span>
            </div>
        </div>
    </div>
</body>
</html>
