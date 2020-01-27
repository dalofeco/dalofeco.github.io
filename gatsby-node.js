/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var AllProjects = require('./src/data/projects.json');
var AllWork = require('./src/data/work.json');

exports.createPages = async ({actions: { createPage } } ) => {

    AllProjects.forEach(project => {
        createPage({
            path: `/code/${project.id}`,
            component: require.resolve("./src/templates/project.tsx"),
            context: project,
        });
    });

    AllWork.forEach(work => {
        createPage({
            path: `/work/${work.id}`,
            component: require.resolve("./src/templates/work.tsx"),
            context: work,
        });
    });

}