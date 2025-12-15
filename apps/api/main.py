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

    shipment_create_request = components.ShipmentCreateRequest(
        address_from=address_from,
        address_to=address_to,
        parcels=[parcel],
        async_=False
    )

    logger.info('Creating shipment')
    shipment = shippo_sdk.shipments.create(shipment_create_request)

    logger.info(f'{len(shipment.rates)} rates found:')
    for rate in shipment.rates:
        logger.info(f'Provider: {rate.provider}')
        logger.info(f'Service Level: {rate.servicelevel.name}')
        logger.info(f'Price: ${rate.amount}\n')


if __name__ == ('__main__'):
    logger.info('Script Starting...')
    dotenv.load_dotenv()

    shippo_test()
