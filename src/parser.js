import jsTokens from 'js-tokens'

const types_of_tokens = ['static', 'number', 'semicolon',
                         'function_name', 'comparison', 'arithmetic', 'string', 
                         'bools', 'objs']

function getFileContents(file) {
    const fs = require('fs')

    return fs.readFileSync(file, 'utf8')
}

function main() {
    let text = getFileContents('./course_project_idea.txt')
    const array = jsTokens(text)
}

main()