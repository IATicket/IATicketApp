<!DOCTYPE html>
<html lang="${(locale.current.language)! 'en'}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${kcSanitize(msg("loginTitleHtml",(realm.displayNameHtml!'')))?no_esc}</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css" />
</head>
<body>
    <div class="loginContainer">
        <h1 class="loginHeading">${kcSanitize(msg("loginTitleHtml",(realm.displayNameHtml!'')))?no_esc}</h1>

        <#if message?has_content>
            <div class="${properties.kcAlertClass!} ${properties.kcAlertErrorClass!} error">
                <div class="${properties.kcAlertTitleClass!}">${message.summary}</div>
            </div>
        </#if>

        <div class="loginForm">
            <form id="kc-form-login" onsubmit="return true;" action="${url.loginAction}" method="post">
                <#if realm.password>
                    <div class="kcFormGroupClass">
                        <label for="username">${msg("Usuario")}</label>
                        <input id="username" class="kcInputClass" name="username" value="${(login.username!'')}" type="text" autofocus autocomplete="off" />
                    </div>

                    <div class="kcFormGroupClass">
                        <label for="password">${msg("Contraseña")}</label>
                        <input id="password" class="kcInputClass" name="password" type="password" autocomplete="off" />
                    </div>
                </#if>

                <#if realm.rememberMe && !usernameHidden??>
                    <div class="checkbox">
                        <label>
                            <#if login.rememberMe??>
                                <input id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("Recordarme")}
                            <#else>
                                <input id="rememberMe" name="rememberMe" type="checkbox"> ${msg("Recordarme")}
                            </#if>
                        </label>
                    </div>
                </#if>

                <div id="kc-form-options" class="kcFormOptionsClass">
                    <#if realm.resetPasswordAllowed>
                        <div class="kcFormOptionsWrapperClass">
                            <span><a href="${url.loginResetCredentialsUrl}">${msg("Olvidaste la contraseña?")}</a></span>
                        </div>
                    </#if>
                </div>

                <div id="kc-form-buttons" class="kcFormButtonsClass">
                    <input class="kcButtonPrimaryClass" name="login" id="kc-login" type="submit" value="${msg("Ingresar")}" />
                </div>
            </form>
        </div>

        <#if realm.registrationAllowed && !usernameHidden??>
            <div id="kc-registration" class="kcFormGroupClass">
                <div class="kcFormSocialAccountSectionClass">
                    <hr/>
                    <div>${msg("No tienes cuenta?")}</div>
                    <hr/>
                </div>
                <div id="kc-registration-link" class="kcFormGroupClass">
                    <span><a href="${url.registrationUrl}">${msg("Registro")}</a></span>
                </div>
            </div>
        </#if>
    </div>
</body>
</html>
