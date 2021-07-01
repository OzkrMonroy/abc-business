import { UserItemContainer, UserItemOptions, UserName, UserPhoto } from './userDrawerItemStyles';

const user = {
  name: 'Oscar Monroy',
  photo: 'https://firebasestorage.googleapis.com/v0/b/producthunt-647c4.appspot.com/o/profilePhotos%2F2-min.jpeg?alt=media&token=3798b4b6-7778-4917-9f15-4149f44f3fdc'
}

export const UserDrawerItem = () => {
  return (
    <UserItemContainer>
      <UserPhoto src={user.photo} alt={user.name} />
      <UserName>{user.name}</UserName>
      <UserItemOptions src='/assets/expand_more.svg' alt='User options' />
    </UserItemContainer>
  )
}
