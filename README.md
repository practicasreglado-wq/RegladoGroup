# GrupoReglado

Frontend principal del ecosistema Reglado. Centraliza autenticacion, registro, configuracion de cuenta y enlaces al resto de proyectos.

## Requisitos

- Node.js 18+
- `ApiLoging` funcionando

## Instalacion

1. Instala dependencias:

```bash
npm install
```

2. Crea `\.env` a partir de `\.env.example`.

3. Arranca Vite:

```bash
npm run dev
```

4. Build de produccion:

```bash
npm run build
```

## Variables de entorno

- `VITE_AUTH_API_URL`: URL base de `ApiLoging`
- `VITE_REGLADO_REALSTATE_URL`: enlace al proyecto Realstate
- `VITE_REGLADO_ENERGY_URL`: enlace al proyecto Energy
- `VITE_REGLADO_MAPAS_URL`: enlace al proyecto Mapas
- `VITE_REGLADO_ENPROCESO_URL`: enlace al proyecto EnProceso

## Rutas principales

- `/`
- `/login`
- `/registro`
- `/recuperar-contrasena`
- `/restablecer-contrasena`
- `/configuracion`
- `/verificacion-exitosa`

## Funcionalidad

Autenticacion:

- login con `ApiLoging`
- modal de login y pagina dedicada
- persistencia de token y carga de sesion
- logout

Registro:

- formulario con `username`, nombre, apellido, email, telefono y doble contrasena
- al registrar correctamente, el formulario se sustituye por una caja informativa indicando que se ha enviado el correo de verificacion
- opcion para volver al formulario si el correo se escribio mal

Verificacion de email:

- recepcion del token tras confirmar desde el correo
- inicio de sesion automatico cuando la API devuelve JWT
- pagina intermedia de confirmacion

Configuracion de cuenta:

- cambio de nombre de usuario
- cambio de nombre y apellido
- solicitud de cambio de email con confirmacion por correo
- cambio de telefono
- cambio de contrasena

Recuperacion de contrasena:

- solicitud por email
- pagina de restablecimiento con nueva contrasena y confirmacion
- redireccion a `/login` al completar el cambio

Navegacion del ecosistema:

- menu superior con enlaces a Realstate, Energy, Mapas y EnProceso

## Integracion con ApiLoging

Este proyecto consume los endpoints de autenticacion, verificacion, recuperacion y perfil de `ApiLoging`.

En local, la configuracion habitual es:

```env
VITE_AUTH_API_URL=http://localhost:8000
```

## Notas

- Si cambias variables `VITE_*`, reinicia `npm run dev`.
- Para que verificacion de email y recuperacion funcionen, `ApiLoging` debe tener configuradas sus URLs de redireccion al frontend correcto.
