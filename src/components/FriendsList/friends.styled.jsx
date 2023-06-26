import styled from '@emotion/styled';

const FriendsSec = styled.section`

`

const FriendsUl = styled.ul`
list-style: none;
`

const FriendsLi = styled.li`
display: flex;
align-items: center;
width: 150px;
margin: 0 auto 5px;
padding: 10px;
border: 0.5px solid #F4F4FD;


& .false {
    margin-right:10px;
    display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}

& .true{
    margin-right:10px;
    display: block;
    width: 10px;
     height: 10px;
    border-radius: 50%;
    background-color: green;
}

& img {
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid tomato;
}

& .name {
    font-size: 18px;
    font-weight: bold;
}`

export{FriendsLi,FriendsUl,FriendsSec}