import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { likeRecipe, removeLikeRecipe } from "../../store/session";

const Favorite = ({ recipeId }) => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
//   const [isMessageOn, setIsMessageOn] = useState(false);

  // useEffect(() => {
  //     const timeoutId = setTimeout(() => setHeartStyle(`${styles.heart} ${styles.appear}`), 0)

  //     return () => clearTimeout(timeoutId)
  // }, [])

  const handleFavorite = async () => {
    const res = user.likes[recipeId]
      ? dispatch(removeLikeRecipe(recipeId))
      : dispatch(likeRecipe(recipeId));
    if (!res) {
    //   setIsMessageOn(false);
    //   setTimeout(() => setIsMessageOn(true), 0);
    }
  };

  return (
    <>
      <div className="favoriteBookMarkImage" onClick={handleFavorite}>
        {!!user && user.likes[recipeId] ? (
          <i style={{ color: "grey" }} className="fa-solid fa-bookmark"></i>
        ) : (
          <i className="fa-regular fa-bookmark"></i>
        )}
      </div>
    </>
  );
};

export default Favorite;
