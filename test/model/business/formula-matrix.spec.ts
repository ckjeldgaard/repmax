import {FormulaMatrix} from '../../../src/model/business/formula-matrix';
import {Formula} from '../../../src/model/formula/formula';
import {EpleyFormula} from '../../../src/model/formula/epley-formula';
import {McGlothinFormula} from '../../../src/model/formula/mcglothin-formula';

describe('Formula matrix', () => {

    it('should transform formula results to rows of results', () => {

        let formulas: Formula[] = [];
        formulas.push(new EpleyFormula());
        formulas.push(new McGlothinFormula());

        const matrix: number[][] = new FormulaMatrix(100, 10, formulas).build();

        expect(matrix).toHaveLength(10);
        expect(matrix[0]).toHaveLength(2);
    });
});
