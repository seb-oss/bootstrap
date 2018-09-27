'use strict';

const gulp = require('gulp');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');
const jsoncombine = require("gulp-jsoncombine");
const rename = require("gulp-rename");
const jsonFormat = require('gulp-json-format');
const output = "./dist/bootstrap/sdl";
const libraryName = "sdl-bootstrap";



marked.setOptions({
    pedantic: true,
    smartypants: true
});

gulp.task('build-dsl', function() {
    gulp.src(output + '/components/**/*.md')
        // parse markdown file and return json
        .pipe(markdownToJSON(marked, (data, file) => {
            file.path = file.path.replace(/\\/g, '/'); // convert windows file path to normal path
            const filePathArray = file.path.split('/'); // get file path as an array
            console.log(file.path);
            delete data.body; // remove body
            delete data.updatedAt; // remove updated
            const relativePath = file.path.split('/sdl/')[1];
            data.filename = filePathArray[filePathArray.length-1]; // set file name
            data.filepath = relativePath; // set file path
            data.shortpath = relativePath.slice(0,-3); // set short file path
            data.longpath = relativePath;  // set long file path
            data.type = "file"; // set file type
            data.guid = libraryName + '-' + data.componentid + '-' + data.variantid; // set guid
            data.private = false; // set private property
            return data;
        }))
        // rename to .json
        .pipe(rename(function (path) {
            path.extname = ".json"
        }))
        // combine files into single config file
        .pipe(jsoncombine((libraryName + "-config.json"), (data, meta) => {
            const componentGroups = {}; // create placeholder for configuration

            // each file has it's own key in the data, loop through them using map
            Object.keys(data)
                .map((key, index) => {

                    const componentGroup = key.replace(/\\/g, '/').split('/')[0]; // get component group name

                    // if component group doesn't exist...
                    if(!componentGroups[componentGroup]) {

                        // ...create component group and add component (object)
                        componentGroups[componentGroup] = {
                            "title": componentGroup.charAt(0).toUpperCase() + componentGroup.slice(1), // capitalize
                            "shortpath": componentGroup,
                            "longpath": "src/components/" + componentGroup,
                            "items": [data[key]]
                        }
                    } else {
                        // push component (object) to existing group
                        componentGroups[componentGroup].items.push(data[key]);
                    }
                });
            const items = Object.keys(componentGroups)
                .map((key) => componentGroups[key]); // return items as an array
            const outputTemplate = {
                "structure": [
                    {
                        "title": "Components",
                        "shortpath": "components",
                        "longpath": "src/components",
                        "items": items,
                        "filecount": 0,
                        "directorycount": items.length,
                        "type": "directory"
                    }
                ]
            };

            return Buffer.from(JSON.stringify(outputTemplate));
        }))
        .pipe(jsonFormat(4))
        .pipe(gulp.dest(output));
});

gulp.task('default', function() {
});