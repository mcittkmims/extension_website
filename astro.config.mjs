// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const customDomain = process.env.CUSTOM_DOMAIN;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repo.endsWith('.github.io');

const site = customDomain
  ? `https://${customDomain}`
  : isGithubActions && owner
    ? `https://${owner}.github.io`
    : undefined;

const base = customDomain || !isGithubActions || isUserSite
  ? '/'
  : `/${repo}/`;

// https://astro.build/config
export default defineConfig({ site, base, integrations: [sitemap()] });
