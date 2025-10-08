import './TvShowsComponent.css'
import {FC} from "react";
import TvShowsCardComponent from "@/components/tv-shows-card-component/TvShowsCardComponent";
import {ITvShow} from "@/models/ITvShow";

type Props = {
    tvShows: ITvShow[],
    pageTitle: string
}

const TvShowsComponent:FC<Props> = ({tvShows, pageTitle}) => {

    return (
        <div>
            <h2 className="tv-shows-page-title">{pageTitle}</h2>
            <div className="tv-shows-grid">
                {
                    tvShows.map((tvShow) => <TvShowsCardComponent key={tvShow.id} tvShow={tvShow}/>)
                }
            </div>
        </div>

    );
};

export default TvShowsComponent;