import AboutSection from "../components/Home/AboutSection";
import ActionSection from "../components/Home/ActionSection";
import MainDealsAndDrops from "../components/Home/MainDealsAndDrops";
import SearchBar from "../components/Home/SearchBar";
import TestimonialSection from "../components/Home/TestimonialSection";
import TrendingDeals from "../components/Home/TrendingDeals";

export default function Home(){
    return <div className="min-h-screen w-full flex justify-center items-start bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 py-10 px-4 sm:px-8">
        <div className="w-full mx-auto space-y-8">
            <SearchBar />
            <TrendingDeals />
            <MainDealsAndDrops />
            <TestimonialSection />
            <ActionSection />
            <AboutSection />
        </div>
    </div>
}