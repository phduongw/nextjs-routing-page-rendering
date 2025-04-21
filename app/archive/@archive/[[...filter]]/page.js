import React from 'react';
import NewsList from "@/components/news-list";
import {getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth} from "@/lib/news";
import Link from "next/link";

const ArchiveFilterYearPage = ({ params }) => {
    const filter = params.filter;
    const selectedYear = filter ? filter[0] : undefined;
    const selectMonth = filter ? filter[1] : undefined;

    let news;
    let links = getAvailableNewsYears();
    if (selectedYear && !selectMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectMonth);
    }

    let newContent = <p>No news found for the selected period</p>

    if (news && news.length > 0) {
        newContent = <NewsList news={news} />;
    }


    return <>
        <header id='archive-header'>
            <nav>
                <ul>
                    { links.map(link => {
                        const herf = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                        return (
                            <li key={link}>
                                <Link href={herf}>{link}</Link>
                            </li>
                        )
                    }) }
                </ul>
            </nav>
        </header>
        {newContent}

    </>
    // const news = getNewsForYear(newsYear);
    //
    // return <NewsList news={news} />;
};

export default ArchiveFilterYearPage;