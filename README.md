# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS


## Configuración comercial antes de publicar

1. Copia `.env.example` a `.env` y configura `VITE_CONTACT_EMAIL` con el correo comercial verificado de Aura Interior.
2. Configura `VITE_WHATSAPP_NUMBER` con el número comercial en formato internacional, solo dígitos (por ejemplo, `573001234567`). Si se deja vacío, la web no muestra un botón de WhatsApp con un destino inexistente.
3. El formulario prepara un correo con los datos de la solicitud mediante `mailto:`. El visitante debe revisar y enviar el mensaje desde su aplicación de correo. No hay un backend ni almacenamiento de leads configurado en esta entrega. Para recibir solicitudes sin depender del cliente de correo, conecta un proveedor de formularios o un endpoint seguro antes de publicar.
4. La página `/proyectos` deja claro qué imágenes son recursos de presentación. Sustitúyelas o complementa la página con fotografías y renders de proyectos reales, sus alcances y entregables antes de usarla como portafolio de casos ejecutados.
5. Las solicitudes de asesoría se reciben por el formulario; no se ha conectado un calendario de disponibilidad ni un sistema de pago.

## Desarrollo

Instala dependencias con `npm install` y ejecuta `npm run dev`. Para validar producción, ejecuta `npm run build` y `npm test`.

## Configuración de contacto de Aura Interior

- El formulario envía las solicitudes a `aura.interioor@gmail.com` mediante FormSubmit. En el primer envío, FormSubmit enviará un correo de activación a esa bandeja; debes abrirlo y confirmar la dirección antes de que empiecen a recibirse solicitudes.
- El botón de WhatsApp utiliza el número internacional `+3133648105` (en el enlace se escribe sin el signo `+`).
- Si necesitas cambiar estos destinos, configura `VITE_CONTACT_EMAIL` y `VITE_WHATSAPP_NUMBER` en las variables de entorno de tu hosting.
