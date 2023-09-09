# Astro Spline Viewer Demo

- Planet example from https://app.spline.design/library
- imported via https://viewer.spline.design/
  - https://www.npmjs.com/package/@splinetool/viewer

Built with [mhyfritz/astro-landing-page](https://github.com/mhyfritz/astro-landing-page) template (MIT license)

## TODOs

- [ ] Resize event is not triggered in grid - how can I trigger it manually? 
- [ ] How to import Web Component `<spline-viewer>` from node_modules? ([discord question](https://discord.com/channels/830184174198718474/1150020817019744307/1150020817019744307))
- [ ] Try out scroll, look at, etc. https://viewer.spline.design/
- [ ] What about GDPR of spline viewer? What data is collected? Can export be self hosted?
  - Can we just use the normal exported spline code file in spline-viewer?
  - Or just use vanillajs runtime https://docs.spline.design/77c32288501a479fa8bc5e787f1e0878?

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Credits

- astronaut image
  - source: https://github.com/withastro/astro-og-image; note: this repo is not available anymore
- moon image
  - source: https://unsplash.com/@nasa
- other than that, a lot of material (showcase data, copy) was taken from official Astro sources, in particular https://astro.build/blog/introducing-astro/ and https://github.com/withastro/astro.build


Built with [mhyfritz/astro-landing-page](https://github.com/mhyfritz/astro-landing-page) template (MIT license)
