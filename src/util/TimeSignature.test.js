import {CUT_TIME, FOUR_FOUR, THREE_FOUR} from './TimeSignature';

it('has expected beats per division for 4/4', () => {
    let ts = FOUR_FOUR
    expect(ts.getBeatsPerDivision(4)).toBe(1)

    expect(ts.getBeatsPerDivision(8)).toBe(.5)

})

it('has expected beats per division for cut-time', () => {
    let ts = CUT_TIME
    expect(ts.getBeatsPerDivision(4)).toBe(.5)

    expect(ts.getBeatsPerDivision(8)).toBe(.25)

})

it('has expected beats per division for 3/4', () => {
    let ts = THREE_FOUR
    expect(ts.getBeatsPerDivision(3)).toBe(1)
    expect(ts.getBeatsPerDivision(6)).toBe(.5)

    expect(ts.getBeatsPerDivision(12)).toBe(.25)

})
