import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/Friends';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <div className="sideWrapper">
        <aside>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />

          <FriendList friends={friends} />
        </aside>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
