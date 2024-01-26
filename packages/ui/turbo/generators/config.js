"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generator(plop) {
    plop.setGenerator("react-component", {
        description: "Adds a new react component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the component?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/{{kebabCase name}}.tsx",
                templateFile: "templates/component.hbs",
            },
            {
                type: "append",
                path: "index.tsx",
                pattern: /"exports": {(?<insertion>)/g,
                template: '"./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
            },
        ],
    });
}
exports.default = generator;
//# sourceMappingURL=config.js.map