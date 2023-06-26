import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics.jsx';
import { Friends } from './FriendsList/friends.jsx';

import friends from 'data/friends.json';
import statisticsData from 'data/data.json';
import user from 'data/user.json';

export const App = () => {
  return <>
   <Profile
    location={user.location}
    tag={user.tag}
    username={user.username}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics title="upload stats" stats={statisticsData} />
    <Friends friends={friends} />
  </>
};
