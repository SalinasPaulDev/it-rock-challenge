# 📱 IT Rock Store

## 📖 Descripción

Aplicación móvil desarrollada en React Native Expo, estructura de carpetas organizada y codigo simple y legible.

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework principal
- **React Query** - Manejo de estado del servidor y cache
- **React Stack** - Gestiona pantallas de forma jerárquica
- **React Navigation** - Navegación entre pantallas
- **Axios** - Realizar peticiones a APIs
- **React Native Async Storage** - Mantener la persistencia de las credenciales
- **React Native Snackbar** - Mostrar feedback

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16.0 o superior)
- **npm** o **yarn**
- **Android Studio** (para desarrollo Android)
- **Java Development Kit (JDK 11)**

## ⚙️ Instalación y Setup

### 1. Clonar el repositorio

```bash
git clone https://github.com/SalinasPaulDev/it-rock-challenge.git
cd it-rock-challenge
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

## 🏗️ Build y Ejecución

### Android

#### Modo Development

```bash
# Iniciar Metro bundler
npx react-native start

# En otra terminal, ejecutar en Android
npx react-native run-android
```

### iOS

#### Modo Development

```bash
# Iniciar Metro bundler
npx react-native start

# En otra terminal, ejecutar en iOS
npx react-native run-ios
```

## 🏛️ Arquitectura y Decisiones Técnicas

### ⚡ React Query y Context

**Decisión:**

- Use **React Query** para el manejo del estado del servidor.
- **Context** para almacenar el estado.

**Justificación React Query:**

- **Cache inteligente**: Manejo automático de cache con invalidación y refetch
- **Sincronización en tiempo real**: Actualización automática cuando la ventana recupera el foco
- **Error handling**: Manejo de errores y reintentos automáticos

**Justificación Context:**

- **Menor boilerplate**: Menos código comparado con Redux
- **Simplicidad**: Para el alcance actual del proyecto, Context API es suficiente
- **Clean code**: Codigo mas limpio y legible
- **Carga de dependencias**: Evitar agregar mas dependencias y configuracion para acciones simples

**Casos de uso específicos:**

- Listado de feeds con cache
- Sincronización automática de datos
- Manejo de estados de loading/error

### 🎨 StyleSheet

**Decisión:** Se utilizó **StyleSheet** nativo de React Native.

**Justificación:**

- **Performance**: Mejor rendimiento al ser nativo de React Native
- **Bundle size**: Menor tamaño del bundle final
- **Compatibilidad**: 100% compatible con todas las props de React Native
- **familiarity**: Me sentia mas familiarizado para soluciones rapidas

### 🌐 Mock/API

**Decisión:** Implementación híbrida con **Mock** y **API real para obtener productos** desde https://fakestoreapi.com/.

**Justificación:**

- **Desarrollo independiente**: Solucion rapida de implementar
- **Recomendado**: Use ambas ya que era la forma recomendada que presentaba la tarea.
- **Performance**: Respuestas inmediatas (tiene una simulacion de carga para mostrar loadings)

## 📱 Funcionalidades Principales

- ✅ Feed de contenido con scroll
- ✅ Cache inteligente con React Query
- ✅ Navegación fluida entre pantallas
- ✅ Manejo de estados de carga y error
- ✅ Validaciones de inicio de sesion
- ✅ Validaciones de tarjeta
- ✅ Alertas de error y exito

## ⚠️ Limitaciones Conocidas

- **Deteccion de conexion**: Me gustaria agregar la deteccion de red para notificar al usuario
- **Paginacion**: Los productos que venian desde la api no eran tantos como para hacer paginacion

## 🔧 Troubleshooting

### En caso de problemas

No sufri problemas para levantar la app pero en caso de que algo suceda recomendaria seguir estos pasos:

#### Android

```bash
# Limpiar cache de Metro
npx react-native start --reset-cache

# Limpiar build de Android
cd android && ./gradlew clean && cd ..
```

## 📚 Documentación Adicional

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Query Docs](https://react-query.tanstack.com/)

## ℹ️ Disclaimer

En este proyecto se intento seguir con todas las reglas que el documento especificaba, teniendo en cuenta codigo limpio, ordenado, simplesa, evitar dependencias extras y usar las tecnologias correspondientes.
Me gustaria haber podido agregar Typescript, Test unitarios, React hook form, zod, entre otros. Para hacer un mejor producto.

## 🎉 ¡Gracias por revisar este proyecto!

🚀 Espero que les haya gustado la implementación y haber cumplido con todos los requisitos solicitados.

Si tienen alguna duda o sugerencia, no duden en contactarme 😊✨

---
