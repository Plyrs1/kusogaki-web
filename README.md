# kusogaki-web

This is the home of Kusogaki Crew. I joined the crew on January 11th, 2023

## Developing

Using Node.js v18.13.0 and Yarn 1.22.19

```bash
# install packages
yarn

# start dev server
yarn dev

# tidy up
yarn lint
```

## Building

To generate static files :

```bash
yarn build
```

The motivation behind this is to learn frontend dev, also CI/CD in Github. If you want to help me fix my spaghetti code, please kindly send PR!

## Important Note

Due to the fact that SvelteKit works on root level, before building this project please define `BASE_PATH` first, if you plan to put generated files
inside any other path than root. Example :

- If the website path is `https://somesite.co/somepath`, then set `BASE_PATH='/somepath'`
- If the path is `https://somesite.co/somepath/anotherpath`, then set `BASE_PATH='/somepath/anotherpath'`
- Or if you use root path, `https://somesite.co`, you don't have to set any env
