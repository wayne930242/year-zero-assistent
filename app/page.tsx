import { GameCard } from "@/components/gameCard";
export default function Home() {
  return (
    <main>
      <div className="lg:container lg:mx-auto my-8 px-6">
        <h1 className="font-bold text-xl">歡迎來到元年引擎小助手！</h1>
        <div>
          這是洪偉製作的元年引擎小助手 APP，供社群玩家使用。
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-10">
          <GameCard
            name="陰屍路"
            description="一款基於陰屍路宇宙的角色扮演遊戲。"
            image="/images/cover/walking-dead.jpeg"
            url="/walking-dead"
          />
        </div>
      </div>
    </main>
  );
}
