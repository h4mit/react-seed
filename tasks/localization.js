const gulp = require('gulp');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const merge = require('gulp-merge-json');
const paths = {
    local: 'src/**/i18n/'
};
const localizationDist = 'public/i18n';
const langList = ['fa', 'en'];

gulp.task('localization', function () {
    var command = gulp;
    langList.forEach((lang) => {
        var categoryList = [];
        command.src(paths.local + lang + '.json')
            .pipe(merge(
                {
                    fileName: lang + '.json',
                    edit: (parsedJson, file) => {
                if (parsedJson) {
                    for (var i in parsedJson) {
                        if (categoryList.indexOf(i) != -1) {
                            console.log('Duplicate localization category: ' + i);
                            return {};
                        }
                        categoryList.push(i);
                    }
                }
                return parsedJson;
            },
            }))
            .pipe(gulp.dest(localizationDist));
    });
    return command;
});
// Rerun the task when a file changes
gulp.task('localiz1', function () {
    gulp.watch(paths.local + '*', ['localization']);
});
gulp.task('localiz2', function () {
    return watch(paths.local + '*.*', batch(function (events, done) {
        gulp.start(['localization','localiz1'], done);
    }));
});