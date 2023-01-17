import user from './data/user.json';
import { Profile } from './components/Profile/Profile';
import data from './data/data.json';
import StatisticSection from './components/Statistics/StatisticSection';
import friends from './data/friends.json';
import FriendsList from './components/Friends/FriendsList'
import  transactions from "./data/transactions.json";
import TransactionHistory from "./components/Transactions/TransactionHistory"

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
      <StatisticSection title="Upload stats" stats={data} />

 <FriendsList friends={friends} />

       <TransactionHistory items={transactions} />
    </>

  );
}
