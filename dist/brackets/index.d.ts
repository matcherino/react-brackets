import { ReactNode } from 'react';
import { RoundProps } from '../components/round';
import { SwipeableViewsProps } from 'react-swipeable-views';
export interface RenderSeedProps {
    seed: any;
    breakpoint: number;
    roundIndex: number;
    seedIndex: number;
    isConsolationMatch: boolean;
}
export interface SingleEliminationProps {
    rtl?: boolean;
    rounds: RoundProps[];
    roundClassName?: string;
    /** @default 992, if you don't want a mobile breakpoint, pass 0 */
    mobileBreakpoint?: number;
    bracketClassName?: string;
    /** {@link https://github.com/oliviertassinari/react-swipeable-views} to read about it's props  */
    swipeableProps?: SwipeableViewsProps;
    /**
     * @param {ReactNode} title string or component passed with each round
     * @param {number} round the current round index
     */
    roundTitleComponent?: (title: ReactNode, roundIdx: number) => any;
    /**
     * @param {object} seed the current seed
     * @param {number} breakpoint the breakpoint used to determine responsive size
     * @param {number} roundIdx the current round index
     */
    renderSeedComponent?: ({ seed, breakpoint, roundIndex, seedIndex }: RenderSeedProps) => any;
    consolationMatch?: any;
    bracket: any;
}
declare const SingleElimination: ({ rounds, rtl, bracketClassName, swipeableProps, mobileBreakpoint, renderSeedComponent, roundTitleComponent, consolationMatch, bracket, }: SingleEliminationProps) => JSX.Element;
export default SingleElimination;
