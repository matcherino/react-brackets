import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2;
var Bracket = styled.div(function (props) {
  return "\n  display: flex;\n  flex-direction: row;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    flex-direction: column;\n  }\n  ";
});
var Round = styled.div(function (props) {
  return "\n  flex: 0;\n  // min-width:300px;\n  display:flex;\n  flex-direction:column;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    min-width:0;\n  }\n  ";
});
var RoundTitle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: #8f8f8f;\n  font-weight: 400;\n  text-align: center;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n"])));
var SeedsList = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: 100%;\n  list-style: none;\n"])));

function useMedia(breakPoint) {
  var _useState = useState(typeof window !== 'undefined' ? window.innerWidth <= breakPoint : false),
      isSmaller = _useState[0],
      setIsSmaller = _useState[1];

  useEffect(function () {
    function screenResized() {
      if (isSmaller && window.innerWidth > breakPoint) {
        setIsSmaller(false);
      } else if (!isSmaller && window.innerWidth <= breakPoint) {
        setIsSmaller(true);
      }
    }

    if (typeof window !== 'undefined') window.addEventListener('resize', screenResized);
    return function () {
      if (typeof window !== 'undefined') window.removeEventListener('resize', screenResized);
    };
  }, [isSmaller]);
  return isSmaller;
}

var _templateObject$1, _templateObject2$1;
var SeedItem = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  color: #fff;\n  width: 100%;\n  background-color: #1a1d2e;\n  padding: 0;\n  border-radius: 0.2em;\n  box-shadow: 0 2px 4px -2px #111630;\n  text-align: center;\n  position: relative;\n  height: 32px;\n"])));
var SeedTeam = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  padding: 0.3rem 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 0.2em;\n  align-items: center;\n"])));
var SeedTime = styled.div(function (props) {
  return "\nmargin-top: 2px;\nfont-size: 12px;\ncolor: #8f8f8f;\nheight: 0;\n@media (max-width: " + props.mobileBreakpoint + "px) {\n  height:auto;\n}\n";
});
var SingleLineSeed = styled.div(function (props) {
  return "\npadding: 2em 1.5em;\nmin-width: 244px;\nwidth:100%;\nposition: relative;\ndisplay: flex;\nalign-items: center;\nflex: 0 1 auto;\nflex-direction: column;\njustify-content: center;\nfont-size: 14px;\n@media (max-width: " + props.mobileBreakpoint + "px) {\n  width:100%;\n}\n@media (min-width: " + ((props.mobileBreakpoint || 0) + 1) + "px) {\n  &::after {\n      content: \"\";\n      position: absolute;\n      height: 50%;\n      width: 3em;\n    [dir=\"rtl\"] & {\n      left: -1.5em;\n    }\n    [dir=\"ltr\"] & {\n      right: -1.5em;\n    }\n  }\n  &:nth-child(even)::after {\n    border-bottom: 1px solid #707070;\n    top: 16.5px;\n  }\n  &:nth-child(odd)::after {\n    border-top: 1px solid #707070;\n    top: calc(50% - -15px);\n  }\n}\n";
});
var Seed = styled.div(function (props) {
  return "\n  padding: 2em 1.5em;\n  min-width: 244px;\n  width:100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    width:100%;\n  }\n  @media (min-width: " + ((props.mobileBreakpoint || 0) + 1) + "px) {\n    &::after {\n        content: \"\";\n        position: absolute;\n        height: calc(50% - -15px);\n        width: 1.5em;\n      [dir=\"rtl\"] & {\n        left: 0px;\n      }\n      [dir=\"ltr\"] & {\n        right: 0px;\n      }\n    }\n\n    &:nth-child(even)::before{\n      content:'';\n      border-top: 1px solid #707070;\n      position:absolute;\n      top: 15px;\n      width:1.5em;\n      [dir=\"rtl\"] & {\n        left:-1.5em;\n        }\n      [dir=\"ltr\"] & {\n        right:-1.5em;\n      }\n    }\n\n    &:nth-child(even)::after {\n      border-bottom: 1px solid #707070;\n      top: 4px;\n     [dir=\"rtl\"] & {\n        border-left: 1px solid #707070;\n        }\n      [dir=\"ltr\"] & {\n        border-right: 1px solid #707070;\n      }\n    }\n    &:nth-child(odd):not(:last-child)::after {\n      border-top: 1px solid #707070;\n      top: calc(50% - -14px);\n      [dir=\"rtl\"] & {\n        border-left: 1px solid #707070;\n        }\n      [dir=\"ltr\"] & {\n        border-right: 1px solid #707070;\n      }\n    }\n}\n";
});

var renderTitle = function renderTitle(title) {
  return React.createElement(RoundTitle, null, title);
};
var renderSeed = function renderSeed(_ref) {
  var _seed$teams, _seed$teams$, _seed$teams2, _seed$teams2$;

  var seed = _ref.seed,
      breakpoint = _ref.breakpoint;
  return React.createElement(Seed, {
    mobileBreakpoint: breakpoint
  }, React.createElement(SeedItem, null, React.createElement("div", null, React.createElement(SeedTeam, null, ((_seed$teams = seed.teams) === null || _seed$teams === void 0 ? void 0 : (_seed$teams$ = _seed$teams[0]) === null || _seed$teams$ === void 0 ? void 0 : _seed$teams$.name) || '-----------'), React.createElement(SeedTeam, null, ((_seed$teams2 = seed.teams) === null || _seed$teams2 === void 0 ? void 0 : (_seed$teams2$ = _seed$teams2[1]) === null || _seed$teams2$ === void 0 ? void 0 : _seed$teams2$.name) || '-----------'))), React.createElement(SeedTime, {
    mobileBreakpoint: breakpoint
  }, seed.date));
};

var _excluded = ["ref"];

var SingleElimination = function SingleElimination(_ref) {
  var rounds = _ref.rounds,
      _ref$rtl = _ref.rtl,
      rtl = _ref$rtl === void 0 ? false : _ref$rtl,
      bracketClassName = _ref.bracketClassName,
      _ref$swipeableProps = _ref.swipeableProps,
      swipeableProps = _ref$swipeableProps === void 0 ? {} : _ref$swipeableProps,
      _ref$mobileBreakpoint = _ref.mobileBreakpoint,
      mobileBreakpoint = _ref$mobileBreakpoint === void 0 ? 992 : _ref$mobileBreakpoint,
      _ref$renderSeedCompon = _ref.renderSeedComponent,
      renderSeedComponent = _ref$renderSeedCompon === void 0 ? renderSeed : _ref$renderSeedCompon,
      _ref$roundTitleCompon = _ref.roundTitleComponent,
      roundTitleComponent = _ref$roundTitleCompon === void 0 ? renderTitle : _ref$roundTitleCompon,
      consolationMatch = _ref.consolationMatch,
      bracket = _ref.bracket;
  var isResponsive = useMedia(mobileBreakpoint);
  var data = rounds.map(function (round, roundIdx) {
    var _bracket$entrants;

    var isHideByes = bracket.status !== 'preparing' || bracket.status === 'preparing' && (bracket === null || bracket === void 0 ? void 0 : bracket.config.bracketSize) === 0;
    var byeMatches = round.seeds.filter(function (s) {
      if (round.seeds[0].data.bracketNum === 1) {
        return s.formattedData.entrantA.name === 'BYE' || s.formattedData.entrantB.name === 'BYE';
      }

      return s.formattedData.entrantA.name === 'BYE' && s.formattedData.entrantB.name === 'BYE';
    });
    if ((bracket === null || bracket === void 0 ? void 0 : (_bracket$entrants = bracket.entrants) === null || _bracket$entrants === void 0 ? void 0 : _bracket$entrants.length) > 4 && isHideByes && byeMatches.length === round.seeds.length) return null;
    return React.createElement(Fragment, {
      key: roundIdx
    }, React.createElement(Round, {
      className: "round-container " + (round.isFirstRound ? 'first-round' : ''),
      mobileBreakpoint: mobileBreakpoint
    }, round.title && roundTitleComponent(round.title, roundIdx), React.createElement(SeedsList, {
      className: 'seed-list'
    }, round.seeds.map(function (seed, idx) {
      return React.createElement(Fragment, {
        key: idx
      }, renderSeedComponent({
        seed: seed,
        breakpoint: mobileBreakpoint,
        roundIndex: roundIdx,
        seedIndex: idx,
        isConsolationMatch: false
      }));
    }))), consolationMatch && roundIdx + 1 === rounds.length ? React.createElement(Round, {
      className: 'round-container',
      mobileBreakpoint: mobileBreakpoint
    }, roundTitleComponent('     ', roundIdx), React.createElement(SeedsList, {
      className: 'seed-list consolation-match'
    }, React.createElement(Fragment, null, renderSeedComponent({
      seed: consolationMatch.seeds[0],
      breakpoint: mobileBreakpoint,
      roundIndex: roundIdx,
      seedIndex: 0,
      isConsolationMatch: true
    })))) : null);
  });

  if (isResponsive) {
    var rest = _objectWithoutPropertiesLoose(swipeableProps, _excluded);

    return React.createElement(Bracket, {
      className: bracketClassName,
      dir: rtl ? 'rtl' : 'ltr',
      mobileBreakpoint: mobileBreakpoint
    }, React.createElement(SwipeableViews, Object.assign({
      style: {
        minHeight: '500px'
      },
      axis: rtl ? 'x-reverse' : 'x'
    }, rest), data));
  }

  return React.createElement(Bracket, {
    className: bracketClassName,
    dir: rtl ? 'rtl' : 'ltr',
    mobileBreakpoint: mobileBreakpoint
  }, data);
};

export { SingleElimination as Bracket, Seed, SeedItem, SeedTeam, SeedTime, SingleLineSeed };
//# sourceMappingURL=index.modern.js.map
