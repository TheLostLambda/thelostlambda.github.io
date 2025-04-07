dev:
    bun astro dev

build:
    bun astro build

preview: build
    bun astro preview

fmt:
    bun prettier -w .

lint:
    bun prettier -c .
    bun eslint .
    bun stylelint src/**/*.{css,html,astro,svelte}

ci: build lint
