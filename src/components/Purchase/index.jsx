import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getRecipeWithId } from "../../utils/getRecipe";
import Loader from "../common/Loader";
import "./style.css";

function Purchase(props) {
  const history = useHistory();
  const { search } = useLocation();
  const [recipe, setRecipe] = useState(null);
  const [showOTP, setShowOTP] = useState(false);
  const [cardDetails, setCardDetails] = useState("");
  const [OTP, setOTP] = useState("");
  const handleInputCheck = (e) => {
    const cardValue = String(e.target.value);
    if (cardValue.length === 0) return;
    if (cardValue.replaceAll(" ", "").length > 17) {
      e.target.value = e.target.value.substring(0, 18);
    } else if (
      cardValue.replaceAll(" ", "").length % 4 === 0 &&
      cardValue.length < 18
    ) {
      e.target.value += " ";
    }
    const cardDetails = cardValue.replaceAll(" ", "");
    setCardDetails(cardDetails);
  };
  const handleOTP = (e) => {
    const OTP = parseInt(e.target.value);
    if (OTP.toString().length === 0) return;
    if (OTP > 999999) {
      e.target.value = OTP.toString().substring(0, 6);
    }
    setOTP(OTP);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showOTP) setShowOTP(true);
    else {
      if (OTP === 123456 && cardDetails.length === 16) {
        history.push({
          pathname: "/transaction-details",
          state: {
            isAuthenticated: true,
            isSuccess: true,
          },
        });
      } else {
        history.push({
          pathname: "/transaction-details",
          state: {
            isAuthenticated: true,
            isSuccess: false,
          },
        });
      }
    }
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const id = parseInt(urlParams.get("id"));
    if (id === undefined || isNaN(id)) {
      history.push("/browse");
    }
    if (recipe == null) getRecipeWithId(id).then((recipe) => setRecipe(recipe));
  }, [history, recipe, search]);
  if (!recipe) return <Loader />;
  return (
    <>
      <h1>Purchase Recipe</h1>
      <div className="payment__container">
        <div className="payment__card">
          <div className="purchase__heading">
            <h3 className="recipe__name">{recipe["name"]}</h3>
            <p className="recipe__category">Category: {recipe["category"]}</p>
          </div>
          <div className="purchase__body">
            <div className="description">
              <h2 className="heading">Description:</h2>
              <h5>{recipe["description"]}</h5>
            </div>
            <div className="recipe__image">
              <img src={recipe["image"]} alt={recipe["name"]} />
            </div>
          </div>
          <div className="payment__info">
            <h3>Add Payment Info</h3>
            <div className="card__details">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="payment__options"
              >
                <div className="card-details__container">
                  <label htmlFor="credit-card">
                    Enter Card Details:
                    <input
                      type="text"
                      className="credit-card__details"
                      name="credit-card"
                      onInput={(e) => handleInputCheck(e)}
                      placeholder="---- ---- ---- ----"
                      minLength={19}
                      maxLength={19}
                      pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
                      title="Enter ONLY numbers"
                      required
                    />
                  </label>
                </div>

                {showOTP ? (
                  <div className="card-details__container">
                    <label htmlFor="otp">
                      Enter OTP:
                      <input
                        type="number"
                        name="otp"
                        className="credit-card__details"
                        placeholder="Enter OTP"
                        onChange={handleOTP}
                        max={999999}
                        required
                      />
                    </label>
                  </div>
                ) : null}
                <input type="submit" value="Pay" className="card-submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="purchase__summary">
          <div className="summary heading">
            <h3>Total Summary</h3>
          </div>
          <h3 className="final__price">Price: {recipe["price"]} $</h3>
        </div>
      </div>
    </>
  );
}

export default Purchase;
