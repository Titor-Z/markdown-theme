import gulp from "gulp";
import postcss from "gulp-postcss";
import rename from "gulp-rename";
import postOptions from "./postcss.config.js";
import { execSync, exec } from "child_process";
const { src, dest, watch, parallel, series } = gulp;

function sass(cb) {
  execSync("yarn build:sass");
  cb();
}

function server(cb) {
  exec("md start");
  cb();
}

function css(cb) {
  src("./dist/main.css", { allowEmpty: true })
    .pipe(postcss(postOptions.plugins))
    .pipe(
      rename({
        basename: "dist",
      })
    )
    .pipe(dest("dist"));
  cb();
}

watch("styles/*", series(sass, css));

export default parallel(sass, css, server);
