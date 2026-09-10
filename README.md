# Playwright + TypeScript Framework

Framework de automatización UI + API, estructurado con Page Object Model
(frontend) y Service Object Model (backend) — el mismo patrón usado en los
frameworks de Selenium/Java y REST Assured/Java, adaptado a Playwright/TypeScript.

## Estructura

```
src/
  pages/        -> Page Objects (UI, target: SauceDemo)
  api/
    services/    -> Service Object Model (equivalente al de REST Assured)
    types/       -> Interfaces TS (equivalente a los POJOs de Java)
  fixtures/      -> Fixtures que inyectan Page Objects en los tests
tests/
  ui/            -> Specs de UI
  api/           -> Specs de API (target: JSONPlaceholder)
.github/workflows/playwright.yml -> CI/CD con publicación a GitHub Pages
```

## Cómo correrlo

```bash
npm install
npx playwright install     # descarga los navegadores
npm test                   # corre toda la suite (UI + API)
npm run test:ui             # solo UI
npm run test:api            # solo API
npm run test:report         # abre el último reporte HTML
```

## Mapeo conceptual con tus frameworks actuales

| Selenium/Java (front)          | Playwright/TS (front)               |
|---------------------------------|--------------------------------------|
| `WebDriverWait` + `By.xpath`   | Auto-waits + `getByRole/getByTestId` |
| POM con clases Java             | POM con clases TS                    |
| ThreadLocal para paralelismo    | Workers/sharding nativos             |
| Allure report                   | HTML report + Trace Viewer           |

| REST Assured/Java (back)        | Playwright/TS (back)                 |
|-----------------------------------|--------------------------------------|
| `RestAssured.given()...when()`  | `request.get/post/put/delete()`      |
| POJOs                            | Interfaces TS                        |
| Service Object Model             | Service Object Model (mismo patrón)  |
| JSON Schema validation           | `toMatchObject` + tipado estricto    |

## Próximos pasos sugeridos

- Añadir Docker para estandarizar el entorno de ejecución.
- Integrar Allure-Playwright si quieres mantener continuidad visual de reportes.
- Explorar visual testing (`toHaveScreenshot`) sobre las páginas ya cubiertas.
- Probar la integración MCP de Playwright con asistentes de IA para generación/debug de tests.
