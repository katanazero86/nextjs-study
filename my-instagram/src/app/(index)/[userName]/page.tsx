import Tabs from '@/components/Tabs/Tabs';
import TabItem from '@/components/Tabs/TabItem/TabItem';
import UserInfo from '@/components/UserInfo/UserInfo';

const TAB_ITEMS = ['POSTS', 'SAVED', 'LIKED'];
export default function UserPage() {
  return (
    <div>
      <div className="divider"></div>
      <UserInfo />
      <div className="divider"></div>
      <Tabs>
        {TAB_ITEMS.map((item) => (
          <TabItem wFull key={item}>
            {item}
          </TabItem>
        ))}
      </Tabs>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="card bg-base-100 shadow-xl cursor-pointer">
          <figure className="rounded">
            <img src="/imgs/test-shoes.jpg" alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 shadow-xl cursor-pointer">
          <figure className="rounded">
            <img src="/imgs/test-shoes.jpg" alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
}
