// @ts-check
import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repo.endsWith('.github.io');

// https://astro.build/config
export default defineConfig({
  site: isGithubActions && repo ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : undefined,
  base: isGithubActions && repo && !isUserSite ? `/${repo}/` : '/',
});
