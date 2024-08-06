import { Timeline } from '../ui/timeline';

const TIMELINE_ITEMS = [
  {
    title: 'First item',
    description: 'This is the first item of the timeline',
  },
  {
    title: 'Second item',
    description: 'This is the second item of the timeline',
  },
  {
    title: 'Third item',
    description: 'This is the third item of the timeline',
  },
];

export const TimelineExample = () => {
  return <Timeline items={TIMELINE_ITEMS} />;
};
