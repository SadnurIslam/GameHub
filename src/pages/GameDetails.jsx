import React,{useEffect} from 'react';
import useGamesData from '../hooks/useGamesData';
import { useParams } from 'react-router';
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';


const GameDetails = () => {
    const { id } = useParams();
    const { gameData, loading } = useGamesData();

    useEffect(() => {
        if (loading) return;
        const game = gameData.find(g => parseInt(g.id) === parseInt(id));
        if (game) {
          document.title = `${game.title} | GameHub`;
        }
        else{
            document.title = "Game Not Found | GameHub";
        }
      }, [loading, id, gameData]);
      
    if (loading) {
        return <Spinner type="custom"></Spinner>
    }

    const game = gameData.find(data => parseInt(data.id) === parseInt(id));
    
    if(!game){
        return <NotFound></NotFound>
    }

    

    return (
        
        <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-[250px] md:h-[400px] lg:h-[550px] rounded-2xl shadow-lg object-fit"
                />

                <div className='flex flex-col justify-evenly'>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{game.title}</h1>
                        <p className="text-gray-400 mb-4">{game.category}</p>
                        <p className="text-gray-300 text-justify">{game.description}</p>
                    </div>
                    <div className="mt-6">
                        <p><span className="font-semibold text-white">Developer:</span> {game.developer}</p>
                        <p><span className="font-semibold text-white">Publisher:</span> Gamehub</p>
                        <p><span className="font-semibold text-white">Rating:</span> ⭐ {game.ratings}</p>
                    </div>
                    <div>
                        <div className='mt-10'>
                            <a target="_blank" href={game.downloadLink} className="mt-6 px-6 py-2 rounded-xl bg-green-600 hover:bg-green-700">
                                Download Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;