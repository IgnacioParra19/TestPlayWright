import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.goto('https://pagina-galletita-nxoh.vercel.app/index.html');
  await page.getByRole('link', { name: 'Sobre Nosotros' }).click();
  await page.locator('#navbarCollapse').getByRole('link', { name: 'GalletitaLimoncito' }).click();
  await page.locator('#navbarCollapse').getByRole('link', { name: 'Formulario' }).click();
  await page.getByLabel('Edad:', { exact: true }).click();
  await page.getByLabel('Edad:', { exact: true }).fill('22');
  await page.getByLabel('Sexo:').selectOption('Hombre');
  await page.getByText('😐').click();
  await page.getByLabel('Suavidad:').fill('4');
  await page.getByText('😍').click();
  await page.getByLabel('Humedad:').fill('1');
  await page.getByLabel('Esponjosidad:').fill('4');
  await page.getByLabel('Humedad:').fill('4');
  await page.getByLabel('Fragilidad:').fill('2');
  await page.getByLabel('Grasoso:').fill('2');
  await page.getByLabel('Dureza:').fill('2');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await page.getByRole('link', { name: 'Volver al Inicio' }).click();
  await page.getByRole('link', { name: 'Graficos' }).click();
  await page.getByRole('button', { name: 'Ver Gráfico Afectivo' }).click();
  await page.locator('#chart').click({
    position: {
      x: 346,
      y: 218
    }
  });
  await page.locator('#additionalChart').click({
    position: {
      x: 382,
      y: 92
    }
  });
  await page.getByRole('button', { name: 'Ver Gráfico Descriptivo' }).click();
  await page.locator('#chart').click({
    position: {
      x: 437,
      y: 149
    }
  });
  await page.getByRole('link', { name: 'Volver a la página principal' }).click();
});