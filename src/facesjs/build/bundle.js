var faces = (function (exports) {
  'use strict';

  const override = (obj, overrides) => {
    if (!overrides) {
      return;
    }

    for (const [key, value] of Object.entries(overrides)) {
      if (
        typeof value === "boolean" ||
        typeof value === "string" ||
        typeof value === "number" ||
        Array.isArray(value)
      ) {
        obj[key] = value;
      } else {
        override(obj[key], value);
      }
    }
  };

  // THIS IS A GENERATED FILE, DO NOT EDIT BY HAND!
  // See tools/process-svgs.js

  var svgs = {"accessories":{"headband-high":"<g stroke=\"#000\"><path d=\"M350 280c-10 0-30-90-150-90S60 280 50 280c-10-10-10-40 0-50 0 0 30-90 150-90s150 90 150 90c10 10 10 40 0 50z\" fill=\"$[primary]\" stroke-width=\"4\"/><path d=\"M45 260v-10s35-90 155-90 155 90 155 90v10c-5 0-35-90-155-90S50 260 45 260z\" fill=\"$[secondary]\"/></g>","headband":"<path class=\"headband\" d=\"M350 280c-10 0-30-50-150-50S60 280 50 280c-10-10-10-40 0-50 0 0 30-50 150-50s150 50 150 50c10 10 10 40 0 50z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"4\"/><path class=\"stripe\" d=\"M45 260v-10s35-50 155-50 155 50 155 50v10c-5 0-35-50-155-50S50 260 45 260z\" fill=\"$[secondary]\" stroke=\"#000\"/>","none":""},"body":{"body":"<path class=\"shp0\" d=\"M10 600s0-50 60-70 70-50 70-50l60-180 60 180s10 30 70 50 60 70 60 70\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/>"},"ear":{"ear1":"<path d=\"M43 13S23 3 13 3 3 23 3 33s3 20 13 30 27-10 27-10V13z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/>","ear2":"<path d=\"M40 14S10-1 5 4s0 30 5 40-5 25 30 20V14z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/>","ear3":"<path d=\"M43 8S3-12 3 28c0 45 40 30 40 30V8z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/>"},"eye":{"eye1":"<style></style><g id=\"eye1\" stroke=\"#000\" stroke-width=\"5\"><path id=\"Shape 7\" d=\"M63 43s-5 10-35 10S3 43 3 43 3 3 33 3s30 40 30 40z\" fill=\"#fff\"/><path id=\"Shape 7\" d=\"M33 38c-10 0-10-20 0-20s10 20 0 20z\" fill=\"#000\"/></g>","eye2":"<style></style><g id=\"eye2\" stroke=\"#000\" stroke-width=\"5\"><path id=\"Shape 10\" d=\"M55.37 34.72S58.4 2.3 28.53 5.07C-1.35 7.83 7.21 35.16 7.21 35.16\" fill=\"#fff\"/><path id=\"Shape 10\" d=\"M30.74 28.97c-3.31.3-6.22-2.12-6.53-5.43a5.985 5.985 0 015.42-6.52 5.987 5.987 0 016.53 5.42c.3 3.3-2.12 6.22-5.42 6.53z\" fill=\"#000\"/></g>","eye3":"<style>.shp1{fill:#fff;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:5}</style><g id=\"eye3\"><path id=\"Shape 7\" d=\"M265 360c-13.83 0-25-11.18-25-25 0-13.83 11.17-25 25-25 13.82 0 25 11.17 25 25 0 13.82-11.18 25-25 25z\" fill=\"none\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"5\"/><path id=\"Shape 7\" class=\"shp1\" d=\"M265 360c-13.83 0-25-11.18-25-25v-5h50v5c0 13.82-11.18 25-25 25z\"/><path id=\"Shape 7\" d=\"M265 330c-10 0-10 15 0 15s10-15 0-15z\" fill=\"#000\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/></g>","eye4":"<style></style><g id=\"eye4\" stroke=\"#000\"><path id=\"Shape 9\" d=\"M68.08 23.19s1.89 14.88-27.87 18.67C15.41 45.02 6.66 15.89 6.03 10.93 25.87 8.4 65.55 3.35 68.08 23.19z\" fill=\"#fff\" stroke-width=\"5\"/><path id=\"Shape 7 copy\" d=\"M39.04 16.81c9.92-1.27 11.81 13.61 1.89 14.88-9.92 1.26-11.81-13.62-1.89-14.88z\" fill=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"/></g>","eye5":"<style></style><g id=\"eye5\"><path id=\"White\" d=\"M73.67 39.73c3.92-10.47 2.35-25.38 2.35-25.38s-35.86-6.27-45.8-5.22c-9.95 1.04-24.34 7.59-24.34 7.59s-1.44 10.21 7.6 24.34l60.19-1.33z\" fill=\"#fff\"/><path id=\"Shape 9\" d=\"M45.8 37.65c-4.13.43-8.17-5.88-9.04-14.13-.87-8.25 1.76-15.27 5.89-15.71 4.12-.43 8.16 5.88 9.03 14.13.87 8.25-1.76 15.27-5.88 15.71z\" fill=\"#000\"/><path id=\"Outline\" d=\"M73.67 39.73c4.45-5.49 2.35-25.38 2.35-25.38s-35.86-6.27-45.8-5.22c-9.95 1.04-24.34 7.59-24.34 7.59s1.57 14.92 7.6 24.34\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\"/></g>","eye6":"<style></style><g id=\"eye6\"><path id=\"Shape 9\" d=\"M73.63 30.14S62.25 5.74 32.3 7.42C12.33 8.54 7.9 18.8 7.9 18.8l5.83 14.7c30.23 3.31 59.9-3.36 59.9-3.36z\" fill=\"#fff\"/><path id=\"Shape 9\" d=\"M40.63 30.99a9.988 9.988 0 009.42-10.55 9.985 9.985 0 00-10.54-9.42 10 10 0 00-9.43 10.54c.31 5.52 5.03 9.74 10.55 9.43z\" fill=\"#000\"/><path id=\"Outline\" d=\"M73.63 30.14S72.51 10.17 32.3 7.42C12.33 8.54 7.9 18.8 7.9 18.8l5.83 14.7\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\"/></g>","eye7":"<style></style><g id=\"eye7\" stroke=\"#000\" stroke-width=\"5\"><path id=\"White\" d=\"M74 18L69 3H4l5 15h65z\" fill=\"#fff\"/><path id=\"Shape 9\" d=\"M38.5 18a7.49 7.49 0 01-7.5-7.5C31 6.35 34.35 3 38.5 3S46 6.35 46 10.5 42.65 18 38.5 18z\" fill=\"#000\"/></g>","eye8":"<style></style><g id=\"eye8\" stroke=\"#000\" stroke-width=\"5\"><path id=\"Shape 10\" d=\"M67 35c0-4 6-32-24-32S3 15 3 23s12 20 24 20 40-4 40-8z\" fill=\"#fff\"/><path id=\"Shape 10\" d=\"M39 29c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6z\" fill=\"#000\"/></g>","eye9":"<style></style><g id=\"eye9\" stroke=\"#000\" stroke-width=\"5\"><path id=\"Shape 10\" d=\"M240 340c0-4-6-20 24-20 20 0 36 8 36 12s-12 12-20 12c-4 0-40 0-40-4z\" fill=\"#fff\"/><path id=\"Shape 10\" d=\"M268 340c-3.32 0-6-3.58-6-8s2.68-8 6-8 6 3.58 6 8-2.68 8-6 8z\" fill=\"#000\"/></g>"},"eyeLine":{"line1":"<path class=\"eyeline1\" d=\"M220 270s-10 0-10-20m-30 20s10 0 10-20\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line2":"<path class=\"eyeline2\" d=\"M300 320s5 5 10 5m-13.25-2.47S300 335 305 335m-205-15s-5 5-10 5m13.25-2.47S100 335 95 335\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line3":"<path class=\"eyeline3\" d=\"M240 340s10 10 25 10m-105-10s-10 10-25 10\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line4":"<path class=\"eyeline4\" d=\"M240 340s25 10 40 0m-120 0s-25 10-40 0\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line5":"<path class=\"eyeline5\" d=\"M240 355s20-10 45 0m-125 0s-20-10-45 0\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line6":"<path class=\"eyeline6\" d=\"M235 285s10-10 45-10m-115 10s-10-10-45-10\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","none":""},"eyebrow":{"eyebrow1":"<path d=\"M83 13C83 3 73 3 73 3 48-2 17.46 8.36 3 18c40-5 50 5 75 5 0 0 5 0 5-10z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow10":"<path d=\"M71 17c8-8 0-12 0-12S43 9 35 9C25 9 7 1 7 1S-5 5 7 17c8 8 8 8 28 8s33-5 36-8z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow11":"<path d=\"M73 13c8-8 0-12 0-12S45 5 37 5H1s20 12 40 12c12 0 28 0 32-4z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow12":"<path d=\"M66 13c4-4 0-8 0-8H30C14 5 2 1 2 1s-4 0 8 12l-4 8h32c20 0 24-4 28-8z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow2":"<path d=\"M235 280l65 5-5-12.45-55 2.45-5 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow3":"<path d=\"M73 13c4.85-1.21 0-10-10-10S3 8 3 8s50 10 70 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow4":"<path d=\"M61 16V6L31 1 1 6v10l30-5 30 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow5":"<path d=\"M65 16c3-3 0-10 0-10S45 1 35 1 3 11 3 11s-3 7 0 10 22-8 32-8 27 6 30 3z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow6":"<path d=\"M67 17c3-3 0-12 0-12H39C29 5 3 1 3 1S0 14 3 17s26 0 36 0 25 3 28 0z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow7":"<path d=\"M71 21c8-8 0-12 0-12S43 5 35 5C25 5 7 1 7 1S-5 5 7 17c16 4 8 0 28 0 32 0 33 7 36 4z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow8":"<path d=\"M71 25c8-8 0-16 0-16S43 1 35 1C25 1 7 5 7 5s-12 8 0 20c16 8 16-4 36-4s24 8 28 4z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","eyebrow9":"<path d=\"M73 21c8-8 0-16 0-16S45 1 37 1C27 1 1 17 1 17s20-4 40-4c12 0 28 12 32 8z\" fill=\"$[hairColor]\" stroke=\"#000\"/>"},"facialHair":{"beard1":"<path fill-rule=\"evenodd\" class=\"shp0\" d=\"M200 410c45 0 50 10 50 10 30 0 90-15 90-120h10c0 130-30 150-40 160s-60 60-110 60-100-50-110-60-40-30-40-160h10c0 105 60 120 90 120 0 0 5-10 50-10zm-45 30c0 20 5 30 25 30 10 0 10-10 20-10s10 10 20 10c20 0 25-10 25-30s-15-20-45-20-45 0-45 20z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","beard2":"<path fill-rule=\"evenodd\" class=\"shp0\" d=\"M200 410c55 0 55 15 55 30 70 0 85-35 85-140h10c0 130-30 150-40 160s-60 60-110 60-100-50-110-60-40-30-40-160h10c0 105 15 140 85 140 0-15 0-30 55-30zm-45 30c0 20 5 30 25 30 10 0 10-10 20-10s10 10 20 10c20 0 25-10 25-30s-15-20-45-20-45 0-45 20z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","fullgoatee":"<path fill-rule=\"evenodd\" class=\"shp0\" d=\"M200 410c55 0 55 15 55 30 0 0 5 40-5 55-5 5-35 15-50 15s-46.67-10-50-15c-10-15-5-55-5-55 0-15 0-30 55-30zm-45 30c0 20 5 30 25 30 10 0 10-10 20-10s10 10 20 10c20 0 25-10 25-30s-15-20-45-20-45 0-45 20z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee-thin":"<path class=\"shp0\" d=\"M165 470v25m10-30v35m10-40v40m10-40v40m10 0v-40m10 0v40m10-35v35m10-30v25\" stroke=\"#000\" stroke-width=\"3\"/>","goatee1-stache":"<path class=\"shp0\" d=\"M200 457.82l10 2.18s0 20 10 20 30-5 30 0c0 20-30 30-50 30s-50-10-50-30c0-5 20 0 30 0s10-20 10-20l10-2.18zM150 425c-5-5 25-20 35-20 5 0 10 5 15 5s10-5 15-5c10 0 40 15 35 20s-5-5-50-5-45 10-50 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee1":"<path class=\"shp0\" d=\"M200 457.82l10 2.18s0 20 10 20 30-5 30 0c0 20-30 30-50 30s-50-10-50-30c0-5 20 0 30 0s10-20 10-20l10-2.18z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee2":"<path class=\"shp0\" d=\"M200 458.02L190 460c-10 10-20 40-20 40s10 10 30 10 30-10 30-10-10-30-20-40l-10-1.98z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee3":"<path class=\"shp0\" d=\"M175 485s10-5 25-5 25 5 25 5c-15 30-15 45-15 45l-5-10-5 20-5-20-5 10s0-15-15-45z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee4":"<path class=\"shp0\" d=\"M220 480c10 0 30-5 30 0 0 20-30 30-50 30s-50-10-50-30c0-5 20 0 30 0h40z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee5":"<path d=\"M200 460c10 0 10 20 20 20s20-20 20-20 10 0 10 5c0 40-10 50-50 50s-50-10-50-50c0-5 10-5 10-5s10 20 20 20 10-20 20-20z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee6":"<path class=\"shp0\" d=\"M188 454c2-2 22-2 24 0s-8 16-12 16-14-14-12-16zm12 21c10 0 10 5 20 5s20-20 20-20 10 0 10 5c0 40-10 50-50 50s-50-10-50-50c0-5 10-5 10-5s10 20 20 20 10-5 20-5zm-50-50c-5-5 25-20 35-20 5 0 10 5 15 5s10-5 15-5c10 0 40 15 35 20s-5-5-50-5-45 10-50 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee7":"<path class=\"shp0\" d=\"M250 485c-10 20-30 20-50 20s-40 0-50-20c5-5 10 10 50 10s45-15 50-10z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","goatee8":"<path class=\"shp0\" d=\"M188 454c2-2 22-2 24 0s-8 16-12 16-14-14-12-16zm62 31c-10 20-30 20-50 20s-40 0-50-20c5-5 10 10 50 10s45-15 50-10z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","handlebar":"<path d=\"M205 420c-4 0-5-5-.8-10 5.8-5 15.8-5 15.8-5 15 0 35 15 35 25 0 30 10 55 5 60s-15 5-20 0 5-40 5-55-15-15-40-15zm-10 0c4 0 5-5 0-10s-15-5-15-5c-16 0-35 15-35 25 0 30-10 55-5 60s15 5 20 0-5-40-5-55 15-15 40-15z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","honest-abe-stache":"<path d=\"M340 300c0 105-85 140-85 140s-5 30-15 30c-30 0-30-10-40-10s-10 10-40 10c-10 0-15-30-15-30s-85-35-85-140H50c0 105 20 140 20 140s55 80 130 80 130-80 130-80 20-35 20-140h-10zM150 425c-5-5 25-20 35-20 5 0 10 5 15 5s10-5 15-5c10 0 40 15 35 20s-5-5-50-5-45 10-50 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","honest-abe":"<path class=\"shp0\" d=\"M340 300c0 105-85 140-85 140s-5 30-15 30c-30 0-30-10-40-10s-10 10-40 10c-10 0-15-30-15-30s-85-35-85-140H50c0 105 20 140 20 140s55 80 130 80 130-80 130-80 20-35 20-140h-10z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","mustache-thin":"<style></style><path id=\"mustache_thin\" d=\"M205.17 408l-.17 12m10-15v16.28m10-13.26V420m10-10v11.28M194.83 408l.17 12m-10-15v16.28m-10-13.26V420m-10-10v11.53\" fill=\"red\" stroke=\"#000\" stroke-width=\"3\"/>","mustache1":"<path class=\"shp0\" d=\"M150 425c-5-5 25-20 35-20 5 0 10 5 15 5s10-5 15-5c10 0 40 15 35 20s-5-5-50-5-45 10-50 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","none":"","soul-stache":"<path class=\"shp0\" d=\"M188 458c2-2 22-2 24 0s-8 16-12 16-14-14-12-16z\" fill=\"$[hairColor]\" stroke=\"#000\"/>","soul":"<path class=\"shp0\" d=\"M188 458c2-2 22-2 24 0s-8 16-12 16-14-14-12-16zm-38-33c-5-5 25-20 35-20 5 0 10 5 15 5s10-5 15-5c10 0 40 15 35 20s-5-5-50-5-45 10-50 5z\" fill=\"$[hairColor]\" stroke=\"#000\"/>"},"glasses":{"facemask":"<path fill-rule=\"evenodd\" class=\"facemask\" d=\"M200 190c50 0 100 10 110 20s20 80 20 80 0 60-10 70-50 10-80 10c-10 0-20-10-40-10s-30 10-40 10c-30 0-70 0-80-10s-10-70-10-70 10-70 20-80 60-20 110-20zm-70 90c-30 0-45 10-45 30 0 25 15 30 45 30s60-5 60-30-30-30-60-30zm140 60c30 0 45-5 45-30 0-20-15-30-45-30s-60 5-60 30 30 30 60 30z\" fill=\"rgba(150,150,175,.5)\" stroke=\"#000\" stroke-width=\"2\"/><path class=\"straps\" d=\"M350 315v-30h-20v30h20zm-280 0v-30H50v30h20z\" fill=\"#333\" stroke=\"#000\" stroke-width=\"2\"/><path class=\"glare\" d=\"M260 270l10-30m0 35l10-30m-160 25l10-30m0 35l10-30m120 115l5-15m0 20l5-15m-150 10l5-15m0 20l5-15\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>","glasses1-primary":"<path class=\"frame\" d=\"M195 285h10s35-10 65-10 50 10 50 10 0 5 10 5v30c-10 0-10 5-10 5s-20 20-50 20c-60 0-65-35-65-35 0-5-10-5-10 0 0 0-5 35-65 35-30 0-50-20-50-20s0-5-10-5v-30c10 0 10-5 10-5s20-10 50-10 65 10 65 10zM90 295c0 20 0 40 40 40 50 0 50-30 50-30v-10s-20-10-50-10c-40 0-40 10-40 10zm130 10s0 30 50 30c40 0 40-20 40-40 0 0 0-10-40-10-30 0-50 10-50 10v10z\" fill=\"#333\" stroke=\"#000\" stroke-width=\"2\"/><path class=\"lens\" d=\"M90 295s0-10 40-10c30 0 50 10 50 10v10s0 30-50 30c-40 0-40-20-40-40zm180 40c-50 0-50-30-50-30v-10s20-10 50-10c40 0 40 10 40 10 0 20 0 40-40 40z\" fill=\"rgba(150,150,175,.5)\"/><path class=\"straps\" d=\"M350 320v-30h-20v30h20zm-280 0v-30H50v30h20z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"2\"/><path class=\"glare\" d=\"M280 315l10-20m0 20l10-20m-160 20l10-20m0 20l10-20\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>","glasses1-secondary":"<path class=\"frame\" d=\"M195 285h10s35-10 65-10 50 10 50 10 0 5 10 5v30c-10 0-10 5-10 5s-20 20-50 20c-60 0-65-35-65-35 0-5-10-5-10 0 0 0-5 35-65 35-30 0-50-20-50-20s0-5-10-5v-30c10 0 10-5 10-5s20-10 50-10 65 10 65 10zM90 295c0 20 0 40 40 40 50 0 50-30 50-30v-10s-20-10-50-10c-40 0-40 10-40 10zm130 10s0 30 50 30c40 0 40-20 40-40 0 0 0-10-40-10-30 0-50 10-50 10v10z\" fill=\"#333\" stroke=\"#000\" stroke-width=\"2\"/><path class=\"lens\" d=\"M90 295s0-10 40-10c30 0 50 10 50 10v10s0 30-50 30c-40 0-40-20-40-40zm180 40c-50 0-50-30-50-30v-10s20-10 50-10c40 0 40 10 40 10 0 20 0 40-40 40z\" fill=\"rgba(150,150,175,.5)\"/><path class=\"straps\" d=\"M350 320v-30h-20v30h20zm-280 0v-30H50v30h20z\" fill=\"$[secondary]\" stroke=\"#000\" stroke-width=\"2\"/><path class=\"glare\" d=\"M280 315l10-20m0 20l10-20m-160 20l10-20m0 20l10-20\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>","glasses2-black":"<path class=\"frame\" d=\"M50 285h30s20-10 50-10 65 10 65 10h10s35-10 65-10 50 10 50 10h30v10l-30 5s-20-15-50-15-60 10-60 10-5 15 0 25c0 0-5-10-10-10s-10 10-10 10c5-10 0-25 0-25s-30-10-60-10-50 15-50 15l-30-5v-10z\" fill=\"#333\" stroke=\"#000\" stroke-width=\"2\"/><path fill-rule=\"lens\" class=\"lens\" d=\"M155 340c35 0 35 5 35-20 5-10 0-25 0-25s-30-10-60-10-50 15-50 15-5 40 5 45 40-5 70-5zm160 5c10-5 5-45 5-45s-20-15-50-15-60 10-60 10-5 15 0 25c0 25 0 20 35 20 30 0 60 10 70 5z\" fill=\"rgba(150,150,175,.5)\"/><path class=\"glare\" d=\"M275 330l15-35m-5 35l15-35m-165 35l15-35m-5 35l15-35\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>","glasses2-primary":"<path class=\"frame\" d=\"M50 285h30s20-10 50-10 65 10 65 10h10s35-10 65-10 50 10 50 10h30v10l-30 5s-20-15-50-15-60 10-60 10-5 15 0 25c0 0-5-10-10-10s-10 10-10 10c5-10 0-25 0-25s-30-10-60-10-50 15-50 15l-30-5v-10z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"2\"/><path fill-rule=\"lens\" class=\"lens\" d=\"M155 340c35 0 35 5 35-20 5-10 0-25 0-25s-30-10-60-10-50 15-50 15-5 40 5 45 40-5 70-5zm160 5c10-5 5-45 5-45s-20-15-50-15-60 10-60 10-5 15 0 25c0 25 0 20 35 20 30 0 60 10 70 5z\" fill=\"rgba(150,150,175,.5)\"/><path class=\"glare\" d=\"M275 330l15-35m-5 35l15-35m-165 35l15-35m-5 35l15-35\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>","glasses2-secondary":"<path class=\"frame\" d=\"M50 285h30s20-10 50-10 65 10 65 10h10s35-10 65-10 50 10 50 10h30v10l-30 5s-20-15-50-15-60 10-60 10-5 15 0 25c0 0-5-10-10-10s-10 10-10 10c5-10 0-25 0-25s-30-10-60-10-50 15-50 15l-30-5v-10z\" fill=\"$[secondary]\" stroke=\"#000\" stroke-width=\"2\"/><path fill-rule=\"lens\" class=\"lens\" d=\"M155 340c35 0 35 5 35-20 5-10 0-25 0-25s-30-10-60-10-50 15-50 15-5 40 5 45 40-5 70-5zm160 5c10-5 5-45 5-45s-20-15-50-15-60 10-60 10-5 15 0 25c0 25 0 20 35 20 30 0 60 10 70 5z\" fill=\"rgba(150,150,175,.5)\"/><path class=\"glare\" d=\"M275 330l15-35m-5 35l15-35m-165 35l15-35m-5 35l15-35\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/>","none":""},"hair":{"afro":"<path d=\"M60 310H50s-40 0-40-50C10 120 80 70 200 70s190 50 190 190c0 50-40 50-40 50h-10v-20c0-5-10-20-15-25s-10-45-15-55c-6.32-12.65-60-10-110-10s-103.68-2.65-110 10c-5 10-10 50-15 55s-15 20-15 25v20zM200 70\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","bald":"","cornrows":"<defs><linearGradient id=\"grd1\" gradientUnits=\"userSpaceOnUse\" x1=\"200\" y1=\"100\" x2=\"200\" y2=\"310\"><stop offset=\"0\" stop-color=\"rgba(0,0,0,.3)\"/><stop offset=\"1\" stop-color=\"rgba(0,0,0,0)\"/></linearGradient></defs><style></style><g id=\"cornrows\"><path id=\"Short Fade\" d=\"M60 310H50v-10c0-140 50-200 150-200s150 60 150 200v10h-10v-20c0-5-10-20-15-25s-5-45-15-55-60 0-110 0-100-10-110 0-10 50-15 55-15 20-15 25v20z\" fill=\"url(#grd1)\" stroke=\"none\"/><path id=\"cornrows\" d=\"M195 200h-10V100h10v100zm10 0h10V100h-10v100m20 0h10V100h-10v100m20 0h10v-95h-10v95zm20-5h10v-85h-10v85zm20 0h10v-75h-10v75zm20-5h10v-50h-10v50zm20 5h10v-20h-10v20m-150 5h-10V100h10v100zm-20 0h-10v-95.13h10V200zm-20-5v-85.15h-10V195h10zm-20 0v-75h-10v75h10zm-20-5H85v-50h10v50zm-20 5H65v-20h10v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/></g>","crop":"<path d=\"M200 95c120 0 140 90 140 115-20 0-20 5-25 0s-15-15-50-15c-15 0-40 5-65 5s-50-5-65-5c-35 0-45 10-50 15s-5 0-25 0c0-25 25-115 140-115z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","high":"<path d=\"M60 310H50v-10C50 110 40 90 60 90h280c20 0 10 20 10 210v10h-10v-20c0-5-10-20-15-25s-5-55-15-65-60 0-110 0-100-10-110 0-10 60-15 65-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","juice":"<path d=\"M60 310H50s-.19-5 0-10C60 40-10 145 200 80c34.77-10.76 43.79-21.21 65 0 5 5 5 45 5 45s3.04-26.26 10-25c110 20 60-20 70 200 .23 4.99 0 10 0 10h-10v-20c0-5-10-20-15-25s-5-65-15-75-60 10-110 10-100-20-110-10-10 70-15 75-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","messy-short":"<path d=\"M60 310H50v-10-65h-5l10-25-15 5 20-30H45l25-25-15-5 30-17.95L70 130l32.5-7.95L90 115l35-5-7.5-12.45L155 100l-15-15 40 7.55L175 75l30 15-5-20 25 20 35-10-15 15h30l-15 10 40 2.55-15 7.45 35 5-17.5 7.55L340 145l-17.5 5 27.5 20-15 10 25 35h-12.5l7.5 20h-5v75h-10v-20c0-5-10-20-15-25s-5-65.3-15-75.3l-6.33 11s-4.34-8.7-4.34-9c0-.29-11.66 12.67-11.66 12.67L285 189.7l-21 20.67.33-18-26.66 24.33 3.33-25-30.33 22 .33-20.33-27.33 28L187.5 195 166 213.7l1-15.66-23.33 19.33 4-23.33L123 208.37l2-16.67-23 21.67.33-21.67-12.66 8.34L90 190c-10 10-10 70-15 75s-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","middle-part":"<path d=\"M60 310H50s-10-10-10-30c-10-90 10-130 20-140s30-20 50-40c21.21-21.21 50-20 60-20s30 20 30 20 20-20 30-20 38.79-1.21 60 20c20 20 40 30 50 40s30 52.05 20 140c0 20-10 30-10 30h-10v-20c0-5-10-20-15-25s-15-55-25-65-54.5-10-54.5-10-25.5-30 14.5 20c-20 0-60-20-60-20s-40 20-60 20c40-50 14.5-20 14.5-20s-44.5 0-54.5 10-20 60-25 65-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","parted":"<path d=\"M60 310H50s-10-10-10-30C40 140 90 81.5 150 86.05l3.5 8.5S153 84.05 160 80c80-10 150 10 160 50 40 40 40 10 40 150 0 20-10 30-10 30h-10v-20c0-5-10-20-15-25s-5-55-15-65-70 0-110 0c-30 0-37-20-40-30 0 10-50 20-60 30s-20 60-25 65-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","short-fade":"<defs><linearGradient id=\"shortfade\" gradientUnits=\"userSpaceOnUse\" x1=\"200\" y1=\"100\" x2=\"200\" y2=\"310\"><stop offset=\"0\" stop-color=\"rgba(0,0,0,.25)\"/><stop offset=\"1\" stop-color=\"rgba(0,0,0,0)\"/></linearGradient></defs><style></style><g id=\"short fade\"><path id=\"Short Fade\" d=\"M60 310H50v-10c0-140 50-200 150-200s150 60 150 200v10h-10v-20c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v20z\" fill=\"url(#shortfade)\" stroke=\"none\"/></g>","short":"<path d=\"M60 310H50v-10c0-140 50-200 150-200s150 60 150 200v10h-10v-20c0-5-10-20-15-25s-5-50-15-60-60-5-110-5-100-5-110 5-10 55-15 60-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","short2":"<path d=\"M60 310H50v-10c0-140 50-200 150-200s150 60 150 200v10h-10v-20c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","spike":"<path d=\"M60 310H50v-10c0-65-5-145-5-150 0-10 5-20 5-20l10 10 6-20 14 10 5-20 15 10 5-20 15 10 8-22 12 12 8-20 12 16 10-21 10 21 10-21 10 21 10-21 10 21 10-21 10 21 12-16 8 20 12-12 8 24.37L290 100l10 20 12-9.96 8 19.96 14-10 6 20 10-10s5 10 5 20c0 5-5 85-5 150v10h-10v-20c0-5-10-20-15-25s-5-55-15-65-60 0-110 0-100-10-110 0-10 60-15 65-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>","spike2":"<path d=\"M60 310H50v-35l-2-11 2-9-2-11 2-9-2-11 2-9-2-15 7-10-3-15.63L65 165l-1-17 16-3v-21h20l4-20 20 4 12-20 20 12 12-20 16 16 16-20 16 20 16-16 12 20 20-12 12 20 20-4 4 20h20v21l16 3-1 17 13 9.04-3 15.96 7 10-2 15 2 9-2 11 2 9-2 11 2 9-2 11v35h-10v-20c0-5-10-20-15-25s-5-50-15-60-60-5-110-5-100-5-110 5-10 55-15 60-15 20-15 25v20z\" fill=\"$[hairColor]\" stroke=\"#000\" stroke-width=\"4\"/>"},"head":{"head1":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 70-50 200-150 200S50 370 50 300c0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 70-50 200-150 200S50 370 50 300h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head2":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 70-30 120-40 130l-60 60s-20 10-50 10-50-10-50-10l-60-60c-10-10-40-60-40-130 0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 70-30 120-40 130l-60 60s-20 10-50 10-50-10-50-10l-60-60c-10-10-40-60-40-130h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head3":"<path d=\"M200 100c100 0 150 60 150 200 0 20-20 130-20 130l-80 50c-20 20-40 20-50 20s-30 0-50-20l-80-50S50 320 50 300c0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 20-20 130-20 130l-80 50c-20 20-40 20-50 20s-30 0-50-20l-80-50S50 320 50 300h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head4":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 70-10 90-30 130-10 20-60 50-70 60-20 20-20 10-50 10s-30 10-50-10c-10-10-60-40-70-60-20-40-30-60-30-130 0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 70-10 90-30 130-10 20-60 50-70 60-20 20-20 10-50 10s-30 10-50-10c-10-10-60-40-70-60-20-40-30-60-30-130h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head5":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 50-.51 71.54-10 100-10 30-80 70-90 80s-20 20-50 20-40-10-50-20-80-50-90-80c-9.49-28.46-10-50-10-100 0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 50-.51 71.54-10 100-10 30-80 70-90 80s-20 20-50 20-40-10-50-20-80-50-90-80c-9.49-28.46-10-50-10-100h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head6":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 70-30 150-40 160s-60 40-110 40-100-30-110-40-40-90-40-160c0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 70-30 150-40 160s-60 40-110 40-100-30-110-40-40-90-40-160h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head7":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 20-20 120-25 130-4.47 8.94-105 70-105 70h-40s-98.29-56.58-105-70c-5-10-25-110-25-130 0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 20-20 120-25 130-4.47 8.94-105 70-105 70h-40s-98.29-56.58-105-70c-5-10-25-110-25-130h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>","head8":"<path class=\"head\" d=\"M200 100c100 0 150 60 150 200 0 20-5 100-25 130-10 20-45 50-85 55-5 5-15 15-40 15s-35-10-40-15c-35-5-75-35-85-55-20-30-25-110-25-130 0-140 50-200 150-200z\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"faceShave\" d=\"M200 410c30 0 50 10 50 10 30 0 90-15 90-120h10c0 20-5 100-25 130-10 20-45 50-85 55-5 5-15 15-40 15s-35-10-40-15c-35-5-75-35-85-55-20-30-25-110-25-130h10c0 105 60 120 90 120 0 0 20-10 50-10z\" fill=\"$[faceShave]\"/><path class=\"headShave\" d=\"M60 300H50c0-140 50-200 150-200s150 60 150 200h-10v-10c0-5-10-20-15-25s-5-55-15-65c-40-40-60 0-110 0s-70-40-110 0c-10 10-10 60-15 65s-15 20-15 25v10z\" fill=\"$[headShave]\"/>"},"jersey":{"football":"<path class=\"football\" d=\"M100 500s70 90 100 90 100-90 100-90 30 10 60 10c0 0 30 10 30 40s10 60 10 60H0s10-30 10-60 30-40 30-40c30 0 60-10 60-10\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"shoulderpads\" d=\"M370 560s-61 7.89-70-10M30 560s61 7.89 70-10\" fill=\"none\" stroke=\"#000\" stroke-width=\"3\"/><path class=\"collar-outline\" d=\"M100 500s70 90 100 90 100-90 100-90\" fill=\"none\" stroke=\"#000\" stroke-width=\"16\"/><path class=\"collar-accent\" d=\"M100 500s70 90 100 90 100-90 100-90\" fill=\"none\" stroke=\"$[accent]\" stroke-width=\"12\"/><path class=\"collar-secondary\" d=\"M100 500s70 90 100 90 100-90 100-90\" fill=\"none\" stroke=\"$[secondary]\" stroke-width=\"6\"/>","jersey":"<path d=\"M80 610s10-30 10-90l20-10s10 80 90 80 90-80 90-80l20 10c0 60 10 90 10 90H80z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"6\"/>","jersey2":"<path class=\"jersey\" d=\"M80 610s10-30 10-90l20-10s10 80 90 80 90-80 90-80l20 10c0 60 10 90 10 90H80z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"outline\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"#000\" stroke-width=\"16\"/><path class=\"accent\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"$[accent]\" stroke-width=\"12\"/><path class=\"secondary\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"$[secondary]\" stroke-width=\"6\"/>","jersey3":"<path class=\"primary\" d=\"M80 610s10-30 10-90l20-10s10 80 90 80 90-80 90-80l20 10c0 60 10 90 10 90H80z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"secondary\" d=\"M85 575v25h230v-25h-65s-20 15-50 15-50-15-50-15H85z\" fill=\"$[secondary]\"/><path class=\"outline\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"#000\" stroke-width=\"16\"/><path class=\"stripe-primary\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"$[primary]\" stroke-width=\"12\"/><path class=\"stripe-accent\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"$[accent]\" stroke-width=\"6\"/>","jersey4":"<path class=\"jersey\" d=\"M80 610s10-30 10-90l20-10s10 80 90 80 90-80 90-80l20 10c0 60 10 90 10 90H80z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"outline\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"#000\" stroke-width=\"16\"/><path class=\"stripe-accent\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90m-210-98s15 78 90 78 90-78 90-78\" fill=\"none\" stroke=\"$[accent]\" stroke-width=\"8\"/><path class=\"stripe-primary\" d=\"M86 522c0 60-10 88-10 88m238-88c0 60 10 88 10 88M114 510s11 76 86 76 86-76 86-76\" fill=\"none\" stroke=\"$[primary]\" stroke-width=\"4\"/><path class=\"stripe-secondary\" d=\"M94 518c0 60-10 92-10 92m222-92c0 60 10 92 10 92m-210-96s12 80 94 80 94-80 94-80\" fill=\"none\" stroke=\"$[secondary]\" stroke-width=\"4\"/>","jersey5":"<path class=\"jersey\" d=\"M80 610s10-30 10-90l20-10s10 80 90 80 90-80 90-80l20 10c0 60 10 90 10 90H80z\" fill=\"$[primary]\" stroke=\"#000\" stroke-width=\"6\"/><path class=\"pinstripes\" d=\"M95 610v-92.45M105 610v-97.95m10 2.95v95m10-60v62.05M135 565v45m10-35v35m10-30v30m10-25v25m10-20v20m10-20v20m10-20v20m110 0v-92.45M295 610v-97.95M285 515v95m-10-60v62.05M265 565v45m-10-35v35m-10-30v30m-10-25v25m-10-20v20m-10-20v20m-10-20v20\" fill=\"none\" stroke=\"$[accent]\" stroke-width=\"2\"/><path class=\"outline\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90M110 510s10 80 90 80 90-80 90-80\" fill=\"none\" stroke=\"#000\" stroke-width=\"16\"/><path class=\"stripe-accent\" d=\"M90 520c0 60-10 90-10 90m230-90c0 60 10 90 10 90m-210-98s15 78 90 78 90-78 90-78\" fill=\"none\" stroke=\"$[accent]\" stroke-width=\"8\"/><path class=\"stripe-primary\" d=\"M86 522c0 60-10 88-10 88m238-88c0 60 10 88 10 88M114 510s11 76 86 76 86-76 86-76\" fill=\"none\" stroke=\"$[primary]\" stroke-width=\"4\"/><path class=\"stripe-secondary\" d=\"M94 518c0 60-10 92-10 92m222-92c0 60 10 92 10 92m-210-96s12 80 94 80 94-80 94-80\" fill=\"none\" stroke=\"$[secondary]\" stroke-width=\"4\"/>"},"miscLine":{"chin1":"<path d=\"M180 465s10-5 20-5 20 5 20 5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","chin2":"<path d=\"M200 467.37V480\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","forehead1":"<path d=\"M200 270v-15l5-5-5 5-5-5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","forehead2":"<path d=\"M170 235s15 0 30 5c15-5 30-5 30-5m-75-15s35 0 45 5c10-5 45-5 45-5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","forehead3":"<path d=\"M170 235s15 0 30 5c15-5 30-5 30-5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","forehead4":"<path d=\"M155 220s35 0 45 5c10-5 45-5 45-5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","forehead5":"<g fill=\"none\" stroke=\"#000\" stroke-width=\"2\"><path d=\"M200 270v-15l5-5-5 5-5-5M170 235s15 0 30 5c15-5 30-5 30-5M155 220s35 0 45 5c10-5 45-5 45-5\"/></g>","none":""},"mouth":{"angry":"<style></style><path id=\"angry\" d=\"M40 9C50 9 65-1 70 4s10 15 5 20-25 0-35 0-30 5-35 0S5 9 10 4s20 5 30 5z\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"5\"/>","closed":"<style></style><path id=\"closed\" d=\"M170 440l10-10h40l10 10\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\"/>","mouth":"<style></style><path id=\"mouth\" d=\"M32 3c10 0 15 0 25 5 5 5 5 5 0 10s-15 0-25 0-20 5-25 0-5-5 0-10c10-5 15-5 25-5z\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"5\"/>","side":"<style></style><path id=\"side\" d=\"M1 22l60-10L51 2\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\"/>","smile-closed":"<style></style><path id=\"smile-closed\" d=\"M170 430s10 10 30 10 30-10 30-10\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\"/>","smile":"<style></style><path id=\"smile\" d=\"M170 430s10 20 30 20 30-20 30-20h-60z\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"5\"/>","smile2":"<style></style><path id=\"smile2\" d=\"M11 8S4.33 28 31 28 51 8 51 8 41 4.37 31 4.37 11 8 11 8zm50-5L51 8M1 3l10 5\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"5\"/>","smile3":"<style></style><path id=\"smile3\" d=\"M5 3s13.33 20 40 20S85 3 85 3 65 5.22 45 5.22 5 3 5 3z\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"5\"/>","straight":"<style></style><path id=\"straight\" d=\"M180 430h40\" fill=\"none\" stroke=\"#000\" stroke-width=\"5\"/>"},"nose":{"honker":"<path d=\"M50 50s-20 60 9 55c0 0 29 5 9-55\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose1":"<path d=\"M170 390s10-10 20 0 10 10 20 0 20 0 20 0\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose2":"<path class=\"nose\" d=\"M28 1l20 45s-5 20-25 20S3 46 3 46\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose3":"<path class=\"nose\" d=\"M175 380l25 20 25-20\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose4":"<path class=\"nose\" d=\"M11 1S6 31 21 41L1 51\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose5":"<path class=\"nose\" d=\"M175 370c-20 0-5 25 5 15 5-5 15 10 20 10s15-15 20-10c10 10 25-15 5-15\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose6":"<path class=\"nose\" d=\"M190 325s-5 20-5 45c-20-5-15 15-15 20 20 0 15 10 30 10s10-10 30-10c0-5 5-25-15-20 0-25-5-45-5-45\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose7":"<path class=\"nose\" d=\"M180 380s10-5 20-5 20 5 20 5m-20-5v-40\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","nose8":"<path class=\"nose\" d=\"M186.89 385.17s-4.71-14.11 14.11-14.11 14.11 14.11 14.11 14.11M201 371.06v-18.82\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>","pinocchio":"<path d=\"M40 40s50-30 0 30\" fill=\"$[skinColor]\" stroke=\"#000\" stroke-width=\"5\"/>"},"smileLine":{"line1":"<path class=\"shp0\" d=\"M9 2s-12.5 8.95-4 34\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line2":"<path class=\"shp0\" d=\"M17 2L2 12l5 15\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line3":"<path class=\"shp0\" d=\"M12.33 4.32s-10 3.29-10 13.18 10 13.18 10 13.18\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","line4":"<path class=\"shp0\" d=\"M0 20l6-10-6-9\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>","none":""}};

  const addWrapper = svgString => `<g>${svgString}</g>`;

  const addTransform = (element, newTransform) => {
    const oldTransform = element.getAttribute("transform");
    element.setAttribute(
      "transform",
      `${oldTransform ? `${oldTransform} ` : ""}${newTransform}`
    );
  };

  const rotateCentered = (element, angle) => {
    const bbox = element.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;

    addTransform(element, `rotate(${angle} ${cx} ${cy})`);
  };

  const scaleStrokeWidthAndChildren = (element, factor) => {
    const strokeWidth = element.getAttribute("stroke-width");
    if (strokeWidth) {
      element.setAttribute("stroke-width", strokeWidth / factor);
    }
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
      scaleStrokeWidthAndChildren(children[i], factor);
    }
  };

  // Scale relative to the center of bounding box of element e, like in Raphael.
  // Set x and y to 1 and this does nothing. Higher = bigger, lower = smaller.
  const scaleCentered = (element, x, y) => {
    const bbox = element.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const tx = (cx * (1 - x)) / x;
    const ty = (cy * (1 - y)) / y;

    addTransform(element, `scale(${x} ${y}) translate(${tx} ${ty})`);

    // Keep apparent stroke width constant, similar to how Raphael does it (I think)
    if (
      Math.abs(x) !== 1 ||
      Math.abs(y) !== 1 ||
      Math.abs(x) + Math.abs(y) !== 2
    ) {
      const factor = (Math.abs(x) + Math.abs(y)) / 2;
      scaleStrokeWidthAndChildren(element, factor);
    }
  };

  // Translate element such that its center is at (x, y). Specifying xAlign and yAlign can instead make (x, y) the left/right and top/bottom.
  const translate = (element, x, y, xAlign = "center", yAlign = "center") => {
    const bbox = element.getBBox();
    let cx;
    let cy;
    if (xAlign === "left") {
      cx = bbox.x;
    } else if (xAlign === "right") {
      cx = bbox.x + bbox.width;
    } else {
      cx = bbox.x + bbox.width / 2;
    }
    if (yAlign === "top") {
      cy = bbox.y;
    } else if (yAlign === "bottom") {
      cy = bbox.y + bbox.height;
    } else {
      cy = bbox.y + bbox.height / 2;
    }

    addTransform(element, `translate(${x - cx} ${y - cy})`);
  };

  // Defines the range of fat/skinny, relative to the original width of the default head.
  const fatScale = fatness => 0.8 + 0.2 * fatness;

  const drawFeature = (svg, face, info) => {
    const feature = face[info.name];
    let featureSVGString = svgs[info.name][feature.id];

    if (feature.shave) {
      featureSVGString = featureSVGString.replace("$[faceShave]", feature.shave);
    }

    if (feature.shave) {
      featureSVGString = featureSVGString.replace("$[headShave]", feature.shave);
    }

    featureSVGString = featureSVGString.replace("$[skinColor]", face.body.color);
    featureSVGString = featureSVGString.replace("$[hairColor]", face.hair.color);
    featureSVGString = featureSVGString.replace(
      /\$\[primary\]/g,
      face.teamColors[0]
    );
    featureSVGString = featureSVGString.replace(
      /\$\[secondary\]/g,
      face.teamColors[1]
    );
    featureSVGString = featureSVGString.replace(
      /\$\[accent\]/g,
      face.teamColors[2]
    );

    for (let i = 0; i < info.positions.length; i++) {
      svg.insertAdjacentHTML("beforeend", addWrapper(featureSVGString));

      if (info.positions[i] !== null) {
        // Special case, for the pinocchio nose it should not be centered but should stick out to the left or right
        let xAlign;
        if (feature.id === "nose4" || feature.id === "pinocchio") {
          xAlign = feature.flip ? "right" : "left";
        } else {
          xAlign = "center";
        }

        translate(
          svg.lastChild,
          info.positions[i][0],
          info.positions[i][1],
          xAlign
        );
      }

      if (feature.hasOwnProperty("angle")) {
        rotateCentered(svg.lastChild, (i === 0 ? 1 : -1) * feature.angle);
      }

      // Flip if feature.flip is specified or if this is the second position (for eyes and eyebrows). Scale if feature.size is specified.
      const scale = feature.hasOwnProperty("size") ? feature.size : 1;
      if (feature.flip || i === 1) {
        scaleCentered(svg.lastChild, -scale, scale);
      } else if (scale !== 1) {
        scaleCentered(svg.lastChild, scale, scale);
      }

      if (info.scaleFatness && info.positions[0] !== null) {
        // Scale individual feature relative to the edge of the head. If fatness is 1, then there are 47 pixels on each side. If fatness is 0, then there are 78 pixels on each side.
        const distance = (78 - 47) * (1 - face.fatness);
        translate(svg.lastChild, distance, 0, "left", "top");
      }
    }

    if (
      info.scaleFatness &&
      info.positions.length === 1 &&
      info.positions[0] === null
    ) {
      scaleCentered(svg.lastChild, fatScale(face.fatness), 1);
    }
  };

  const display = (container, face, overrides) => {
    override(face, overrides);

    if (typeof container === "string") {
      container = document.getElementById(container);
    }
    container.innerHTML = "";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("version", "1.2");
    svg.setAttribute("baseProfile", "tiny");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 400 600");
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet");

    // Needs to be in the DOM here so getBBox will work
    container.appendChild(svg);

    const featureInfos = [
      {
        name: "body",
        positions: [null]
      },
      {
        name: "jersey",
        positions: [null]
      },
      {
        name: "ear",
        positions: [[55, 325], [345, 325]],
        scaleFatness: true
      },
      {
        name: "head",
        positions: [null], // Meaning it just gets placed into the SVG with no translation
        scaleFatness: true
      },
      {
        name: "eyeLine",
        positions: [null]
      },
      {
        name: "smileLine",
        positions: [[150, 435], [250, 435]]
      },
      {
        name: "miscLine",
        positions: [null]
      },
      {
        name: "facialHair",
        positions: [null],
        scaleFatness: true
      },
      {
        name: "eye",
        positions: [[140, 310], [260, 310]]
      },
      {
        name: "eyebrow",
        positions: [[140, 265], [260, 265]]
      },
      {
        name: "mouth",
        positions: [[200, 440]]
      },
      {
        name: "nose",
        positions: [[200, 370]]
      },
      {
        name: "hair",
        positions: [null],
        scaleFatness: true
      },
      {
        name: "glasses",
        positions: [null],
        scaleFatness: true
      },
      {
        name: "accessories",
        positions: [null],
        scaleFatness: true
      }
    ];

    for (const info of featureInfos) {
      drawFeature(svg, face, info);
    }
  };

  // THIS IS A GENERATED FILE, DO NOT EDIT BY HAND!
  // See tools/process-svgs.js

  var svgsIndex = {"accessories":["headband-high","headband","none"],"body":["body"],"ear":["ear1","ear2","ear3"],"eye":["eye1","eye2","eye3","eye4","eye5","eye6","eye7","eye8","eye9"],"eyeLine":["line1","line2","line3","line4","line5","line6","none"],"eyebrow":["eyebrow1","eyebrow10","eyebrow11","eyebrow12","eyebrow2","eyebrow3","eyebrow4","eyebrow5","eyebrow6","eyebrow7","eyebrow8","eyebrow9"],"facialHair":["beard1","beard2","fullgoatee","goatee-thin","goatee1-stache","goatee1","goatee2","goatee3","goatee4","goatee5","goatee6","goatee7","goatee8","handlebar","honest-abe-stache","honest-abe","mustache-thin","mustache1","none","soul-stache","soul"],"glasses":["facemask","glasses1-primary","glasses1-secondary","glasses2-black","glasses2-primary","glasses2-secondary","none"],"hair":["afro","bald","cornrows","crop","high","juice","messy-short","middle-part","parted","short-fade","short","short2","spike","spike2"],"head":["head1","head2","head3","head4","head5","head6","head7","head8"],"jersey":["football","jersey","jersey2","jersey3","jersey4","jersey5"],"miscLine":["chin1","chin2","forehead1","forehead2","forehead3","forehead4","forehead5","none"],"mouth":["angry","closed","mouth","side","smile-closed","smile","smile2","smile3","straight"],"nose":["honker","nose1","nose2","nose3","nose4","nose5","nose6","nose7","nose8","pinocchio"],"smileLine":["line1","line2","line3","line4","none"]};

  const getID = type => {
    return svgsIndex[type][Math.floor(Math.random() * svgsIndex[type].length)];
  };

  const colors = [
    {
      skin: "#f2d6cb",
      hair: [
        "#272421",
        "#3D2314",
        "#5A3825",
        "#CC9966",
        "#2C1608",
        "#B55239",
        "#e9c67b",
        "#D7BF91"
      ]
    },
    {
      skin: "#ddb7a0",
      hair: [
        "#272421",
        "#3D2314",
        "#5A3825",
        "#CC9966",
        "#2C1608",
        "#B55239",
        "#e9c67b",
        "#D7BF91"
      ]
    },
    { skin: "#ce967d", hair: ["#272421", "#423125"] },
    { skin: "#bb876f", hair: ["#272421"] },
    { skin: "#aa816f", hair: ["#272421"] },
    { skin: "#a67358", hair: ["#272421"] },
    { skin: "#ad6453", hair: ["#272421"] },
    { skin: "#74453d", hair: ["#272421"] },
    { skin: "#5c3937", hair: ["#272421"] }
  ];

  const defaultTeamColors = ["#0d435e", "#f0494a", "#cccccc"];

  const roundTwoDecimals = x => Math.round(x * 100) / 100;

  const generate = overrides => {
    const eyeAngle = Math.round(Math.random() * 25 - 10);

    const palette = colors[Math.floor(Math.random() * colors.length)];
    const skinColor = palette.skin;
    const hairColor =
      palette.hair[Math.floor(Math.random() * palette.hair.length)];
    const isFlipped = Math.random() < 0.5;

    const face = {
      fatness: roundTwoDecimals(Math.random()),
      teamColors: defaultTeamColors,
      body: {
        id: getID("body"),
        color: skinColor
      },
      jersey: {
        id: getID("jersey")
      },
      ear: {
        id: getID("ear"),
        size: roundTwoDecimals(0.75 + Math.random() * 0.5)
      },
      head: {
        id: getID("head"),
        shave: `rgba(0,0,0,${
        Math.random() < 0.25 ? roundTwoDecimals(Math.random() / 5) : 0
      })`
      },
      eyeLine: {
        id: Math.random() < 0.75 ? getID("eyeLine") : "none"
      },
      smileLine: {
        id: Math.random() < 0.75 ? getID("smileLine") : "none",
        size: roundTwoDecimals(0.5 + Math.random())
      },
      miscLine: {
        id: Math.random() < 0.5 ? getID("miscLine") : "none"
      },
      facialHair: {
        id: Math.random() < 0.5 ? getID("facialHair") : "none"
      },
      eye: { id: getID("eye"), angle: eyeAngle },
      eyebrow: {
        id: getID("eyebrow"),
        angle: Math.round(Math.random() * 35 - 15)
      },
      hair: {
        id: getID("hair"),
        color: hairColor
      },
      mouth: {
        id: getID("mouth"),
        flip: isFlipped
      },
      nose: {
        id: getID("nose"),
        flip: isFlipped,
        size: roundTwoDecimals(0.5 + Math.random() * 0.75)
      },
      glasses: {
        id: Math.random() < 0.1 ? getID("glasses") : "none"
      },
      accessories: {
        id: Math.random() < 0.2 ? getID("accessories") : "none"
      }
    };

    override(face, overrides);

    return face;
  };

  exports.display = display;
  exports.generate = generate;
  exports.svgsIndex = svgsIndex;

  return exports;

}({}));
