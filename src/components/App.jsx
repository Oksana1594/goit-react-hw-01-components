import user from '../data/user.json';
import Profile from './Profile/Profile';
import data from '../data/data.json';
import Statistics from './Statistics/Statistic';
import friends from '../data/friends.json';
import FriendsList from './Friends/FriendsList'
import  transactions from "../data/transactions.json";
import TransactionHistory from "./Transactions/TransactionHistory"

export const App = () => {
  return (
    <>
     <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

 <FriendsList friends={friends} />

       <TransactionHistory items={transactions} />
    </>

  );
}
