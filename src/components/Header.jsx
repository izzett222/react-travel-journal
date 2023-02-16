import world from "../assets/world.svg"
export default function Header() {
    return (
        <header className="bg-[#F55A5A] gap-2 h-[55px] flex items-center justify-center">
            <img src={world} alt="" />
            <p className="text-white text-sm">my travel journal.</p>
        </header>
    )
}