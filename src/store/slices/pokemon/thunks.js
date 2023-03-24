import { pokemonApi } from "../../../api/pokemonApi";
import { setData, startLoading } from "./pokemonSlice";

export const getData = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setData({ data: data.results, page }));
  };
};
