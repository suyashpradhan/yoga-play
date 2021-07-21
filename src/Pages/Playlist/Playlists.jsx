import "./Playlists.css";
import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { useVideoContext } from "../../context";
import { Sidebar } from "../../components/Sidebar";

export const Playlists = () => {
  const {
    state: { toggleSidebar },
  } = useVideoContext();
  const {
    state: { playlists },
    dispatch,
  } = useVideoContext();

  return (
    <div className="pageLayout">
      <Sidebar />
      <main className={toggleSidebar ? "main" : "main mainToggled"}>
        <div className="mainContent">
          <h1 className="pageHeader">Playlists</h1>
          {playlists.map(({ playlistId, playlistName, videos }) => {
            return (
              <div className="playlists" key={playlistId}>
                <div className="flex j-space-between a-items-center">
                  <h3 class="playlistName">{playlistName}</h3>
                  <button
                    className="button button-danger"
                    onClick={() =>
                      dispatch({
                        type: "DELETE_PLAYLIST",
                        payload: playlistId,
                      })
                    }
                  >
                    Delete Playlist
                  </button>
                </div>
                <div className="playlistRow">
                  {videos.map((videoId, _id) => {
                    return (
                      <PlaylistCard
                        playlistId={playlistId}
                        key={videoId}
                        videoId={videoId}
                        _id={_id}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
