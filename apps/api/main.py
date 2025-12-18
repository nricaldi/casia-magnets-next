import logging
import dotenv
import os
import shippo
from shippo.models import components

logging.basicConfig(format='%(asctime)s - %(name)s :: %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

def shippo_test():
    shippo_api_key = os.getenv('SHIPPO_API_KEY')
    shippo_sdk = shippo.Shippo(api_key_header=shippo_api_key)

    address_from = components.AddressCreateRequest(
        name="Shawn Ippotle",
        street1="215 Clayton St.",
        city="San Francisco",
        state="CA",
        zip="94117",
        country="US"
    )

    address_to = components.AddressCreateRequest(
        name="Mr Hippo",
        street1="Broadway 1",
        city="New York",
        state="NY",
        zip="10007",
        country="US"
    )

    parcel = components.ParcelCreateRequest(
        length="5",
        width="5",
        height="5",
        distance_unit=components.DistanceUnitEnum.IN,
        weight="2",
        mass_unit=components.WeightUnitEnum.LB
    )

    shipment_request = components.ShipmentCreateRequest(
        address_from=address_from,
        address_to=address_to,
        parcels=[parcel],
        async_=False
    )

    logger.info('Creating shipment')
    shipment = shippo_sdk.shipments.create(shipment_request)

    logger.info(f'{len(shipment.rates)} rates found:\n')
    for rate in shipment.rates:
        logger.info(f'Provider: {rate.provider}')
        logger.info(f'Service Level: {rate.servicelevel.name}')
        logger.info(f'Price: ${rate.amount}')
        logger.info(f'Estimated days: {rate.estimated_days}\n')

    chosen_rate = shipment.rates[0]
    logging.info(f'Choosing {chosen_rate.provider} - {chosen_rate.servicelevel.name}')

    logger.info('Creating transaction...')
    transaction_request = components.TransactionCreateRequest(rate=chosen_rate.object_id, label_file_type=components.LabelFileTypeEnum.PDF, async_=False)
    transaction = shippo_sdk.transactions.create(transaction_request)

    if transaction.status == 'SUCCESS':
        logging.info(transaction.label_url)
        logging.info(transaction.tracking_number)
    else:
        logging.error(transaction.messages)


if __name__ == ('__main__'):
    logger.info('Script Starting...')
    dotenv.load_dotenv()

    shippo_test()
