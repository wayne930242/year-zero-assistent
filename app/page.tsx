import { GameCard } from "@/components/gameCard";
export default function Home() {
  return (
    <main>
      <div className="lg:container lg:mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-10 px-6">
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
