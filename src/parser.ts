import { Console } from 'console'
import jsTokens from 'js-tokens'

let token_dict = {"WhiteSpace" : 0, "StringLiteral" : 1, "NoSubstitutionTemplate" : 2, "TemplateHead" : 3,
                  "TemplateMiddle" : 4, "TemplateTail" : 5, "RegularExpressionLiteral" : 6,
                  "MultiLineComment" : 7, "SingleLineComment" : 8, "IdentifierName" : 9, "NumericLiteral" : 10,
                  "Punctuator" : 11, "LineTerminatorSequence" : 12, "Invalid" : 13}

const types_of_tokens = ['static', 'number', 'semicolon',
                         'function_name', 'comparison', 'arithmetic', 'string', 
                         'bools', 'objs']

function getFileContents(file:string) {
    const fs = require('fs')

    return fs.readFileSync(file, 'utf8')
}

function main() {
    let text = getFileContents('./course_project_idea.txt')
    const array = jsTokens(text)
    for (let value of array) {
        let type = token_dict[value.type]
        switch (type) {
            case 0:
                break
            case 1:
                break
            case 2:
                break
            case 3:
                break
            case 4:
                break
            case 5:
                break
            case 6: 
                break
            case 7:
                break
            case 8:
                break
            case 9:
                break
            case 10:
                break
            case 11:
                break
            case 12:
                break
            case 13:
                break
            default:
                console.log("Not gud bruh")
        }
    }
}

main()