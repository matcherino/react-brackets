import React, { Fragment, ReactNode } from 'react';
import { Round, Bracket, SeedsList, RoundProps } from '../components/round';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';
import useMedia from '../hooks/useMedia';
import { renderSeed, renderTitle } from '../utils/renders';

export interface RenderSeedProps {
  seed: any;
  breakpoint: number;
  roundIndex: number;
  seedIndex: number;
  isConsolationMatch: boolean;
}

export interface SingleEliminationProps {
  // If true, the component direction will be set to RTL
  rtl?: boolean;
  // Array of rounds matching RoundProps shape,
  rounds: RoundProps[];
  // Single round className
  roundClassName?: string;
  /** @default 992, if you don't want a mobile breakpoint, pass 0 */
  mobileBreakpoint?: number;
  // The whole bracket className
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

const SingleElimination = ({
  rounds,
  rtl = false,
  bracketClassName,
  swipeableProps = {},
  mobileBreakpoint = 992,
  renderSeedComponent = renderSeed,
  roundTitleComponent = renderTitle,
  consolationMatch,
  bracket,
}: SingleEliminationProps) => {
  // Checking responsive size
  const isResponsive = useMedia(mobileBreakpoint);
  const data = rounds.map((round, roundIdx) => {
    const isHideByes =
      bracket.status !== 'preparing' || (bracket.status === 'preparing' && bracket?.config.bracketSize === 0);
    const byeMatches = round.seeds.filter((s) => {
      if (round.seeds[0].data.bracketNum === 1) {
        return s.formattedData.entrantA.name === 'BYE' || s.formattedData.entrantB.name === 'BYE';
      }

      return s.formattedData.entrantA.name === 'BYE' && s.formattedData.entrantB.name === 'BYE';
    });

    if (bracket?.entrants?.length > 4 && isHideByes && byeMatches.length === round.seeds.length) return null;

    return (
      <Fragment key={roundIdx}>
        <Round
          className={`round-container ${round.isFirstRound ? 'first-round' : ''}`}
          mobileBreakpoint={mobileBreakpoint}
        >
          {round.title && roundTitleComponent(round.title, roundIdx)}
          <SeedsList className='seed-list'>
            {round.seeds.map((seed, idx) => (
              <Fragment key={idx}>
                {renderSeedComponent({
                  seed,
                  breakpoint: mobileBreakpoint,
                  roundIndex: roundIdx,
                  seedIndex: idx,
                  isConsolationMatch: false,
                })}
              </Fragment>
            ))}
          </SeedsList>
        </Round>

        {consolationMatch && roundIdx + 1 === rounds.length ? (
          <Round className='round-container' mobileBreakpoint={mobileBreakpoint}>
            {roundTitleComponent('     ', roundIdx)}
            <SeedsList className='seed-list consolation-match'>
              <Fragment>
                {renderSeedComponent({
                  seed: consolationMatch.seeds[0],
                  breakpoint: mobileBreakpoint,
                  roundIndex: roundIdx,
                  seedIndex: 0,
                  isConsolationMatch: true,
                })}
              </Fragment>
            </SeedsList>
          </Round>
        ) : null}
      </Fragment>
    );
  });

  if (isResponsive) {
    // Since SwipeableViewsProps have an issue that it uses ref inside of it, We need to remove ref from the object
    const { ref, ...rest } = swipeableProps;
    return (
      <Bracket className={bracketClassName} dir={rtl ? 'rtl' : 'ltr'} mobileBreakpoint={mobileBreakpoint}>
        <SwipeableViews style={{ minHeight: '500px' }} axis={rtl ? 'x-reverse' : 'x'} {...rest}>
          {data}
        </SwipeableViews>
      </Bracket>
    );
  }
  return (
    <Bracket className={bracketClassName} dir={rtl ? 'rtl' : 'ltr'} mobileBreakpoint={mobileBreakpoint}>
      {data}
    </Bracket>
  );
};

export default SingleElimination;
