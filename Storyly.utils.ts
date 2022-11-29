import {PixelRatio} from 'react-native';
export const storylyConfig = {
  key: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NfaWQiOjQzMjcsImFwcF9pZCI6MTE3MDQsImluc19pZCI6MTI1Mzl9.WS6gOSHpqq77lWrai2DljYakggrqNC2F0n1Ki0h5H4c',
};
const ICON_WIDTH = 100;
const ICON_HEIGHT = 60;
export const STORY_GROUP_TEXT_COLOUR_SEEN = '#4D4D4D';
export const STORY_GROUP_TEXT_COLOUR_NOT_SEEN = '#1A1A1A';
export const STORY_GROUP_TEXT_SIZE = PixelRatio.getPixelSizeForLayoutSize(12);
export const ICON_SIZE = {
  width: PixelRatio.getPixelSizeForLayoutSize(ICON_WIDTH),
  height: PixelRatio.getPixelSizeForLayoutSize(ICON_HEIGHT),
  radius: 8,
};
export const PADDING_BETWEEN_ITEMS = PixelRatio.getPixelSizeForLayoutSize(5);
export const EDGE_PADDING = PixelRatio.getPixelSizeForLayoutSize(16);
export const STORY_GROUP_ICON_BORDER_COLORS_NOT_SEEN = [
  '#E50D17',
  '#790C11',
  '#E50D17',
];
export const STORY_GROUP_ICON_BORDER_COLORS_SEEN = ['#C1C1C1', '#C1C1C1'];
