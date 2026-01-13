import { ActivityCalendar } from "react-activity-calendar";
import React, { useState, useEffect } from "react";

export default function GitHubStats() {
    const [mounted, setMounted] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalContributions, setTotalContributions] = useState(0);

    useEffect(() => {
        setMounted(true);

        async function fetchGitHubData() {
            try {
                const response = await fetch("https://github-contributions-api.jogruber.de/v4/Naveenp7");
                const json = await response.json();

                if (json.contributions) {
                    const today = new Date();

                    // 1. Sort by date ascending
                    const sortedData = json.contributions.sort((a: any, b: any) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime()
                    );

                    // 2. Filter out future dates (important because API returns full current year)
                    const pastData = sortedData.filter((activity: any) => {
                        return new Date(activity.date) <= today;
                    });

                    // 3. Take the last 365 days from the actual past data
                    const lastYearData = pastData.slice(-365);

                    // 4. Calculate total manually to ensure label matches
                    const total = lastYearData.reduce((acc: number, curr: any) => acc + curr.count, 0);

                    setData(lastYearData);
                    setTotalContributions(total);
                }
            } catch (error) {
                console.error("Failed to fetch GitHub data", error);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHubData();
    }, []);

    if (!mounted) {
        return <div className="h-32 w-full bg-neutral-800/50 animate-pulse rounded-md" />;
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-neutral-900 border border-neutral-800 rounded-xl w-full hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6 w-full justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Coding Activity
                </h3>
                <span className="text-xs text-neutral-500 font-mono">Past Year</span>
            </div>

            <div className="w-full text-white overflow-hidden flex justify-center">
                {loading ? (
                    <div className="h-32 w-full flex items-center justify-center text-neutral-500 text-sm animate-pulse">
                        Loading contributions...
                    </div>
                ) : (
                    <div className="scale-75 md:scale-100 origin-center">
                        {/* Check if data exists, otherwise show a fallback message or keep it empty */}
                        {data.length > 0 ? (
                            <ActivityCalendar
                                data={data}
                                colorScheme="dark"
                                theme={{
                                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                }}
                                labels={{
                                    totalCount: `${totalContributions} contributions in the last year`,
                                }}
                                showWeekdayLabels
                            />
                        ) : (
                            <p className="text-neutral-500 text-sm">No activity data found.</p>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-neutral-500 font-mono">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#39d353]"></div>
                    <span>High Activity</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#0e4429]"></div>
                    <span>Low Activity</span>
                </div>
            </div>
        </div>
    );
}
