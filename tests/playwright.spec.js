import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  for (let i = 0; i < 10; i++) {
    console.log(`Por cada iteración ${i + 1}`);
    
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.goto('https://pagina-galletita-nxoh.vercel.app/index.html');
    
    await page.getByRole('link', { name: 'Sobre Nosotros' }).click();
    await page.locator('#navbarCollapse').getByRole('link', { name: 'Home' }).click();
    await page.locator('#navbarCollapse').getByRole('link', { name: 'Formulario' }).click();
    await page.getByLabel('Edad:', { exact: true }).click();
    await page.getByLabel('Edad:', { exact: true }).fill('22');
    await page.getByLabel('Sexo:').selectOption('Hombre');
    await page.getByText('😐').click();
    await page.getByLabel('Suavidad:').fill('2');
    await page.getByLabel('Humedad:').fill('4');
    await page.getByLabel('Esponjosidad:').fill('1');
    await page.getByLabel('Fragilidad:').fill('5');
    await page.getByLabel('Grasoso:').fill('5');
    await page.getByLabel('Crocante:').fill('2');
    await page.getByLabel('Dureza:').fill('5');
    await page.getByRole('button', { name: 'Enviar' }).click();
    await page.getByRole('heading', { name: '¡Gracias!' }).click();
    await page.getByText('Tu evaluación ha sido enviada').click();
    await page.getByRole('link', { name: 'Volver al Inicio' }).click();
    await page.getByRole('link', { name: 'Graficos' }).click();
    await page.getByRole('button', { name: 'Ver Gráfico Afectivo' }).click();
    await page.locator('#chart').click({ position: { x: 293, y: 261 } });
    await page.locator('#additionalChart').click({ position: { x: 290, y: 184 } });
    await page.getByRole('button', { name: 'Ver Gráfico Descriptivo' }).click();
    await page.getByRole('link', { name: 'Volver a la página principal' }).click();
  }
});
