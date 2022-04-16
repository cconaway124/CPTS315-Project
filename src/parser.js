
function getFileContents(file) {
    const fs = require('fs')

    return new String(fs.readFileSync(file, 'utf8'))
}

function main() {
    text = getFileContents('./course_project_idea.txt')
    for(let i = 0; i < text.length; i++) {
        console.log(text[i])
    }
}

main()