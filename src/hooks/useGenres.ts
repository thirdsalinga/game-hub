import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client"; 
import genres from "../data/genres";
const apiClient = new APICLient<Genre>('/genres')
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 Hours
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
 