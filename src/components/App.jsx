import { Profile } from './Profile/profile';

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
  </>
};
