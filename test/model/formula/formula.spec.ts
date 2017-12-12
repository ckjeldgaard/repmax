import {EpleyFormula} from '../../../src/model/formula/epley-formula';
import {McGlothinFormula} from '../../../src/model/formula/mcglothin';

describe('Formula', () => {

    it('Epley formula', () => {
        expect(new EpleyFormula().repmax(80, 5)).toEqual([93, 87, 84, 82, 80, 77, 75, 73, 71, 70]);
    });

    it('should provide a list of 10 items if no size is specified.', () => {
        expect(new EpleyFormula().repmax(80, 5)).toHaveLength(10);
    });

    it('should provide a list of 10 items if an invalid size is specified.', () => {
        expect(new EpleyFormula().repmax(80, 5, 0)).toHaveLength(10);
    });

    it('should provide a list of 1 item', () => {
        expect(new EpleyFormula().repmax(80, 5, 1)).toHaveLength(1);
    });

    it('McGlothinFormula formula', () => {
        expect(new McGlothinFormula().repmax(80, 5)).toEqual([90, 87, 84, 82, 80, 77, 75, 72, 70, 67]);
    });
});