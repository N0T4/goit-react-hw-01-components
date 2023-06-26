import PropTypes from 'prop-types';
import {FriendsLi,FriendsUl,FriendsSec} from './friends.styled'


export const Friends = ({friends}) => {
    return <FriendsSec>
        <FriendsUl>
            {friends.map(friend => {
                return (
                    <FriendsLi key={friend.id}>
                        <span className={friend.isOnline.toString()}></span>
                        <img src={friend.avatar} alt="User Avatar" width='45px' className='avatar' />
                        <p className='name'>{friend.name}</p>
                    </FriendsLi>
                )
            })}
        </FriendsUl>
    </FriendsSec>
   
}


Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired 
}
