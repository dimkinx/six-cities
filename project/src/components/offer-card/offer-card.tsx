import {addActiveClass, getRatingPercentage} from '../../utils';
import {OfferType, OfferSittingsType} from '../../types/offer-types';

type OfferCardProps = {
  offerSittings: OfferSittingsType;
  offer: OfferType;
  setActiveCardId: (id: null | number) => void;
}

function OfferCard({offerSittings, offer, setActiveCardId}: OfferCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = offer;

  return (
    <article
      className={offerSittings.ArticleClassName}
      onMouseEnter={() => setActiveCardId(id)}
      onMouseLeave={() => setActiveCardId(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={offerSittings.ImageClassName}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={offerSittings.ImageSize.Width}
            height={offerSittings.ImageSize.Height}
            alt="Some place"
          />
        </a>
      </div>
      <div className={offerSittings.InfoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${addActiveClass(isFavorite, 'place-card__bookmark-button')} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingPercentage(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
