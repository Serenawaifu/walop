// Sample data fetching functions
export const getAnimes = async () => {
    // Fetch anime data from an API or database
    return [
        { id: 1, title: 'Naruto' },
        { id: 2, title: 'One Piece' },
    ];
};

export const getAnimeById = async (id: number) => {
    const animes = await getAnimes();
    return animes.find(anime => anime.id === id);
};
