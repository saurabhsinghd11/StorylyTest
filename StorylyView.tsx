import React from 'react';
import {View} from 'react-native';

import {Storyly} from 'storyly-react-native';
import {
  PADDING_BETWEEN_ITEMS,
  EDGE_PADDING,
  ICON_SIZE,
  STORY_GROUP_ICON_BORDER_COLORS_NOT_SEEN,
  STORY_GROUP_ICON_BORDER_COLORS_SEEN,
  STORY_GROUP_TEXT_COLOUR_NOT_SEEN,
  STORY_GROUP_TEXT_COLOUR_SEEN,
  STORY_GROUP_TEXT_SIZE,
  storylyConfig,
} from './Storyly.utils';
import {styles} from './StorylyView.styles';

const StorylyView = props => {
  const ref = React.useRef<Storyly>();

  return (
    <View>
      <Storyly
        ref={ref as any}
        style={props.visible ? styles.storylyStyle : {}}
        storylyId={storylyConfig.key}
        storyGroupTextColorSeen={STORY_GROUP_TEXT_COLOUR_SEEN}
        storyGroupTextColorNotSeen={STORY_GROUP_TEXT_COLOUR_NOT_SEEN}
        storyGroupTextSize={STORY_GROUP_TEXT_SIZE}
        storyGroupSize={'custom'}
        storyGroupIconWidth={props.visible ? ICON_SIZE.width : 0}
        storyGroupIconHeight={props.visible ? ICON_SIZE.height : 0}
        storylySegments={[]}
        storyGroupIconCornerRadius={ICON_SIZE.radius}
        storyGroupListEdgePadding={EDGE_PADDING}
        storyGroupListPaddingBetweenItems={PADDING_BETWEEN_ITEMS}
        storyHeaderTextIsVisible={true}
        storyHeaderIconIsVisible={true}
        storyGroupIconBorderColorSeen={STORY_GROUP_ICON_BORDER_COLORS_SEEN}
        storyGroupIconBorderColorNotSeen={
          STORY_GROUP_ICON_BORDER_COLORS_NOT_SEEN
        }
      />
    </View>
  );
};

export default StorylyView;
