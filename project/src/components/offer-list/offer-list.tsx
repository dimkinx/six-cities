import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';
import {OfferType} from '../../common/const';

type OfferListProps = {
  offers: Offer[];
  offerType: OfferType;
  onActiveCardIdSelect?: (id: null | number) => void;
}

function OfferList({offers, offerType, onActiveCardIdSelect}: OfferListProps): JSX.Element {
  return (
    <div className={`${offerType === 'cities' ? `${offerType}__places-list tabs__content` : `${offerType}__list`} places__list`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          offerType={offerType}
          onActiveCardIdSelect={onActiveCardIdSelect}
        />
      ))}
    </div>
  );
}

export default OfferList;
