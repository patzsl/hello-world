import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://patzsl.github.io/hello-world/', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle(/Home/);
});



test('should go to about page', async ({ page }) => {
  await page.goto('https://patzsl.github.io/hello-world/', { waitUntil: 'networkidle' });

  await page.click('[data-testid="btn-click"]'); // Supondo que 'btn-click' seja o atributo data-testid do botão
  await page.click('text="About my site"'); // Supondo que 'About my site' seja o texto exibido no botão que leva para a rota desejada
 
  // Verifica se a URL atual corresponde à rota esperada
  const currentUrl = page.url();
  expect(currentUrl).toBe('https://patzsl.github.io/hello-world/about'); // Substitua '/about' pela rota real que você espera após o clique
});