import { IScenario } from "../components/Scenario/scenariosSlice";

// header 2
const h2 = (text: string) => `h2. ${text}`;

// bold
const b = (text: string) => `*${text}*`;

// italic
const i = (text: string) => `_${text}_`;

// add blue color
const blue = (text: string) => `{color:#0747a6}${text}{color}`;

export const scenarioToJiraSyntax = (scenario: IScenario): string => {
    const title = scenario.title ? h2(blue(scenario.title)) : '';

    const description = scenario.description ? i(scenario.description) : '';

    const given = `${blue(b('Given'))} ${i(scenario.given)}`;
    const givenAnds: string[] = scenario.givenAnds.map(and => `${blue(b('And'))} ${i(and)}`);

    const when = `${blue(b('When'))} ${i(scenario.when)}`;
    const whenAnds: string[] = scenario.whenAnds.map(and => `${blue(b('And'))} ${i(and)}`);

    const then = `${blue(b('Then'))} ${i(scenario.then)}`;
    const thenAnds: string[] = scenario.thenAnds.map(and => `${blue(b('And'))} ${i(and)}`);

    return [
        title,
        title ? ' ' : '',

        description,   
        description ? ' ' : '',
        
        given,
        ...givenAnds,
        when,
        ...whenAnds,
        then,
        ...thenAnds
    ]
        .filter(Boolean)
        .join('\n');
}
