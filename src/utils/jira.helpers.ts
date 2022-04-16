import { IScenario } from "../components/Scenario/scenariosSlice";

// bold
const b = (text: string) => `*${text}*`;

// italic
const i = (text: string) => `_${text}_`;

export const scenarioToJiraSyntax = (scenario: IScenario): string => {
    const given = `${b('Given')} ${i(scenario.given)}`;
    const givenAnds: string[] = scenario.givenAnds.map(and => `${b('And')} ${i(and)}`);

    const when = `${b('When')} ${i(scenario.when)}`;
    const whenAnds: string[] = scenario.whenAnds.map(and => `${b('And')} ${i(and)}`);

    const then = `${b('Then')} ${i(scenario.then)}`;
    const thenAnds: string[] = scenario.thenAnds.map(and => `${b('And')} ${i(and)}`);

    return [
        given,
        ...givenAnds,
        when,
        ...whenAnds,
        then,
        ...thenAnds
    ].join('\n');
}